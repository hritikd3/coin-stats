import React from "react";
import "./Home.css";
import { Banner, CoinsTable } from "../../components";
function Home(){
  return <div className="home-page"> <Banner /> <CoinsTable />  </div>; };

export default Home;