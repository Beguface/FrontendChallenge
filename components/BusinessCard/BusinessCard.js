import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Box, Flex, Image, Skeleton } from "@chakra-ui/react";
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
        cursor="pointer"
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
          <Box mt="5" h="42px">
            <Box as="span">{address}</Box>
          </Box>
          <Flex mt="4" align="center">
            <PhoneIcon w={4} h={4} />
            <Box ml="1" as="span" fontWeight="regular">
              {phone || "No disponible"}
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

export default BusinessCard;
