import React from 'react';
import {Switch, Route, Link } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

// This is one and a traditional way to import components to page 
// import Navbar from './components/Navbar';
// USing the below method, we can import multiple components in a single line
import { Navbar } from './components';


const app = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
      
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default app