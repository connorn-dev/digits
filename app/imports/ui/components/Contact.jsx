import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Contact = ({ contact }) => (
  <Card className="h-100">
    <Card.Header>
      <img src={contact.image} alt="User" style={{ width: '75px' }} />
    </Card.Header>
    <Card.Body>
      <Card.Title>{contact.firstName} {contact.lastName}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{contact.address}</Card.Subtitle>
      <Card.Text>
        {contact.description}
      </Card.Text>
      <Link to={`/edit/${contact._id}`}>Edit</Link>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Contact.propTypes = {
  contact: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Contact;
