import React, { Component } from 'react';
import reactBootstrap from 'react-bootstrap';
import { Nav, Navbar,NavDropdown,Image,MenuItem, Grid,Row,Col,Thumbnail,NavItem, Glyphicon, Button } from 'react-bootstrap';
import {Client,AccessToken,utils,webhooks,index} from 'twilio';
import {Ticket} from './ticket.jsx';
import {bind,dedupe} from 'classnames';




export  class CallCenter extends Component {
    renderStatus() {
  }
  constructor(props) {
    super(props);
    this.state = {time: false};
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
        const client = require('twilio');
        let capability = new client.Capability(
        'ACf93aee23b76e63f4c64ff03c53fb5568',
        'a923874165230c0201e6fae93853c3d2'
        );
        _this =this;
        capability.allowClientOutgoing('AP1c32a67f356dad5ab6cd97d3b4a1cbc6');
        _this._token = capability.generate();
    }

    getToken();
    loadScript();
    setTimeout(function(){

        this.setState( { time : true } );
    }.bind(this), 4000);
}
    changeCss(){
        this.setState( { time : !this.state.time } );
    }



    handleCall(event) {
          event.preventDefault();
          let tokenAccess = _this._token;
          function call (token){
              return new Promise((resolve,reject)=>{
                      Twilio.Device.setup(token);
                      Twilio.Device.ready(function(device){
                          resolve(device);
                          console.log("Twilio.Device is now ready for connections");
                      });
                   })
                }
          call(tokenAccess).then((resolve) => {
              console.log("message");
              Twilio.Device.connect({"user":"client","agent":"support_agent"})
          })
          this.setState({button:!this.state.button})
      }

      handleHangUp(event) {
            event.preventDefault();
            Twilio.Device.disconnectAll();
            this.setState({button:!this.state.button})
            // this.setState( { condition : "rowcallcenter2" } );
        }

 render() {

     let btnClass= {
      'rowcallcenter2': !this.state.time,
      'rowcallcenter': this.state.time
    };

   return (
 <Grid>
    <Row className={btnClass}>
    <Col xs={6} md={4} mdOffset={3}>
        <div className="containerCallCenter">
            <div className="topcard"></div>
            <Ticket />
        </div>
    </Col>
    <Col xs={6} md={4}>
        <div className="containerCallCenter">
            <div className="topcard"></div>
            <Image className="imageCallCenter" src="http://softillion.com/wp-content/uploads/2014/10/Faces-400x400px-1_1_21-256x256.jpg" height="150px" circle />
            <div className="containerCallButton">
                <Button bsStyle="primary" disabled = {!this.state.button} onClick={this.handleCall.bind(this)}><Glyphicon glyph="glyphicon glyphicon-earphone" aria-hidden="true"></Glyphicon> Call Center</Button>&nbsp;
                    <Button bsStyle="danger" disabled = {this.state.button} onClick={this.handleHangUp.bind(this)}><Glyphicon glyph="glyphicon glyphicon-earphone" aria-hidden="true"></Glyphicon> Hang Up</Button>
                </div>
        </div>
    </Col>
    </Row>
  </Grid>
   );
 }
};
