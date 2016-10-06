import React, { Component } from 'react';
import SideNav from './SideNav'
import TopNav from './TopNav'
import Room from './room/Room';
import base from './config/base'
import {hashHistory} from 'react-router'
import axios from 'axios'
import moment from 'moment'

class DashboardContainer extends Component {
  constructor() {
    super();
    this.state = {
      rooms: [],
      chores: [],
      claimed: false
    }
    this.addRoom = this.addRoom.bind(this)
    this.addChore = this.addChore.bind(this)
    // this.deleteChore = this.deleteChore.bind(this)
    // this.addEditedChore = this.addEditedChore.bind(this)
    // this.claimChore = this.claimChore.bind(this)
  }

  componentDidMount() {
    console.log( "in componentDidMount, this.props.household is", this.props.household)
    this.rebaseRef = base.syncState(`${this.props.household}/rooms`, {
      context: this,
      state: 'rooms',
      asArray: true
    })
    // const roomname = 'whateve';
    // let roomname = this.props.params.room
    // console.log(" in componentDidMount this.props.params.room ", this.props.params.room)
    // const roomname = this.props.params.room
    // this.rebaseRef = base.syncState(`${this.props.household}/rooms/${roomname}/chores`, {
    //   context: this,
    //   state: 'chores',
    //   asArray: true,
    // })
  }

  componentWillUnmount() {
    base.removeBinding(this.rebaseRef)
  }

  addRoom(event) {
    event.preventDefault(event)
    let input = event.target.elements[0]
    let addedRoom = {
      roomname: input.value,
    }
    let rooms = this.state.rooms
    this.setState({
      rooms: rooms.concat([addedRoom])
    })
    hashHistory.push(`/dashboard/${this.props.household}/${addedRoom.roomname}`)
  }

  addChore(event) {
    event.preventDefault(event)
    let chores = this.state.chores
    let choreInput = event.target.elements[0]
    console.log(" choreInput is ", choreInput)
    let updatedRooms = this.state.rooms.map((room) => {
      if (room.roomname === this.props.params.room) {
        room.chores = []
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

  // deleteChore(deletedChore){
  //   event.preventDefault()
  //   let chores = this.state.chores
  //   this.setState({
  //     chores: chores.filter(chore => deletedChore !== chore.name)
  //   })
  // }

  // addEditedChore(editedChore, chore) {
  //   event.preventDefault()
  //   let roomname = this.props.params.room
  //   base.update(`${this.props.household}/rooms/${roomname}/chores/${chore}`, {
  //     data: {
  //       name: editedChore
  //     }
  //   })
  // }

//   claimChore(claimedChore){
//     const thisUser = JSON.parse(sessionStorage.getItem('currentUser'))
//     let claimThatChore = this.state.chores.map(chore => {
//       if (claimedChore.key === chore.key) {
//         let chore = {
//           claimedBy: thisUser.displayName
//         }
//         this.setState({
//         chores: claimThatChore
//       })
//     }
//   })
// }

//
//         let roomname = this.props.room
//         base.update(`${this.props.household}/rooms/${roomname}/chores/${chore.key}`, {
//           data: {
//             claimedBy: thisUser.displayName
//           }
//         })
//       if (!this.state.claimed) {
//         base.update(`${this.props.household}/rooms/${roomname}/chores/${chore.key}`, {
//           data: {
//             claimedBy: ''
//           }
//         })
//       }
//       console.log("this.props.chore.key is", this.props.chore.key)
//     }
//   }
// }

sendEmail(){
 console.log("beer", this.props)
 axios({
   method: "POST",
   url: "https://mandrillapp.com/api/1.0/messages/send.json",
   data: {
     "key": "qyGwtP9NlIE7eDer9oa5tQ",
     "message": {
       "from_email": "kevin@tiyfinalproject.com",
       "to": [
         {
           "email": this.refs.roommateEmail.value,

           "type": "to"
         }
       ],
       "subject": "Your personal invite to living better!",
       "html": `<html><head><body><p>You have been invited to join iRoommates. Enjoy a better way of doing chores.</p><a href='http://localhost:3000/#/inviteduser/${this.props.household}'>Click here</a></body></head></html>`
     }
   }
 });
}

  render() {
    console.log( "in render, this.props.household is", this.props.household)
    console.log('==', this.props)
    return (
      <div className="DashboardContainer">
        <SideNav household={this.props.household} handleSubmit={this.addRoom} rooms={this.state.rooms}/>
        <div className="DashboardRight">
        <TopNav
          room={this.props.params.room}
        />
        <Room
          room={this.props.params.room}
          key={this.props.params.room}
          household={this.props.household}
          handleSubmit={this.addChore}
          chores={this.state.chores}
          deleteChore={this.deleteChore}
          addEditedChore={this.addEditedChore}
          claimChore={this.claimChore}
          
           />
         <div className="EmailInvite">
                 <p>Enter new roommates email address and send them an invite</p>
                 <input type="text" className="emailInput" placeholder="New roommate" ref="roommateEmail"/>
                 <button onClick={() => this.sendEmail()}>Send Email</button>
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
