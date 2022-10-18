import React from 'react';
import {Routes, Link, Route } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

// This is one and a traditional way to import components to page 
// import Navbar from './components/Navbar';
// USing the below method, we can import multiple components in a single line
import { Navbar,Exchanges,Homepage,Cryptocurrencies,News,CryptoDetails} from './components';
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
              <Routes>
                <Route exact path ="/" element={<Homepage/>}/>
                <Route exact path ="/exchanges" element={<Exchanges/>}/>
                <Route exact path ="/cryptocurrencies" element={<Cryptocurrencies/>}/>
                <Route exact path ="/news" element={<News/>}/>
                <Route excat path ="/cryptodetails" element={<CryptoDetails/>}/>
              </Routes>
          </div>
        </Layout>
      
      <div className="footer">
        <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
          CVerse <br/>
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
        </div>
      </div>
    </div>
  );
}

export default app