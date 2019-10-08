// import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import ButtonBar from "./components/ButtonsBar";



import SideBar from "./components/sidebar";
import NavBar from "./components/NavBar";
import CardsDeckPositives from './components/CardsDeckPositives';
import CardsDeckNegatives from './components/CardsDeckNegatives';
import Accordion from './components/AccordionFile';


import {value_store_id_sidebar} from './components/sidebar';

var juana_la_loca = "this is the value of juana la loca";

class App  extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
      email: '',
      eleonor_gomez: 7777777777
    };



    // this.handleAuth = this.handleAuth.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
  }


// function App() {

  render(){


    console.log(value_store_id_sidebar + 'RRRRRRRRRRRRRRRRR');


 return (
    <div>

      <NavBar />

      <SideBar />
      




      {/* <CardsDeckPositives /> */}
      {/* <CardsDeckNegatives /> */}


      

    </div>
  );
  }
 

} 










// function App() {

//     // this.state = {
//     //   user: null,
//     //   email: ''
//     // }
  
//   return (
//     <div>



//       <SideBar />
//       <NavBar />


//       <CardsDeckPositives />
//       <CardsDeckNegatives />


      

//     </div>
//   );
// }
// export default App;

export {juana_la_loca};
export default App;
