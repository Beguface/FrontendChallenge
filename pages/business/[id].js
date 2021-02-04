import { PhoneIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, Image, Tag, Text } from "@chakra-ui/react";
import ReviewsContainer from "@components/Containers/ReviewsContainer";
import DetailBusiness from "@components/DetailBusiness/DetailBusiness";
import { GET_DETAILS_BUSINESS } from "@gql/getDetailsBusiness";
import { initializeApollo } from "libs/apolloClient";

const Business = ({ detailBusiness }) => {
  const { reviews } = detailBusiness;
  return (
    <>
      <DetailBusiness detail={detailBusiness} />
      <Divider mb="5" />
      <ReviewsContainer reviews={reviews} />
    </>
  );
};

export default Business;

export async function getServerSideProps(ctx) {
  const apolloClient = initializeApollo();
  let detailBusiness = [];

  if (ctx.query.id) {
    const { id } = ctx.query;
    const {
      data: { business },
    } = await apolloClient.query({
      query: GET_DETAILS_BUSINESS,
      variables: { id },
    });
    detailBusiness = business;
  } else {
    ctx.res.writeHead(302, { Location: "/" });
    ctx.res.end();
  }

  return {
    props: {
      detailBusiness,
    },
  };
}
