import React from "react";
import { Link } from "react-router-dom";
import useData from "../../../../Util/Hooks/useData";

const HeaderTop = () => {
  const [headerTopItems] = useData();
  return (
    <div className="flex gap-10 text-xs justify-end py-1">
      {headerTopItems.map((item, index) => (
        <Link key={index} to={`${item.path}`}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default HeaderTop;
