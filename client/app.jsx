import React, { Component } from 'react';
import {CallCenter} from './callcenter.jsx';
import {navBar} from './navbar.jsx';
import {carouselInstance} from './caroussel.jsx'

export  class App extends Component {

 render() {
   return (
       <div>
           {navBar}
           {carouselInstance}
           <CallCenter />
       </div>

   );
 }
};
