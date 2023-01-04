import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import AddFactForm from '../AddFactForm/AddFactForm';
import Loading from '../Shared/Loading/Loading';
import './Navigation.css';

const Navigation = () => {
  const [showForm, setShowForm] = useState(false);

  const url = 'http://localhost:5000/categories';

  const {
    isLoading,
    isError,
    data: categories = [],
    error,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await fetch(url);
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="pt-4 pb-3">
        <Container>
          <Link to="/" className="text-decoration-none">
            <Navbar.Brand className="navbar-brand">
              TODAY I LEARNED
            </Navbar.Brand>
          </Link>
          <Nav className="ms-auto">
            <Nav.Link>
              <Button
                onClick={() => {
                  setShowForm(!showForm);
                }}
                variant="info"
                className="rounded-pill border-0 outline-0 fact-btn"
                style={{ color: '#fafaf9' }}
              >
                {showForm ? 'CLOSE' : 'SHARE A FACT'}
              </Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="container pt-4">
        {showForm && (
          <AddFactForm
            setShowForm={setShowForm}
            categories={categories}
          ></AddFactForm>
        )}
      </div>
    </div>
  );
};

export default Navigation;
