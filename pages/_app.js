import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { useApollo } from "../libs/apolloClient";
import theme from "../theme";
import AppLayout from "@components/Layout/AppLayout";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
