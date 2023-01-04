import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/Home/SideBar/SideBar';
import Navigation from '../components/Navigation/Navigation';

const Main = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Container>
        <Row>
          <Col md={4} lg={3}>
            <SideBar></SideBar>
          </Col>
          <Col md={8} lg={9}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
