import PropTypes from "prop-types";
import { SimpleGrid } from "@chakra-ui/react";
import BusinessCard from "@components/BusinessCard/BusinessCard";

const BusinessesContainer = ({ businesses }) => {
  return (
    <>
      <SimpleGrid
        columns={[1, 2, 3, 4, 4, 5]}
        justifyItems={{ base: "center", sm: "initial" }}
        gap={6}
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
            <BusinessCard
              key={id}
              id={id}
              imageUrl={photos}
              imageAlt={name}
              title={name}
              address={location.formatted_address}
              phone={display_phone}
              reviewCount={review_count}
              rating={rating}
            />
          )
        )}
      </SimpleGrid>
    </>
  );
};

BusinessesContainer.propTypes = {
  businesses: PropTypes.array.isRequired,
};

export default BusinessesContainer;
