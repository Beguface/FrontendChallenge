import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { useApollo } from "../libs/apolloClient";
import theme from "../theme";
import AppLayout from "@components/Layout/AppLayout";
import { Provider } from "react-redux";
import { useStore } from "libs/redux";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);
  const store = useStore(pageProps.initialReduxState);

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <AppLayout {...pageProps}>
            <Component {...pageProps} />
          </AppLayout>
        </ApolloProvider>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
