import React, { Component, PropTypes } from 'react';
import Rebase from 're-base'
import {Link, hashHistory} from 'react-router'
import './styles/SideNav.css';
import base from './config/base'

class SideNav extends Component {
  constructor() {
    super();
    this.state = {
      showAddRoomBox: false,
      rooms: [],
      people: []
    }
  }

  componentDidMount() {
    console.log("this.props.household is", this.props.household)
    this.rebaseRef = base.syncState(`${this.props.household}/rooms`, {
      context: this,
      state: 'rooms',
      asArray: true
    })
      this.rebaseRef = base.syncState(`${this.props.household}/roommates`, {
        context: this,
        state: 'people',
        asArray: true
      })
    }

  componentWillUnmount() {
    base.removeBinding(this.rebaseRef)
  }

  handleClick(event) {
    event.preventDefault(event)
    this.setState({
      showAddRoomBox: !this.state.showAddRoomBox
    })
  }

  addRoom(event) {
    event.preventDefault(event)
    let input = this.refs.roomInput
    let addedRoom = {
      roomname: input.value,
      chores: []
    }
    let rooms = this.state.rooms
    this.setState({
      rooms: rooms.concat([addedRoom])
    })
    hashHistory.push(`/dashboard/${addedRoom.roomname}`)
  }

  render() {
    let addRoomBox;
    if (this.state.showAddRoomBox) {
      addRoomBox = <div className="AddRoom"><form onSubmit={this.addRoom.bind(this)}><input type="text" placeholder="room" ref="roomInput"/><button>Add room</button></form></div>
    }
    return (
      <div className="SideNav">
        ChoreShare
        <div>
          <div className="NavItems">
            <Link to="/calendar"><p>Calendar</p></Link>
          </div>
          <div>
            <p className="NavItems">People</p>
            {this.state.people.map((person, index) => <p className="roommates" key={index}>{person.userName}</p>)}
          </div>
          <div className="NavItems AddRooms">
            <p>Rooms</p>
            <button onClick={this.handleClick.bind(this)}>Add room</button>
          </div>
            <div className="NavRooms">
              <div>
                {this.state.rooms.map((room, index) => <Link to={`/dashboard/${room.roomname}`} key={index}><div><p>{room.roomname}</p></div></Link>)}
              </div>
              {addRoomBox}
            </div>
        </div>
      </div>
    );
  }
}
SideNav.contextTypes = {
 household: React.PropTypes.string
}

export default SideNav;
