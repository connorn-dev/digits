import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Calendar2CheckFill, FileEarmarkTextFill, PeopleFill } from 'react-bootstrap-icons';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container fluid={false}>
    <Row>
      <Col>
        <Container className="d-flex align-items-center justify-content-center flex-column">
          <PeopleFill className="mt-4" style={{ fontSize: '150px' }} />
          <h1 style={{ textAlign: 'center' }}>Multiple Users</h1>
          <p style={{ textAlign: 'center' }}>This address book enables any number of users to register and save their business contacts. You can only see the contacts you have created.</p>
        </Container>
      </Col>
      <Col>
        <Container className="d-flex align-items-center justify-content-center flex-column">
          <FileEarmarkTextFill className="mt-4" style={{ fontSize: '150px' }} />
          <h1>Contact Details</h1>
          <p style={{ textAlign: 'center' }}>For each contact, you can save their name, address, and phone number.</p>
        </Container>
      </Col>
      <Col>
        <Container className="d-flex align-items-center justify-content-center flex-column">
          <Calendar2CheckFill className="mt-4" style={{ fontSize: '150px' }} />
          <h1>Timestamped Notes</h1>
          <p style={{ textAlign: 'center' }}>Each time you make contact with a contact, you can write a note that summarizes the conversation. This note is saved along with a timestamp with the contact.</p>
        </Container>
      </Col>
    </Row>
  </Container>
);

export default Landing;
