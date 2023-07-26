import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[2030px] mx-auto xl:px-36 lg:px-20 md:px-10 sm:px-5 px-1">
      {children}
    </div>
  );
};

export default Container;
