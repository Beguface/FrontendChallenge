import { initializeApollo } from "libs/apolloClient";
import { GET_DETAILS_BUSINESS } from "@gql/getDetailsBusiness";
import ReviewsContainer from "@components/Containers/ReviewsContainer";
import DetailBusiness from "@components/DetailBusiness/DetailBusiness";
import { Box, Image, Grid, Skeleton } from "@chakra-ui/react";
import Error from "next/error";
import BackButton from "@components/BackButton/BackButton";

const Business = ({ detailBusiness, statusCode }) => {
  const { reviews, photos } = detailBusiness;

  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <>
      <BackButton />
      <Box height="300px">
        <Image
          src={photos[0]}
          objectFit="cover"
          boxSize="100%"
          fallback={<Skeleton h="180px" />}
          borderRadius={5}
        />
      </Box>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, minmax(100px, 700px))",
        ]}
        gap="5"
      >
        <DetailBusiness detail={detailBusiness} />
        <ReviewsContainer reviews={reviews} />
      </Grid>
    </>
  );
};

export default Business;

export async function getServerSideProps(ctx) {
  const apolloClient = initializeApollo();
  let detailBusiness = [];
  if (ctx.query.id) {
    try {
      const { id } = ctx.query;
      const {
        data: { business },
      } = await apolloClient.query({
        query: GET_DETAILS_BUSINESS,
        variables: { id },
      });
      detailBusiness = business;

      return {
        props: {
          detailBusiness,
          statusCode: 200,
        },
      };
    } catch (e) {
      ctx.statusCode = 503;
      return { props: { detailBusiness, statusCode: 503 } };
    }
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}
