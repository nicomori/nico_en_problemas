import React from 'react';
// import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import ButtonBar from "./components/ButtonsBar";



import SideBar from "./components/sidebar";
import NavBar from "./components/NavBar";
import CardsDeckPositives from './components/CardsDeckPositives';
import CardsDeckNegatives from './components/CardsDeckNegatives';
import Accordion from './components/AccordionFile';

import sidebar_value_to_export from './components/sidebar';

// class App  extends Component {

//   constructor() {
//     super();
//     this.state = {
//       user: null,
//       email: ''
//     };



//     // this.handleAuth = this.handleAuth.bind(this);
//     // this.handleLogout = this.handleLogout.bind(this);
//   }


// // function App() {

//   render(){
//  return (
//     <div>



//       <SideBar />
//       <NavBar />


//       <CardsDeckPositives />
//       <CardsDeckNegatives />


      

//     </div>
//   );
//   }
 

// } 


function App() {

    // this.state = {
    //   user: null,
    //   email: ''
    // }


    console.log("ggggGGGGGGGGGGGGGGG");

    console.log(sidebar_value_to_export);

    console.log("ggggGGGGGGGGGGGGGGG");
  
  return (
    <div>



      <SideBar />

       
       
      <NavBar />


      <CardsDeckPositives />
      <CardsDeckNegatives />


      

    </div>
  );
}
// export default App;

export default App;
