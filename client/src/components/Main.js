import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import ViewListings from '../routes/ViewListings.js'
import About from '../routes/About';
import AboutWho from '../routes/AboutWho';
import Affordability from '../routes/Affordability';
import Dashboards from '../routes/Dashboards';
import Layout from './Layout';
import HotMarkets from '../routes/HotMarkets';
import MarketTrends from '../routes/MarketTrends';
import OurValues from '../routes/OurValues';
import '../App.css';
import CensusDemographics from "../routes/CensusDemographics";
import Footer from './Footer.js'



const Main = () => {
  return (    
    <>
    <Router>    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="viewListings" element={<ViewListings />} />
          <Route path="about" element={<About />} />
          <Route path="who-we-are" element={<AboutWho />} />
          <Route path="our-values" element={<OurValues />} />
          <Route path="affordability" element={<Affordability />} />
          <Route path="dashboards" element={<Dashboards/>} />
          <Route path="Check-Your-Neighborhood" element={<CensusDemographics/>} />
          <Route path="hot-markets" element={<HotMarkets/>} />
          <Route path="market-trends" element={<MarketTrends/>} />        
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
      </Router>      
    </>
  );
};

export default Main;