import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function Order() {
  const location = useLocation();
  return (
    <div className="mt-5">
      <Container style={{ maxWidth: "30em" }}>
        <h2>You selected book -- {location.state.name} -- </h2>
        <h3>Author : {location.state.author} </h3>
        <Form className="pt-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter details</Form.Label>

            <Form.Control
              type="name"
              placeholder="Enter Name"
              className="my-3"
            />
            <Form.Control
              type="number"
              placeholder="Mobile no"
              className="my-3"
            />
            <Form.Control type="address" placeholder="enter address" />
          </Form.Group>
          <Button variant="primary" type="submit" href="#">
            Order
          </Button>
        </Form>
      </Container>
    </div>
  );
}
