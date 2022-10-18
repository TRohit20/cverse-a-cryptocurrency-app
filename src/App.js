import React from 'react';
import {Switch, Route, Link, Routes } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

// This is one and a traditional way to import components to page 
// import Navbar from './components/Navbar';
// USing the below method, we can import multiple components in a single line
import { Navbar,Exchanges,Homepage,Cryptocurrencies,News,CryptoDetails } from './components';
import './App.css';


const app = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout> 
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              {/* Below Colon means tge data is dynamic */}
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default app