import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Typography,Row, Col,Statistic } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

const {Title} = Typography;
const Homepage = () => {

  const {data,isFetching} = useGetCryptosQuery();

  console.log(data);
  
  return (
    <>
      <Title level={2} className="heading"> Global Crypto Statistics</Title>
      <Row>
        <Col span={12}> <Statistic title="All Cryptocurrencies" value="5"/></Col>
        <Col span={12}> <Statistic title="All Exchnages" value="5"/></Col>
        <Col span={12}> <Statistic title="Total Market Cap" value="5"/></Col>
        <Col span={12}> <Statistic title="Total 24h Volume" value="5"/></Col>
        <Col span={12}> <Statistic title="All Markets" value="5"/></Col>
      </Row>
    </>
  )
}

export default Homepage