import React, { useEffect, useState } from "react";
import {
  Button,
  Navbar,
  Container,
  Card,
  Form,
  FormControl,
} from "react-bootstrap";
import pic from "../book.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [item, setItem] = useState([]);
  const [text, setText] = useState("");

  const navigate = useNavigate();

  // to load books list
  useEffect(() => {
    axios
      .get("http://localhost:5000/get-books")
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err));
  }, []);

  const orderClick = (book, author) => {
    navigate("/order", {
      state: {
        name: book,
        author: author,
      },
    });
  };

  return (
    <section>
      {/* navbar */}
      <Navbar>
        <Container>
          <Navbar.Brand>Book Store</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Text className="justify-content-end">
            <Button
              onClick={() => navigate("/addbook")}
              className="mx-3"
              variant="warning"
            >
              Add Book
            </Button>
          </Navbar.Text>
        </Container>
      </Navbar>

      <section className="mt-5">
        {/* Search bar  */}
        <Container className="my-5 shadow">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 m-3"
              aria-label="Search"
              onChange={(e) => setText(e.target.value)}
            />
          </Form>

          {item.map((e) =>
            text === e.name ? (
              <Card key={e._id} style={{ width: "25em", margin: "auto" }}>
                <Card.Img src={pic} variant="top" width={"auto"} alt="img" />
                <Card.Body>
                  <Card.Title>{e.name}</Card.Title>
                  <Card.Text>{e.author}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      orderClick(e.name, e.author);
                    }}
                  >
                    Order Now
                  </Button>
                </Card.Body>
              </Card>
            ) : (
              <div> </div>
            )
          )}
        </Container>

        {/* books listing */}
        <Container>
          {item.map((list) => (
            <div key={list.name}>
              <Card
                style={{
                  width: "18rem",
                  margin: "auto",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Card.Img src={pic} variant="top" width={"auto"} alt="img" />
                <Card.Body>
                  <Card.Title>{list.name}</Card.Title>
                  <Card.Text>{list.author}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      orderClick(list.name, list.author);
                    }}
                  >
                    Order Now
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Container>
      </section>
    </section>
  );
}
