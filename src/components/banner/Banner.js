import React from "react";
import Carousel from "../carousel/Carousel";
import "./Banner.css";
import { Typography, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme=>{
    return {
        banner :{
            backgroundImage: 'url(./banner2.jpg)'
        }
    }
})

function Banner() {
    const classes=useStyles();
  return (
    <div className={classes.banner}>
      <Typography variant="h2"
      align="center" >
        h1. Heading
      </Typography>
      <Carousel />
    </div>
  );
}

export default Banner;
