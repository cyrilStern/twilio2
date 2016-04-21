import React, { Component } from 'react';
import reactBootstrap, { Nav, Navbar,NavDropdown,Image,MenuItem, Grid,Row,Col,Thumbnail,NavItem, Glyphicon, Button } from 'react-bootstrap';
import {Client,AccessToken,utils,webhooks,index} from 'twilio';
import {Ticket} from './ticket.jsx';



export  class ReceiveCall extends Component {
    constructor(props) {
      super(props);
      this.state = {_callIncoming: false};
      this.state = {accept: false};
      this.state = {_connection: ""};
      this.state = {button: true};
    }

  componentDidMount () {
    function loadScript() {
         let script= document.createElement('script');
         script.type= 'text/javascript';
         script.src= '//media.twiliocdn.com/sdk/js/client/v1.3/twilio.min.js';
         script.async = true;
         document.body.appendChild(script);
    }
    function getToken(){
        that = this;
        const client = require('twilio');
        var capability = new client.Capability(
        'ACf93aee23b76e63f4c64ff03c53fb5568',
        'a923874165230c0201e6fae93853c3d2'
        );
        capability.allowClientOutgoing('AP1c32a67f356dad5ab6cd97d3b4a1cbc6');
        capability.allowClientIncoming("support_agent");
        that._token = capability.generate();
    }
    loadScript();
    getToken();
}


    componentWillMount(){

        setTimeout(function(){
            _this =this;
            Twilio.Device.setup(that._token);
            Twilio.Device.ready(function(device){
                console.log("Twilio.Device is now ready for connections");
            });

            Twilio.Device.incoming(function(connection) {
                _this.state._callIncoming = true;
                _this.setState({_connection : connection})

            });
        }.bind(this), 500);
    }


    handleAccept(e){
        _this =this;
        e.preventDefault;
        _this.state._connection.accept();
        this.setState({button:!this.state.button})
        console.log(_this.state._connection);
    }
    handleHangUp(e){
        _this =this;
        e.preventDefault;
        Twilio.Device.disconnectAll();
    }


 render() {
     var btnClass= {
      'callIncoming': this.state._callIncoming,
      'callIncoming2': !this.state._callIncoming
    };

   return (
 <Grid>
    <Row className={btnClass}>
    <Col xs={6} xsOffset={6} md={3} mdOffset={8}>
        <div className="containerCallCenter">
            <div className="topcard"></div>
            <div className="containerCallButton">
                <Button bsStyle="primary" disabled={!this.state.button} onClick={this.handleAccept.bind(this)}><Glyphicon glyph="glyphicon glyphicon-earphone" aria-hidden="true"></Glyphicon> Accpet </Button>&nbsp;
                    <Button bsStyle="danger" disabled={this.state.button} onClick={this.handleHangUp.bind(this)}><Glyphicon glyph="glyphicon glyphicon-earphone" aria-hidden="true"></Glyphicon> Hang Up</Button>
                </div>
        </div>
    </Col>
    </Row>
  </Grid>
   );
 }
};
