import React from "react";
import useAuth from "../../hooks/useAuth";
import googleIcon from "../../Images/google_icon.png";
import githubIcon from "../../Images/github_icon.png";

const Registration = () => {
  const { signInUsingGoogle, signInUsingGithub } = useAuth();
  return (
    <div className="flex flex-col py-48">
      <h2 className="text-white text-3xl">Please Sign In</h2>
      <div className="flex justify-center mb-3">
        <img src={googleIcon} alt="Google" className="w-8 mr-3" />
        <button onClick={signInUsingGoogle} className="hover:text-yellow-300 text-red-300">Google Sign In</button>
      </div>
      <div className="flex justify-center mb-3">
        <img src={githubIcon} alt="Github" className="w-8 mr-3" />
        <button onClick={signInUsingGithub} className="hover:text-yellow-300 text-blue-300">GitHub Sign In</button>
      </div>
    </div>
  );
};

export default Registration;
