import React from "react";
import AppStoreImage from "../../Images/app-store.svg";
import PlayStoreImage from "../../Images/play-store.svg";
const Footer = () => {
  return (
    <div className="bg-gray-800 pb-20 md:pb-36 pt-10 grid grid-cols-1 md:grid-cols-2">
      <div className="text-white">
        <div className="flex flex-wrap">
          <p className="px-2 hover:text-yellow-400">Download Now </p>
          <p className="px-2 hover:text-yellow-400">License</p>
        </div>
        <div className="flex flex-wrap">
          <p className="px-2 hover:text-yellow-400">About </p>
          <p className="px-2 hover:text-yellow-400">Features </p>
          <p className="px-2 hover:text-yellow-400">Pricing </p>
          <p className="px-2 hover:text-yellow-400">Careers </p>
          <p className="px-2 hover:text-yellow-400">Help </p>
          <p className="px-2 hover:text-yellow-400">Privacy Policy </p>
        </div>
      </div>
      <div className="text-white">
        <h3>Get The App</h3>
        <img src={AppStoreImage} alt="Play Store" className="w-28 mx-auto" />
        <img src={PlayStoreImage} alt="App Store" className="w-28 mx-auto" />
      </div>
    </div>
  );
};

export default Footer;
