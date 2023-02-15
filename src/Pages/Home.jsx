import React, { Fragment } from "react";
import BestSellingProducts from "../Components/Home/BestSellingProducts";
import OrderOverview from "../Components/Home/OrderOverview";

const Home = () => {
  return (
    <Fragment>
      <BestSellingProducts />
      <OrderOverview />
    </Fragment>
  );
};

export default Home;
