import React from "react";
import PropTypes from "prop-types";
import ReviewItem from "@components/ReviewItem/ReviewItem";
import { Box, Text } from "@chakra-ui/react";

const ReviewsContainer = ({ reviews }) => {
  return (
    <Box mt={{ md: "24" }}>
      <Text as="h3" fontWeight="semibold">
        Reviews
      </Text>
      {reviews.map(({ id, text, rating, user }) => (
        <ReviewItem key={id} comment={text} user={user} rating={rating} />
      ))}
    </Box>
  );
};

ReviewsContainer.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsContainer;
