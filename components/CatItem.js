import React from "react";
import Image from "next/image";


const CatItem = ({item}) => {
  return (
    <div className="m-1">
      {/* used for test */}
      {/* <p className="text-white">{item.cutenessLevel}</p> */}
      <Image
        key={item.name}
        src={`/images/${item.image}`}
        alt={item.name}
        width={420}
        height={420}
      />
    <p className="text-center bg-white p-4 text-lg text-black">{item.name}</p>
    </div>
  );
};

export default CatItem;
