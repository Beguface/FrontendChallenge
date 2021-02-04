import { initializeApollo } from "libs/apolloClient";
import { GET_DETAILS_BUSINESS } from "@gql/getDetailsBusiness";
import ReviewsContainer from "@components/Containers/ReviewsContainer";
import DetailBusiness from "@components/DetailBusiness/DetailBusiness";
import { Divider } from "@chakra-ui/react";
import Error from "next/error";

const Business = ({ detailBusiness, statusCode }) => {
  const { reviews } = detailBusiness;

  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }

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

  return {
    props: {
      detailBusiness,
    },
  };
}
