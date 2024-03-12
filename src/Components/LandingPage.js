// src/Components/LandingPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MapContainer from './MapContainer';

const LandingPage = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>Welcome to Our Location</h1>
          <p>We are located at the heart of the city. Visit us!</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <MapContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
