import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import Login from '../Login'
import InviteLogin from '../InviteLogin'
import App from '../App'
import DashboardContainer from '../DashboardContainer'
import Room from '../room/Room'

    //  <Route path="/inviteduser" component={InviteLogin}/>

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="/login" component={Login}/>
      <Route path="/inviteduser/:household" component={InviteLogin}/>
      <Route path="/dashboard/:household" component={DashboardContainer}>
        <Route path="/dashboard/:household/:room" component={Room}/>
      </Route>
    </Route>
  </Router>
)

export default routes;
