import React from "react";

import Container from "../Common/Container";
import HeaderContent from "./HeaderContent/HeaderContent";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
  return (
    <>
      <Container>
        <HeaderTop />
      </Container>
      <div className="bg-white">
        <Container>
          <HeaderContent />
        </Container>
      </div>
    </>
  );
};

export default Header;
