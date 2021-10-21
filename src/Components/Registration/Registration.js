import React from "react";
import useAuth from "../../hooks/useAuth";
import googleIcon from "../../Images/google_icon.png";
import githubIcon from "../../Images/github_icon.png";

const Registration = () => {
  const { signInUsingGoogle, signInUsingGithub } = useAuth();
  return (
    <div className="flex flex-col pb-48 pt-20 text-white">
      <h2 className="text-white hover:text-white text-6xl">Please Sign In</h2>
      <div className="flex justify-center mb-3">
        <img src={googleIcon} alt="Google" className="w-8 h-8 mr-3" />
        <button onClick={signInUsingGoogle} className="hover:text-yellow-300 text-red-300 text-4xl">Google Sign In</button>
      </div>
      <div className="flex justify-center mb-3">
        <img src={githubIcon} alt="Github" className="w-8 h-8 mr-3" />
        <button onClick={signInUsingGithub} className="hover:text-yellow-300 text-blue-300 text-4xl">GitHub Sign In</button>
      </div>
    </div>
  );
};

export default Registration;
