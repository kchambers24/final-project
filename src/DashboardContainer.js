import React, { Component } from 'react';
import SideNav from './SideNav'
import TopNav from './TopNav'
import Room from './room/Room';
import base from './config/base'
import {hashHistory} from 'react-router'
import axios from 'axios'

class DashboardContainer extends Component {
  constructor() {
    super();
    this.state = {
      rooms: [],
      chores: [],
      claimed: false,
    }
    this.addRoom = this.addRoom.bind(this)
    this.addChore = this.addChore.bind(this)
    this.matchTheRoom = this.matchTheRoom.bind(this)
    this.selectedRoom = this.selectedRoom.bind(this)
    this.deleteChore = this.deleteChore.bind(this)
    this.addEditedChore = this.addEditedChore.bind(this)
    this.claimChore = this.claimChore.bind(this)
    this.deleteRoom = this.deleteRoom.bind(this)
    this.setDueDate = this.setDueDate.bind(this)
    this.completeChore = this.completeChore.bind(this)
    this.storeClaimState = this.storeClaimState.bind(this)
  }

  componentDidMount() {
    this.rebaseRef = base.syncState(`${this.props.household}/rooms`, {
      context: this,
      state: 'rooms',
      asArray: true
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.rebaseRef)
  }

  addRoom(event) {
    event.preventDefault(event)
    let input = event.target.elements[0]
    let addedRoom = {
      roomname: input.value
    }
    let rooms = this.state.rooms
    this.setState({
      rooms: rooms.concat([addedRoom])
    })
    hashHistory.push(`/dashboard/${this.props.household}/${addedRoom.roomname}`)
  }

  deleteRoom(roomName) {
    let updatedRooms = this.state.rooms.filter(room => roomName !== room.roomname)
    this.setState({
      rooms: updatedRooms
    })
  }

  setDueDate(dateSelected, selectedChore) {
    let updatedRooms = this.state.rooms.map((room) => {
      if (room.roomname === this.props.params.room) {
        let roomChores = room.chores
        let newChores = roomChores.map((chore) => {
          if (chore.name === selectedChore.name) {
            chore.dueDate = dateSelected
            return chore
          } else {
            return chore
          }
        })
          room.chores = newChores
        return room
      } else {
        return room
      }
    })
    this.setState({
      rooms: updatedRooms
    })
  }

  addChore(event) {
    event.preventDefault(event)
    let choreInput = event.target.elements[0]
    console.log(" choreInput is ", choreInput)
    let updatedRooms = this.state.rooms.map((room) => {
      if (room.roomname === this.props.params.room) {
        if (!room.chores) {
          room.chores = []
        }
        let newChore =
          {
            name: choreInput.value
          }
        let newChoresList = room.chores.concat([newChore])
        room.chores = newChoresList
        return room
      } else {
        return room
      }
    })
    this.setState({
      rooms: updatedRooms
    })
  }

    matchTheRoom(room) {
      if (room.roomname === this.props.params.room) {
        return true
      } else {
        return false
      }
    }

    selectedRoom() {
      if (this.state.rooms.length) {
        let correctRoom = this.state.rooms.filter(this.matchTheRoom)
        if (!correctRoom[0].chores) {
          return []
        }
        if (correctRoom.length) {
          return correctRoom[0].chores
        } else {
          return []
        }
      } else {
        return []
      }
    }

  deleteChore(deletedChore) {
    event.preventDefault()
    let updatedRooms = this.state.rooms.map((room) => {
      if (room.roomname === this.props.params.room) {
        let roomChores = room.chores
        let newChores = roomChores.filter(chore => deletedChore !== chore.name)
        room.chores = newChores
        return room
      } else {
        return room
      }
    })
    this.setState({
      rooms: updatedRooms
    })
  }

  addEditedChore(editedChore, choreName) {
    event.preventDefault()
    let updatedRooms = this.state.rooms.map((room) => {
      if (room.roomname === this.props.params.room) {
        let roomChores = room.chores
        let newChores = roomChores.map((chore) => {
          if (chore.name === choreName) {
            chore.name = editedChore
            return chore
          } else {
            return chore
          }
        })
        room.chores = newChores
        return room
      } else {
        return room
      }
    })
    this.setState({
      rooms: updatedRooms
    })
  }

  claimChore(avatar, claimedChore){
    const thisUser = JSON.parse(sessionStorage.getItem('currentUser'))
    let updatedRooms = this.state.rooms.map((room) => {
      if (room.roomname === this.props.params.room) {
        let roomChores = room.chores
        let newChores = roomChores.map((chore) => {
          if (chore.name === claimedChore.name) {
            chore.claimedBy = thisUser.displayName
            chore.avatarURL = avatar
            return chore
          } else {
            return chore
          }
        })
          room.chores = newChores
        return room
      } else {
        return room
      }
    })
    this.setState({
      rooms: updatedRooms
    })
}

storeClaimState(claimedState, claimedChore) {
  let updatedRooms = this.state.rooms.map((room) => {
    if (room.roomname === this.props.params.room) {
      let roomChores = room.chores
      let newChores = roomChores.map((chore) => {
        if (chore.name === claimedChore.name) {
          chore.claimed = claimedState
          return chore
        } else {
          return chore
        }
      })
        room.chores = newChores
      return room
    } else {
      return room
    }
  })
  this.setState({
    rooms: updatedRooms
  })
}


completeChore(choreStatus, completedChore) {
  console.log("completeChore is working")
  let updatedRooms = this.state.rooms.map((room) => {
    if (room.roomname === this.props.params.room) {
      let roomChores = room.chores
      let newChores = roomChores.map((chore) => {
        if (chore.name === completedChore.name) {
          chore.done = choreStatus
          return chore
        } else {
          return chore
        }
      })
        room.chores = newChores
      return room
    } else {
      return room
    }
  })
  this.setState({
    rooms: updatedRooms
  })
}


sendEmail(){
 console.log("beer", this.props)
 axios({
   method: "POST",
   url: "https://mandrillapp.com/api/1.0/messages/send.json",
   data: {
     "key": "API_KEY",
     "message": {
       "from_email": "ROOMIE@tiyfinalproject.com",
       "to": [
         {
           "email": this.refs.roommateEmail.value,

           "type": "to"
         }
       ],
       "subject": `You have been invited to join household ${this.props.household}`,
       "html": `<html><head><body><img src="cid:header"><br><p>Dear Future Roomie,<br><br>You have been invited to join an AWESOME household. Living with people is an experience, make it a positive one. Start your roommate relationship on the right foot with Roomie.<br><br>Enjoy a better way of living with ROOMIE.<br><br>Co-Habitation. Simplified. <a href='http://roomie.finalproject.surge.sh/#/inviteduser/${this.props.household}'>Click here</a></body></head></html><br>Sincerely,<br>ROOMIE<br></p>`,
      "images": [
     {
        "type": "image/png",
        "name": "header",
        "content": "base64_code"
        }
   ]
       }
     }
   });
   this.refs.roommateEmail.value = ''
  }

  render() {

    return (
      <div className="DashboardContainer">
        <SideNav household={this.props.household} handleSubmit={this.addRoom} rooms={this.state.rooms} deleteRoom={this.deleteRoom}/>
        <div className="DashboardRight">
        <TopNav
         room={this.props.params.room}
       />
          <Room
            selectedRoom={this.selectedRoom}
            room={this.props.params.room}
            rooms={this.state.rooms}
            key={this.props.params.room}
            household={this.props.household}
            handleSubmit={this.addChore}
            chores={this.state.chores}
            deleteChore={this.deleteChore}
            addEditedChore={this.addEditedChore}
            claimChore={this.claimChore}
            setDueDate={this.setDueDate}
            completeChore={this.completeChore}
            storeClaimState={this.storeClaimState}
             />
         <div className="EmailInvite">
                  <p className="emailTextTitle">Need a ROOMIE?</p>
                 <p className="emailText">Do you have that special roommate in mind? If so, we made inviting them super easy. Enter their email address below, and voila they are invited to your household. </p>
                <div className="emailInputBtn">
               <input className="emailInput" type="text" className="emailInput" placeholder="New roommate" ref="roommateEmail"/>
               <br/>
                 <button className="emailBtn" onClick={() => this.sendEmail()}>Send Email</button>
                 </div>
               </div>
          </div>
      </div>
    );
  }
  }

  DashboardContainer.contextTypes = {
  household: React.PropTypes.string
  }


  export default DashboardContainer;
