import React, { useEffect } from "react";
import { preLoaderAnim } from "../../animations";
import "./PreLoader.css"
import { Logo } from "../../images";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <span><img src={Logo} width={100} /></span>
      <div className="texts-container">
        <span>Shaping </span>
        <span> Tomorrow's</span>
        <span>Doctors</span>
      </div>
    </div>
  );
};

export default PreLoader;