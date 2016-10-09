import React, { Component } from 'react';
import Chore from './Chore'
import '../styles/ChoreView.css'

class Room extends Component {

render() {
    return (
      <div className="Room">
        {this.props.selectedRoom().map((chore, index) => <Chore rooms={this.props.rooms} room={this.props.room} chore={chore} deleteChore={this.props.deleteChore} addEditedChore={this.props.addEditedChore} claimChore={this.props.claimChore}
        setDueDate={this.props.setDueDate}
        completeChore={this.props.completeChore} key={index}/>)}
        <div className="Chore">
          <div className="ChoreLeft">
            <div className="ChoreName">
              <form className="formChoreInput" onSubmit={this.props.handleSubmit}><input className="choreInput" type="text" placeholder="What needs to be done?"/><button className="choreAddBtn" type="submit"><i className="fa fa-plus" aria-hidden="true"/></button></form>
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
