import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-grid-carousel";
import BusinessCard from "@components/BusinessCard/BusinessCard";
import { Heading, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const CardContainer = ({ title }) => {
  const businesses = useSelector((state) => state.businesses);
  console.log(
    "🚀 ~ file: CarruselContainer.js ~ line 10 ~ CardContainer ~ businesses",
    businesses
  );

  return (
    <>
      <Heading as="h5" size="sm" mb="4">
        {title}
      </Heading>
      {businesses.length > 0 ? (
        <Carousel
          cols={5}
          rows={1}
          gap={10}
          mobileBreakpoint={639}
          responsiveLayout={[
            {
              breakpoint: 1644,
              cols: 4,
            },
            {
              breakpoint: 1310,
              cols: 3,
            },
            {
              breakpoint: 1023,
              cols: 2,
            },

            {
              breakpoint: 767,
              cols: 2,
            },
          ]}
        >
          {businesses.map(
            ({
              id,
              photos,
              name,
              location,
              display_phone,
              rating,
              review_count,
            }) => (
              <Carousel.Item key={id}>
                <BusinessCard
                  id={id}
                  imageUrl={photos}
                  imageAlt={name}
                  title={name}
                  address={location.formatted_address}
                  phone={display_phone}
                  reviewCount={review_count}
                  rating={rating}
                />
              </Carousel.Item>
            )
          )}
        </Carousel>
      ) : (
        <Text> Nada que ver aún 🙁</Text>
      )}
    </>
  );
};

CardContainer.propTypes = {
  title: PropTypes.string,
};

CardContainer.defaultProps = {
  title: "Buscados recientemente",
};

export default CardContainer;
