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
      addRoomBox = <div className="AddRoom"><form className="formAddRoom" onSubmit={this.props.handleSubmit}><input className="sideNavAddRoomInput" type="text" placeholder="Add Room"/><button className="addRoomBtn"><i className="fa fa-plus" aria-hidden="true"/></button></form></div>
    }
    return (
      <div className="SideNav">
        <div className="sideNavLogo">
          <img className="dashboardLogo" src="http://i64.tinypic.com/4hsdop.png" alt="LOGO" width="200" height="81"/>
        </div>
        <p className="sideNavHousehold">{this.props.household}</p>
        <div>
          <div>
            <p className="navRoommates">Roommates</p>
            {this.state.people.map((person, index) => <p className="roommates" key={index}>{person.userName}</p>)}
          </div>
          <div className="AddRooms">
            <div className="addRoomsText">
            <p className="roomsBtn">Rooms</p>
            </div>
            <div className="sideNavRoomBtn">
            <button className="addRoomBtn" onClick={this.handleClick.bind(this)}><i className="fa fa-plus" aria-hidden="true"/></button>
            </div>
          </div>
            <div className="NavRooms">
              <div>
                {this.props.rooms.map((room, index) => <Link to={`/dashboard/${this.props.household}/${room.roomname}`} key={index}><div><p className="sideNavRooms">{room.roomname}</p></div></Link>)}
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
