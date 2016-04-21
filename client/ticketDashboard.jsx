import React, { Component } from 'react';
import reactBootstrap from 'react-bootstrap';
import { Nav, Navbar,NavDropdown,Image,MenuItem, Grid,Row,Col,Thumbnail,NavItem, Glyphicon, Button } from 'react-bootstrap';
import {Ticket} from './ticket.jsx';
import {bind,dedupe} from 'classnames';




export  class TicketDashBoard extends Component {
    renderStatus() {
  }
  constructor(props) {
    super(props);
    this.state = {time: true};
    this.state = {button: true};
    this.state ={disabled:false};
    this.state = {subscription: {
        tickets: Meteor.subscribe('statusCallback')
      }}
      this.state ={status:""}

  }
  componentDidMount () {
      this.setState({status: Status.find({_id:"statueKey"},{status: 1}).fetch()})
      if(this.state.status == "completed"){
          
      };
      )
      console.log(Status.find({_id:"statueKey"},{status: 1}).fetch());
  }
  handleRemoveTicket(event) {
                 event.preventDefault(this.props.ticket._id);
                 Meteor.call('deleteTicket',this.props.ticket._id,(error, result) => {
                 });
             }
  handleCall() {
                   let telephone = "+33" + this.props.ticket.phoneNumber;
                   that = this;
                   console.log(this.props.ticket.phoneNumber);
                   Twilio.Device.connect({"phoneNumber": telephone});
                   this.setState({disabled:true});
               }

  handlerProgress(){
     console.log(this.state.subscription.tickets);

  }
  handleHangUpCall(){
    Twilio.Device.disconnectAll();
    this.setState({disabled:false})
  }

 render() {

   return (
       <Col xs={6} md={3}>
       <article className="card">
        <header className="card__thumb">
          <a href="#">
            <img src="http://www.wesante.com/42-thickbox_default/tensiometre-poignet-bp7-ihealth.jpg"/>
          </a>
        </header>
        <div className="card__date">
          <span className="card__date__day">{this.props.ticket.createdAt.getDay()}</span>
          <span className="card__date__month">{this.props.ticket.createdAt.getMonth()}</span>
        </div>
        <div className="card__body">
          <h2 className="card__title"><a href="#">{this.props.ticket.name}</a></h2>
          <div className="card__subtitle">

              <p className="card__description">
                  {this.props.ticket.description}
              </p>
          </div>
        </div>
        <footer className="card__footer">
            <button className="btn btn-danger" disabled={this.state.disabled}
                onClick={this.handleRemoveTicket.bind(this)}>
            remove
            </button>
            <button className="btn  btn-success" ref="callCustomerButtons" onClick={this.handleCall.bind(this)}>
            <span className="glyphicon glyphicon-earphone"></span>   call
            </button>
            <button className="btn  btn-warning" disabled={!this.state.disabled}
                ref="callCustomerButtons" onClick={this.handleHangUpCall.bind(this)}>
            <span className="glyphicon glyphicon-earphone"></span>HangUp
            </button>
          <span className="icon icon--time"> cyrilstern@gmail.com</span>
        </footer>
      </article>
  </Col>
   );
 }
};
