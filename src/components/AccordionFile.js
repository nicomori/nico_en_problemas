import React from "react";

import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';



import Button from 'react-bootstrap/Button';

export default props => {
    return (

       
        <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body

      <Button variant="success">Success</Button>

      </Card.Body>

    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

    );
};