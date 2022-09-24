import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/banner/Banner";
import CoinsTable from "./components/CoinsTable";
import Header from "./components/Header";
import CoinPage from "./Pages/CoinPage";
import Homepage from "./Pages/HomePage";

const useStyles = makeStyles(() => ({
  app: {
    backgroundColor:  "#14161a",
    color: "white",
    // width:'100vw',
    minHeight: "100vh",
  },
}));
function App() {
  const classes = useStyles();

  return(<BrowserRouter> 
<div className={classes.app}>
  <Header/>
    <Routes>
  
      <Route path="/" element={   <Homepage/>
    }/>

    <Route path="/coins/:id" element={<CoinPage/>}/>
    </Routes>
  

    
  </div></BrowserRouter>

  ) 
}

export default App;
