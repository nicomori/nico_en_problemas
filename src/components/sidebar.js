// import React from "react";
import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";


import CardsDeckPositives from './CardsDeckPositives';

import { googleReviews_value_example } from './AccordionGoogleMessPos';

import axios from 'axios';
import {juana_la_loca} from '../App';

var value_store_id_sidebar = "GGGGGGGGG6969";





class sidebar extends Component {
  // export default class sidebar extends React.Component {





  constructor() {
    super();

    this.state = {
      name: 'ssss',
      role: 'ddddddd',
      persons: [],
      store_code_id: '23'
    };

  }








  componentDidMount() {
    this.componentDidMount2222();
    setInterval(() => this.componentDidMount2222({ time: Date.now() }), 120000)
  }


  componentDidMount2222() {


    // axios.get(`http://localhost:8080/getServicesPerUser3?userName=${this.props.email}`).then(res => {
    axios.get(`http://35.246.191.97:8080/getStores?userName=nicolas.mori@gmail.com`).then(res => {
      console.log(res);
      this.setState({ persons: res.data });
    });
    //setInterval(() => this.setState({ time: Date.now()}), 1000)
  }

  //export default props => {



    clickMe(event, someParameter){




      console.log(`11111111111          ` + someParameter)

      value_store_id_sidebar = someParameter;

      console.log(`11111111111          ` + value_store_id_sidebar)


      console.log(`2222222          ` + juana_la_loca)

      juana_la_loca = someParameter;

      
      console.log(`88888888888          ` + juana_la_loca)
 }



render() {

  return (

    <>

      <Menu>

        {this.state.persons.map(person => (
          // <a className="menu-item" href={person.storeId} onClick={this.handePepe} >
          <a className="menu-item" href={person.storeId} onClick = {(e) => {this.clickMe(e, person.storeId)}} >
            {person.storeName}
          </a>



        )


        
        )

        }


      </Menu>


      

       <CardsDeckPositives store_code_id='juan' />
    

    {/* <CardsDeckPositives  /> */}

    </>

     

  );

}
};


export { value_store_id_sidebar };
export default sidebar;