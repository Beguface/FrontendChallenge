import { gql } from "@apollo/client";

export const GET_DETAILS_BUSINESS = gql`
  query GetDetailsBusiness($id: String!) {
    business(id: $id) {
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
      price
      hours {
        is_open_now
      }
      reviews(limit: 5) {
        id
        text
        user {
          image_url
          name
        }
      }
    }
  }
`;
