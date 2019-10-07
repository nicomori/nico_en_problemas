import React from "react";
import axios from 'axios';

import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';


export default class TaskCompleted2yyy extends React.Component {

  state = {
    name: 'ssss',
    role: 'ddddddd',
    persons: [],
  };




  componentDidMount() {
    this.componentDidMount2222();
    setInterval(() => this.componentDidMount2222({ time: Date.now() }), 10000)
  }


  componentDidMount2222() {


    // axios.get(`http://localhost:8080/getServicesPerUser3?userName=${this.props.email}`).then(res => {
    axios.get(`http://localhost:8080/getGoogleMessages?storeId=3`).then(res => {
      console.log(res);
      this.setState({ persons: res.data });
    });
    //setInterval(() => this.setState({ time: Date.now()}), 1000)
  }


  render() {

    return (
      <Accordion defaultActiveKey="0">

        {this.state.persons.map(person => (
          
          
          // <a className="menu-item" href={person.storeId}>
          //   {person.storeName}
          // </a>



          
            
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={person.message_id}>
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={person.message_id}>


                <Card.Body>
                {person.message_text}

                <Button variant="success">Respond</Button>

                </Card.Body>


              </Accordion.Collapse>
            </Card>



          





        ))
        }

        {/* <a className="menu-item" href="/burgers">
        Store Street Joan Perez
      </a>

      <a className="menu-item" href="/pizzas">
      Store Street Governor Diaz
      </a>

      <a className="menu-item" href="/desserts">
      Store Street Elegant
      </a> */}
      
      </Accordion>
    );


  }
};

