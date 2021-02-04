import React from "react";
import PropTypes from "prop-types";
import { Box, Divider, Flex, Image, Tag } from "@chakra-ui/react";
import { PhoneIcon, StarIcon, TimeIcon } from "@chakra-ui/icons";

const DetailBusiness = ({ detail }) => {
  const {
    photos,
    name,
    display_phone,
    price,
    rating,
    review_count,
    hours,
    location: { formatted_address },
  } = detail;
  return (
    <>
      <Box height="300px">
        <Image
          src={photos[0]}
          objectFit="cover"
          boxSize="100%"
          borderRadius={5}
        />
      </Box>
      <Box py="4">
        <Flex justify="space-between" align="baseline">
          <Box>
            <Box fontWeight="semibold" as="h4" fontSize="md" isTruncated>
              {name}
            </Box>
            <Flex alignItems="center" height="25px" mb="3">
              <StarIcon w={4} h={4} color="#FF9839" />
              <Box as="span" ml="1" fontWeight="semibold">
                {rating}
              </Box>
              <Box as="span" ml="1">
                {`(${review_count})`}
              </Box>
            </Flex>
          </Box>

          <Box>
            {hours[0].is_open_now ? (
              <Tag colorScheme="green" variant="outline" size="lg">
                Abierto
              </Tag>
            ) : (
              <Tag colorScheme="red" variant="outline" size="lg">
                Cerrado
              </Tag>
            )}
          </Box>
        </Flex>

        <Divider mb="5" />

        <Box mt="5">
          <Box as="span">{formatted_address}</Box>
        </Box>
        <Flex mt="4" align="center">
          <PhoneIcon boxSize="4" />
          <Box ml="2" as="span" fontWeight="regular">
            {display_phone}
          </Box>
        </Flex>
        <Flex mt="4" align="center">
          <TimeIcon boxSize="4" />
          <Box ml="2" as="span" fontWeight="regular">
            {`${hours[0].open[0].start} - ${hours[0].open[0].end} h`}
          </Box>
        </Flex>
        <Box mt="4">{price}</Box>
      </Box>
    </>
  );
};

DetailBusiness.propTypes = {
  detail: PropTypes.object.isRequired,
};

export default DetailBusiness;
