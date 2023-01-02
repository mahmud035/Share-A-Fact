import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/Home/SideBar/SideBar';

const Main = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Container>
        <Row>
          <Col sm={4}>
            <SideBar></SideBar>
          </Col>
          <Col sm={8}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
