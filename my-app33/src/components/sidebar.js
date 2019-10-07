import React from "react";
import { slide as Menu } from "react-burger-menu";

import axios from 'axios';

export default class TaskCompleted2 extends React.Component {

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
    axios.get(`http://localhost:8080/getStores?userName=nicolas.mori@gmail.com`).then(res => {
      console.log(res);
      this.setState({ persons: res.data });
    });
    //setInterval(() => this.setState({ time: Date.now()}), 1000)
  }

  //export default props => {



  render() {

    return (
      <Menu>

        {this.state.persons.map(person => (
          <a className="menu-item" href={person.storeId}>
            {person.storeName}
          </a>
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
      </Menu>
    );


  }
};