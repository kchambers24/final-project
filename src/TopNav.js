import React, { Component } from 'react';
import './styles/ChoreView.css'

class TopNav extends Component {



  render() {
    console.log('beers', this.props);
    return (
      <div className="TopNav">
        <section className="roomTitle">{this.props.room}</section>
      </div>
    );
  }
}

export default TopNav;
