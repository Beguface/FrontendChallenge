import { initializeApollo } from "../libs/apolloClient";
import { GET_BUSINESSES } from "@gql/getBusinesses";
import BusinessesContainer from "@components/Containers/BusinessesContainer";
import { Box, Text } from "@chakra-ui/react";

const Search = ({ businesses }) => {
  console.log(businesses);
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

  if (ctx.query) {
    const { term, location } = ctx.query;
    const { data } = await apolloClient.query({
      query: GET_BUSINESSES,
      variables: { term, location },
    });
    businesses = data.search.business;
    console.log(data);
  } else {
    ctx.res.writeHead(302, { Location: "/" });
    ctx.res.end();
    return;
  }

  return {
    props: {
      businesses,
    },
  };
}
