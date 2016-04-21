import React, { Component } from 'react';
import reactBootstrap from 'react-bootstrap';
import { Nav, Navbar,NavDropdown,Image,MenuItem, Grid,Row,Input,Col,Thumbnail,NavItem, Glyphicon, Button } from 'react-bootstrap';
import {Client,AccessToken,utils,webhooks,index} from 'twilio';

export  class Ticket extends Component {
    constructor(props) {
      super(props);
      this.state = {name:"cyril",telephone:"0661507218",description:"Bonjour je suis op"};

    }

  componentDidMount () {

    }

    handleSubmit(event) {
        this.setState({name: event.target.name});
        event.preventDefault();
        ticketName = this.state.name;
        ticketPhone = this.state.telephone;
        ticketDescription = this.state.description;
        ticketDate = new Date();

      if(ticketPhone && ticketName && ticketDescription){
      let Ticket = {
          name: ticketName,
          telephone: ticketPhone,
          description : ticketDescription,
          date :ticketDate
      };
      Meteor.call("insertTicket", Ticket, function(error, result){
                if(result){
                    _this = this ;
                    function _resetValidation(_this) {
                       _this.setState({
                         telephone: "",
                         name: "",
                         description:""
                       })
                     }
                     alert("votre message à été envoyé")
                }
            });
              }
  }

    _onChangeName(event) {
    this.setState({name : (event.target.value)});
    }
    _onChangeTel(event) {
    this.setState({telephone : (event.target.value)});
    }
    _onChangeDesc(event) {
    this.setState({description : (event.target.value)});
    }
 render() {
   return (

       <div className="ticketcontainer">
           <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
               <Input type="text"  label="Nom"  pattern="[a-zA-Z-']{3,30}" title="votre nom ex: mr Durand" value={this.state.name} onChange={this._onChangeName.bind(this)} labelClassName="col-xs-2" wrapperClassName="col-xs-10" required/>
               <Input type="numbers" label="Tel" pattern="[0-9]{10}" title="ex 0661507218" placeholder="Votre telephone" value={this.state.telephone} onChange={this._onChangeTel.bind(this)}  labelClassName="col-xs-2" wrapperClassName="col-xs-10" required />
               <Input type="textarea"  label="Message" pattern="[a-zA-Z-'?.!]{10,200}" title="votre commentaire maxi 200 caracters" placeholder="Votre demande" value={this.state.description} onChange={this._onChangeDesc.bind(this)}  labelClassName="col-xs-2" wrapperClassName="col-xs-10" required/>
               <Button bsStyle="info" type="submit"><Glyphicon glyph="glyphicon glyphicon-comment" aria-hidden="true"></Glyphicon> Send</Button>
           </form>

       </div>



   );
 }
};
