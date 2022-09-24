import { makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";

function Carousel() {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const useStyles = makeStyles(() => ({
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
    },
    carouselItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      color: "white",
      textTransform: "uppercase",
    },
  }));

  const classes = useStyles();

  const items = trending?.map((coin) => {
    let profit = coin?.price_change_percentage_24h > 0;

    return (
      <p className={classes.carouselItem}>
        <img
          src={coin?.image}
          alt={coin.name}
          height="80"
         
          style={{ marginBottom: 10 }}
        />
        <span>
          {coin?.symbol} &nbsp;
          <span style={{ color: profit > 0 ? "green" : "red" }}>
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>{symbol} {coin?.current_price.toFixed(2)}</span>
      </p>
    );
  });

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    console.log(data);
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={100}
        animationDuration={1500}
        responsive={responsive}
        disableButtonsControls
        disableDotsControls
        items={items}
      
        autoPlay
      />
    </div>
  );
}

export default Carousel;
