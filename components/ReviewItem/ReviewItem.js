import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const ReviewItem = ({ comment, user, rating }) => {
  const { image_url, name } = user;
  return (
    <Flex p="2" my="3">
      <Avatar src={image_url} />
      <Box px="2" ml="1">
        <Box as="h4" fontWeight="semibold" mb="2">
          {name}
        </Box>
        <Flex mb="2" align="center">
          <StarIcon boxSize="4" color="#FF9839" mb="2px" />
          <Box as="span" ml="1" fontWeight="semibold">
            {rating}
          </Box>
        </Flex>
        <Box as="p">{comment}</Box>
      </Box>
    </Flex>
  );
};

ReviewItem.propTypes = {
  comment: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default ReviewItem;
