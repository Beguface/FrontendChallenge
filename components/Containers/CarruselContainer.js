import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-grid-carousel";
import BusinessCard from "@components/BusinessCard/BusinessCard";
import { Heading } from "@chakra-ui/react";

const CardContainer = ({ title }) => {
  return (
    <>
      <Heading as="h5" size="sm" mb="4">
        {title}
      </Heading>
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
        loop
      >
        <Carousel.Item>
          <BusinessCard />
        </Carousel.Item>
        <Carousel.Item>
          <BusinessCard />
        </Carousel.Item>
        <Carousel.Item>
          <BusinessCard />
        </Carousel.Item>
        <Carousel.Item>
          <BusinessCard />
        </Carousel.Item>
        <Carousel.Item>
          <BusinessCard />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

CardContainer.propTypes = {
  title: PropTypes.string,
};

CardContainer.defaultProps = {
  title: "Vistos recientemente",
};

export default CardContainer;
