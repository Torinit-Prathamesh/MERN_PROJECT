import React from "react";

function Rating({ rating }) {
  const array = Array(5)?.fill("");

  return (
    <ul className="flex">
      {array?.map((_, index) => {
        return (
          <li key={index}>
            <i
              className={`${
                rating > index ? "fas" : "far"
              } fa-star text-palette-orange`}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Rating;
