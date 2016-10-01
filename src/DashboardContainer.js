import React, { Component } from 'react';
import SideNav from './SideNav'
// import TopNav from './TopNav'
import Room from './room/Room';

class DashboardContainer extends Component {
  render() {
    return (
      <div className="DashboardContainer">
        <SideNav household={this.props.household}/>

        <Room
          room={this.props.params.room}
          key={this.props.params.room}
          household={this.props.household}
           />
      </div>
    );
  }
}

export default DashboardContainer;
