import React from "react";
import BannerImage from "../../Images/banner.jpg";
const Banner = () => {
  return (
    <div>
      <img
        src={BannerImage}
        alt="Banner"
        className="hover:scale-105 border-yellow-700 border-8 my-3 transition-all ease-linear transform overflow-hidden w-3/4 mx-auto"
      />
    </div>
  );
};

export default Banner;
