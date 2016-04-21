import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
import {App} from './app.jsx';
import {Dashboard} from './dashboard.jsx';


FlowRouter.route("/", {
  action() {
    mount(App);
  }
});
FlowRouter.route("/dashboard", {
  action() {
    mount(Dashboard);
  }
});
