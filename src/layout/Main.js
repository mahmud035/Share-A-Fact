import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Container>
        <Row>
          <Col sm={4}>
            <h1>Category</h1>
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
