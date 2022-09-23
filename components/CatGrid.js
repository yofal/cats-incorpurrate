import React from "react";
import CatItem from "./CatItem";

const CatGrid = ({ data }) => {
  return (
    <div className="bg-black grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
      {data &&
        data.length > 0 &&
        data.map((item) => <CatItem item={item} key={item.name} />)}
    </div>
  );
};

export default CatGrid;
