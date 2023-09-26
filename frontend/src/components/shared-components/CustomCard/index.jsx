import React from "react";
import Rating from "../Rating";
import ImagePlaceHolder from "@images/imageplaceholder.png";

function CustomCard({ image, title, rating, reviewCount, price }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={image ?? ImagePlaceHolder}
        height={1600}
        width={900}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center">
          <Rating rating={rating ?? 0} />
          <div className="text-sm ml-2">({reviewCount ?? 0} Reviews)</div>
        </div>
      </div>
      <div className="px-6 mb-4">
        <div className="text-lg text-palette-orange">₹{price ?? 0}</div>
      </div>
    </div>
  );
}

export default CustomCard;
