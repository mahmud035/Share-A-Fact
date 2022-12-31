import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AddFactForm from '../AddFactForm/AddFactForm';
import './Navigation.css';

const Navigation = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">TODAY I LEARNED</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link>
              <Button
                onClick={() => {
                  setShowForm(!showForm);
                }}
                variant="info"
                className="rounded-pill"
              >
                {showForm ? 'CLOSE' : 'SHARE A FACT'}
              </Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="container pt-5">
        {showForm && (
          <AddFactForm
            showForm={showForm}
            setShowForm={setShowForm}
          ></AddFactForm>
        )}
      </div>
    </div>
  );
};

export default Navigation;
