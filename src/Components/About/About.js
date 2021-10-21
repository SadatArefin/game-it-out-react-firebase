import React from "react";
import Rafat from "../../Images/rafat.jpg";
import Yeasin from "../../Images/yeasin.jpg";
import Ezaz from "../../Images/ezaz.jpg";
const About = () => {
  return (
    <section className="pb-36 pt-10">
      <h2 className="text-7xl mb-10 text-red-500">About Us</h2>
      <div className="flex flex-col md:flex-row md:justify-evenly text-yellow-200">
        <div>
          <img
            src={Yeasin}
            alt="Yeasin Hossain"
            className="w-64 rounded-full bg-white mb-5 mx-auto"
          />
          <h3 className="text-2xl">Md. Yeasin Hossain</h3>
          <p className="text-xl">
            ID: <strong>180041125</strong>
          </p>
        </div>
        <div>
          <img
            src={Rafat}
            alt="Sadat Arefin Rafat"
            className="w-64 rounded-full bg-white mb-5 mx-auto"
          />
          <h3 className="text-2xl">Sadat Arefin Rafat</h3>
          <p className="text-xl">
            ID: <strong>180041106</strong>
          </p>
        </div>
        <div>
          <img
            src={Ezaz}
            alt="Md Nakibul Ezaz"
            className="w-64 rounded-full bg-white mb-5 mx-auto"
          />
          <h3 className="text-2xl">MD Nakibul Ezaz</h3>
          <p className="text-xl">
            ID: <strong>180041115</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
