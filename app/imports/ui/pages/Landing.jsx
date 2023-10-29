import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { PeopleFill, FileEarmarkTextFill, Calender2CheckFill } from 'react-bootstrap-icons';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <PeopleFill />
    <FileEarmarkTextFill />
    <Calender2CheckFill />
  </Container>
);

export default Landing;
