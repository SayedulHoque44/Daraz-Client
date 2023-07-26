import React from "react";
import Container from "../Shared/Common/Container";
import Bannar from "./Bannar/Bannar";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
import Sponsor from "./Sponsor/Sponsor";

const Home = () => {
  return (
    <div className="">
      <Container>
        <Bannar />
        <Sponsor />
        <Categories />
        <Products />
      </Container>
    </div>
  );
};

export default Home;
