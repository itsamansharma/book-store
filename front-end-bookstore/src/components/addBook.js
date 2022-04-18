import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    author: "",
  });

  // adding book details in state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // posting book details
  const handleSubmit = () => {
    const { name, author } = user;
    if (name && author) {
      axios.post("http://localhost:5000/addbook", user).then((res) => {
        alert(res.data.message);
        navigate("/");
      });
    } else alert("invalid");
  };
  return (
    <div className="mt-5">
      <Button>Return Home</Button>
      <Container style={{ maxWidth: "28rem" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="my-5">Enter Book Details</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Book name"
              value={user.name}
            />

            <Form.Control
              onChange={handleChange}
              value={user.author}
              name="author"
              type="text"
              placeholder="Author"
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
