import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./banner2.jpg)",
    // height: "100vh",
  },
  bannerContent: {
      height:400,
      display:'flex',
      flexDirection:'column',
      paddingTop:25,
      justifyContent:'space-around'
  },
  tagline:{
      display:'flex',
      height:'40%',
      flexDirection:'column',
      justifyContent:'center',
      textAlign:'center'
  }

}));
function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography variant="h2" style={{ fontWeight: "bold" }}>
            CryptoTracker
          </Typography>
          <Typography variant="subtitle2" style={{color:'darkgray',textTransform:"capitalize"}}>
              Get all the info regarding your fav Crypto Currency
          </Typography>
        </div>
        <Carousel/>
      </Container>
    </div>
  );
}

export default Banner;
