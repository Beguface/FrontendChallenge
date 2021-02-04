import { useMemo } from "react";
import { ApolloClient, HttpLink } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";
import { setContext } from "@apollo/client/link/context";
import { mergeDeep } from "@apollo/client/utilities";
import { isEqualType } from "graphql";

let apolloClient;

const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.API_KEY}`,
      "Access-Control-Allow-Origin": "*",
    },
  };
});

const httpLink = new HttpLink({
  uri: `${process.env.GRAPHQL_ENDPOINT}`,
  credentials: "include",
  fetchOptions: {
    mode: "no-cors",
  },
});

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  const apolloClientInstance = apolloClient ?? createApolloClient();
  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = apolloClientInstance.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = mergeDeep(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqualType(d, s))
        ),
      ],
    });
    apolloClientInstance.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return apolloClientInstance;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = apolloClientInstance;
  return apolloClientInstance;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
