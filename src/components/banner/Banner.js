import React from "react";
import Carousel from "../carousel/Carousel";
import "./Banner.css";
import { Typography } from "@material-ui/core";

function Banner() {
  return (
    <div className="banner">
      <Typography variant="h2"
      align="center" >
        h1. Heading
      </Typography>
      <Carousel />
    </div>
  );
}

export default Banner;
