import React from "react";
import Carousel from "../carousel/Carousel";
import "./Banner.css";
import { Typography } from "@material-ui/core";

function Banner() {
  return (
    <div className="banner">
      <Typography varient="h1" align="center">
        Crypto Tracker
      </Typography>
      <Carousel />
    </div>
  );
}

export default Banner;
