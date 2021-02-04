import { GET_BUSINESSES } from "@gql/getBusinesses";
import { initializeApollo } from "../libs/apolloClient";
import BusinessesContainer from "@components/Containers/BusinessesContainer";
import { Box, Text } from "@chakra-ui/react";
import Error from "next/error";

const Search = ({ businesses, statusCode }) => {
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <>
      <Box as="h1" mb="4">
        Resultados de la busqueda:
      </Box>

      {businesses.length < 1 ? (
        <Text as="h3" color="blue.600">
          No se encontro ningun resultado.
        </Text>
      ) : (
        <BusinessesContainer businesses={businesses} />
      )}
    </>
  );
};

export default Search;

export async function getServerSideProps(ctx) {
  const apolloClient = initializeApollo();
  let businesses = [];

  if (ctx.query.location && ctx.query.term) {
    try {
      const { term, location } = ctx.query;
      const { data } = await apolloClient.query({
        query: GET_BUSINESSES,
        variables: { term, location },
      });
      businesses = data.search.business;

      return {
        props: {
          businesses,
          statusCode: 200,
        },
      };
    } catch (e) {
      ctx.statusCode = 503;
      return { props: { businesses, statusCode: 503 } };
    }
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}
