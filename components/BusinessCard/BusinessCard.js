import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Box, Flex, Image, Skeleton, Text } from "@chakra-ui/react";
import { PhoneIcon, StarIcon } from "@chakra-ui/icons";

const BusinessCard = ({
  id,
  imageUrl,
  imageAlt,
  title,
  address,
  phone,
  reviewCount,
  rating,
}) => {
  return (
    <Link href={`/business/${id}`} passHref>
      <Box
        maxW={["sm", "xs", "sm", "xs"]}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        _hover={{ boxShadow: "0 0 11px rgba(33,33,33,.2)" }}
        transition="box-shadow .3s"
      >
        <Box height="180px">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={imageUrl[0]}
            alt={imageAlt}
            fallback={<Skeleton h="180px" />}
            fallbackSrc="/images/180.png"
          />
        </Box>

        <Box p="6">
          <Box fontWeight="semibold" as="h4" fontSize="md" isTruncated>
            {title}
          </Box>
          <Flex alignItems="center" height="25px">
            <StarIcon w={4} h={4} color="#FF9839" />
            <Box as="span" ml="1" fontWeight="semibold">
              {rating}
            </Box>
            <Box as="span" ml="1">
              {`(${reviewCount})`}
            </Box>
          </Flex>
          <Box mt="5">
            <Box as="span">{address}</Box>
          </Box>
          <Flex mt="4" align="center">
            <PhoneIcon w={4} h={4} />
            <Box ml="1" as="span" fontWeight="regular">
              {phone}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
};

BusinessCard.propTypes = {
  imageUrl: PropTypes.array.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string,
  reviewCount: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

BusinessCard.defaultProps = {
  imageUrl: [
    "https://s3-media1.fl.yelpcdn.com/bphoto/GxwC-weYAaG9zKnhWgglSw/o.jpg",
  ],
  imageAlt: "Rear view of modern home with pool",
  title: "Modern home in city center in the heart of historic Los Angeles",
  address: "3410 Judah St\nSan Francisco, CA 94122",
  phone: "(415) 982-9738",
  reviewCount: 34,
  rating: 5,
};

export default BusinessCard;
