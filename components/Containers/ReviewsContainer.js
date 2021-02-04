import React from "react";
import PropTypes from "prop-types";
import ReviewItem from "@components/ReviewItem/ReviewItem";
import { Heading } from "@chakra-ui/react";

const ReviewsContainer = ({ reviews }) => {
  return (
    <div>
      <Heading as="h3" size="xs">
        Reviews
      </Heading>
      {reviews.map(({ id, text, rating, user }) => (
        <ReviewItem key={id} comment={text} user={user} rating={rating} />
      ))}
    </div>
  );
};

ReviewsContainer.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsContainer;
