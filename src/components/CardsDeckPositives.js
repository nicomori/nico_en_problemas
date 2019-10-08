import React from "react";

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';



import AccordionGoogle from './AccordionGoogleMessPos';
// import Accordion from './AccordionFile';


export default class TaskCompleted2 extends React.Component{

  state = {

    some_variable_name_card_decks:  this.props.store_code_id
    // some_variable_name_card_decks: 'some value in the CARD DESKS'
  };

// export default props => {


  render() {



    console.log(`HHHHHHHHHHH ${this.props.store_code_id}`);


    console.log(`HHHHHHHHHHH111 ${this.state.some_variable_name_card_decks}`);

    // this.setState({ some_variable_name_card_decks });


    console.log(`HHHHHHHHHHH2222 ${this.state.some_variable_name_card_decks}`);



    return (


        <CardDeck>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Google Positives Reviews</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.




            </Card.Text>

            {/* <AccordionGoogle /> */}


            <AccordionGoogle some_variable_name_card_decks={this.state.some_variable_name_card_decks} />



          </Card.Body>
          <Card.Footer>


            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="./components/icon_facebook" />
          <Card.Body>
            <Card.Title>TripAdvisor Positives Reviews</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>

          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Facebook Positives Reviews</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.

            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>


      </CardDeck>



    );
};

}