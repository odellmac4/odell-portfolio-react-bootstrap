import logo from './logo.svg';
import React, { useEffect } from 'react';
import Navbar from './Nav'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Jumblio from './Jumblio/Jumblio.tsx'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Container, Row, Button, Alert, Breadcrumb, Card, Form, Col} from 'react-bootstrap';
import WebFont from 'webfontloader';


function App() {


  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Outfit:100,900']
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Navbar/>
          <Hero/>
          <About/>
          <Projects/>
          <Jumblio/>
        </Container>
        {/* <Container>
        <Form>
          <Row>
            <Col md>
            <Form.Group controlID="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder='example@email.com'/>
              <Form.Text className='text-muted'>
                We'll never share your email address, trust us!
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlID="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password'/>
            </Form.Group>
          </Col>
          <Button variant="secondary" type="submit">Login</Button>
          </Row>
        </Form>
        <Card className='mb-3'>
          <Card.Img src='https://picsum.photos/200/100'/>
          <Card.Body>
            <Card.Title>
                Card Example
            </Card.Title>
            <Card.Text>
              This is an example of react bootstrap cards
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>

        </Card>

        <Breadcrumb>
        <Breadcrumb.Item> Test </Breadcrumb.Item>
        <Breadcrumb.Item> Test </Breadcrumb.Item>
        <Breadcrumb.Item> Test </Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">This is a button</Alert>
        <Button>Test Button</Button>
        </Container> */}
      </header>
    </div>
  );
}

export default App;
