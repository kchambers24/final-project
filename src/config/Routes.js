import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import Login from '../Login'
import InviteLogin from '../InviteLogin'
import RegistrationForm from '../RegistrationForm'
import App from '../App'
import DashboardContainer from '../DashboardContainer'
import Room from '../room/Room'



const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="/login" component={Login}/>
      <Route path="/inviteduser/:household" component={InviteLogin}/>
      <Route path="/registration/:household" component={RegistrationForm}/>
      <Route path="/dashboard" component={DashboardContainer}>
        <Route path="/dashboard/:room" component={Room}/>
      </Route>
    </Route>
  </Router>
)

export default routes;
