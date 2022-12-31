import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddFactForm.css';

const AddFactForm = ({ showForm, setShowForm }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddFact = () => {
    setShowForm(false);
  };

  return (
    <div className="">
      <Form
        onSubmit={handleSubmit(handleAddFact)}
        className="homepage-form"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <Row>
          <Col lg={6}>
            <Form.Group className="mb-3 mb-lg-0" controlId="formBasicEmail">
              <Form.Control
                {...register('fact', {
                  required: 'Fact description is required',
                })}
                type="text"
                placeholder="Share a fact with the world..."
                className="rounded-pill"
              />

              {errors.fact && (
                <p className="text-danger mb-0">{errors.fact?.message}</p>
              )}
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-3 mb-lg-0" controlId="formBasicEmail">
              <Form.Control
                {...register('source', {
                  required: 'Source is required',
                })}
                type="text"
                placeholder="Trustworthy source"
                className="rounded-pill"
              />

              {errors.source && (
                <p className="text-danger mb-0">{errors.source?.message}</p>
              )}
            </Form.Group>
          </Col>

          <Col lg={2}>
            <Button
              className="w-100 fw-semibold rounded-pill"
              variant="primary"
              type="submit"
            >
              POST
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddFactForm;
