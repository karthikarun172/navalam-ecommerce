/** @format */

import { useLottie } from "lottie-react";
import animationData from "../Assests/LoadingAnimation.json";
import animationData2 from "../Assests/LoadingAnimation_2.json";

const LoadingAnimation = () => {
  const value = Math.floor(Math.random() * 2);

  const options = {
    animationData: value === 0 ? animationData2 : animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default LoadingAnimation;
