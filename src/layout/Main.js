import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Home from '../components/Home/Home/Home';
import SideBar from '../components/Home/SideBar/SideBar';
import Navigation from '../components/Navigation/Navigation';

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
            <Home></Home>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
