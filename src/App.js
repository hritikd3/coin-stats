import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import { CoinDetails, Home } from "./pages";


const App = () => {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path="/coin" element={<CoinDetails />} />
        </Routes>
      </Router>
     
    </div>
  );
};

export default App;
