import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Card, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">shop with me </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="my-4">
        <h1 className="text-center">Look at what we have </h1>
      </Container>
      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://ounass-sa.atgcdn.ae/contentful/b3xlytuyfm3e/5eBTEA5YilyV4rXYBf4CfL/6cf7784f92b76f82bd5ed01647b8ef58/Women_Accessories_DSK_PLP_Banner_.jpg?q=70" />
              <Card.Body>
                <Card.Title>Accessorie</Card.Title>
                <Card.Text>
                  <b>prix: </b> 50DNT
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/649be50cfbde8a6e1125af5d/cd4e9283-658e-481e-9a73-b01e2cde8ba8/Business%2Bcasual%2Boutfit%2Bideas%2Bfor%2Bcolder%2Bmonths.png" />
              <Card.Body>
                <Card.Title>Business Casual Style</Card.Title>
                <Card.Text>
                  <b>prix: </b> 70DNT
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://www.venslik.com.pk/cdn/shop/files/preview_images/be551009b8a247a98a5b1f4c6f696280.thumbnail.0000000000.jpg?v=1704551176&width=1946" />
              <Card.Body>
                <Card.Title>YSL Court Shoes</Card.Title>
                <Card.Text>
                <b>prix: </b> 100DNT
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;