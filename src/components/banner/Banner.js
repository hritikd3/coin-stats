import React from "react";
import Carousel from "../carousel/Carousel";
import "./banner-styles.js";
import { Typography } from "@material-ui/core";
import useStyles from "./banner-styles.js";


function Banner() {
    const classes=useStyles();
  return (
    <div className={classes.banner}>
      <Typography variant="h2"
      align="center"
      color='primary'
      >
       Heading
      </Typography>
      <Typography variant="subtitle"
      align="center"
      color='secondary'
      >
      Get all information regardin your favourite ceypto vcoins
      </Typography>
      <Carousel />
    </div>
  );
}

export default Banner;
