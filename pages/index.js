import { Box } from "@chakra-ui/react";
import CarruselContainer from "@components/Containers/CarruselContainer";

export default function Home() {
  return (
    <>
      <Box>
        <CarruselContainer />
      </Box>
    </>
  );
}

// export async function getServerSideProps(ctx) {
//   const apolloClient = initializeApollo();
//   let businesses = [],
//     error;
//   let term = "pizza";
//   let location = "san francisco";

//   try {
//     const { data } = await apolloClient.query({
//       query: gql`
//         query GetBusiness($term: String!, $location: String!) {
//           search(term: $term, location: $location, limit: 10) {
//             total
//             business {
//               id
//               photos
//               name
//               location {
//                 address1
//                 city
//                 state
//                 postal_code
//                 country
//                 formatted_address
//               }
//               review_count
//               rating
//               display_phone
//               phone
//             }
//           }
//         }
//       `,
//       variables: { term, location },
//     });
//     businesses = data.search.business;
//   } catch (e) {
//     error = e;
//   }

//   return {
//     props: {
//       businesses,
//     },
//   };
// }
