import { gql } from "@apollo/client";

export const GET_BUSINESSES = gql`
  query GetBusiness($term: String!, $location: String!) {
    search(term: $term, location: $location, limit: 10) {
      total
      business {
        id
        photos
        name
        location {
          formatted_address
        }
        review_count
        rating
        display_phone
        phone
      }
    }
  }
`;
