import React, { Component } from 'react';
import {navBar} from './navbar.jsx';
import {ReceiveCall} from './receivecall.jsx'
import{TicketDashBoard} from './ticketDashboard.jsx'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import reactBootstrap, { Nav, Navbar,NavDropdown,Image,MenuItem, Grid,Row,Col,Thumbnail,NavItem, Glyphicon, Button } from 'react-bootstrap';
import {Client,AccessToken,utils,webhooks,index} from 'twilio';


export class Dashboard extends TrackerReact(React.Component) {
    constructor(props) {
        super(props);
        this.state = {subscription: {
            tickets: Meteor.subscribe('tickets')
          }}
    }
    //mixins: [ReactMeteorData]

    taskTicket() {
       return Ticket.find({}).fetch(); //fetch must be called to trigger reactivity
   }

     renderTickets() {
         console.log(this.taskTicket());
       return this.taskTicket().map((ticket) => {
             return <TicketDashBoard key={ticket._id} ticket={ticket}/>;
           });
     }

     componentWillUnmount() {
         this.state.subscription.tickets.stop();
     }
 render() {
   return (
       <div>
           {navBar}
           <Row className="">
               {this.renderTickets()}
           </Row>
           <ReceiveCall />
       </div>

   );
 }
};
