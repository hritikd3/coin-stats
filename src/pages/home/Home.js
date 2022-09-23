import React from "react";
import { Banner, CoinsTable } from "../../components";
import { CoinList } from "../../common/apis";
import "./Home.css";

const Home = () =>{
 const trendingCoinData= CoinList('INR')
console.log(trendingCoinData)
return(
  <div className="home-page">
    <Banner />
    <CoinsTable />
  </div>
)
}

export default Home;