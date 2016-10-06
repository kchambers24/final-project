import React, { Component } from 'react';
import Chore from './Chore'
import '../styles/ChoreView.css'

class Room extends Component {
  render() {
    return (
      <div className="Room">
        {this.props.chores.map((chore, index) => <Chore room={this.props.room} chore={chore} deleteChore={this.props.deleteChore} addEditedChore={this.props.addEditedChore} claimChore={this.props.claimChore} key={index}/>)}
        <div className="Chore">
          <div className="ChoreLeft">
            <div className="ChoreName">
              <form onSubmit={this.props.handleSubmit}><input type="text"/><button type="submit">Add Chore</button></form>
            </div>
            <div className="ChoreFrequency">
            </div>
          </div>
          <div className="Avatar">
          </div>
        </div>
      </div>
    );
  }
}

Room.contextTypes = {
household: React.PropTypes.string
}

export default Room;
