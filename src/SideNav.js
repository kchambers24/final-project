import React, { Component } from 'react';
import {Link} from 'react-router'
import './styles/SideNav.css';
import base from './config/base'

class SideNav extends Component {
  constructor() {
    super();
    this.state = {
      showAddRoomBox: false,
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

  render() {
    let addRoomBox;
    if (this.state.showAddRoomBox) {
      addRoomBox = <div className="AddRoom"><form onSubmit={this.props.handleSubmit}><input type="text" placeholder="room"/><button>Add room</button></form></div>
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
                {this.props.rooms.map((room, index) => <Link to={`/dashboard/${this.props.household}/${room.roomname}`} key={index}><div><p>{room.roomname}</p></div></Link>)}
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
