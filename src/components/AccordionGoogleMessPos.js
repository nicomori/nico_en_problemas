import React from "react";
import axios from 'axios';

import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

import {juana_la_loca} from '../App';
import {value_store_id_sidebar} from './sidebar';




var name = "what is your name?";
var googleReviews_value_example = "OOOOOOOOOOOOOOOOO";


export default class TaskCompleted2yyy extends React.Component {

  state = {
    value: this.props.some_variable_name_card_decks,
    name: 'ssss',
    role: 'ddddddd',
    persons: [],
  };




  componentDidMount() {
    this.componentDidMount2222();
    setInterval(() => this.componentDidMount2222({ time: Date.now() }), 110000)
  }


  componentDidMount2222() {

    console.log('gggggggggggggg '+this.state.value);
    console.log("fffffFFFFFFFFFF");
    console.log("KKKKKKK "+this.props.some_variable_name_card_decks  +"55555555");

    // store_code_id

    // axios.get(`http://35.246.191.97:8080/getServicesPerUser3?userName=${this.props.email}`).then(res => {
    axios.get(`http://35.246.191.97:8080/getGoogleMessages?storeId=3`).then(res => {
      // axios.get(`http://35.246.191.97:8080/getGoogleMessages?storeId=`+value_store_id_sidebar).then(res => {
        // axios.get(`http://35.246.191.97:8080/getGoogleMessages?storeId=${this.props.store_code_id}`).then(res => {
      console.log(res);
      this.setState({ persons: res.data });
    });
    //setInterval(() => this.setState({ time: Date.now()}), 1000)
  }


  



  handePepe(){

    // console.log(`se fue SSSSSSSSSSSSSSSSS {$eleonor_gomez}`)
    console.log(`88888888`)

    // this.setState({
    //   role : 22
    // })

    name = 'ffffffff';

      
    // ).then(result => console.log(`se fue SSSSSSSSSSSSSSSSS 22222`));

    console.log(name+` se fue`)

    console.log(value_store_id_sidebar+` KKKKKKKKKKK2 se fue`)
    

    console.log(juana_la_loca+` se fue`)

    // console.log(`{$role} `)
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

                <Button variant="success" onClick={this.handePepe} >Respond</Button>

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

export { googleReviews_value_example };