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
       "subject": `You have been invited to join household ${this.props.household}`,
       "html": `<html><head><body><p>Dear Future Roomie,<br><br>You have been invited to join an AWESOME household. Living with people is an experience, make it a positive one. Start your roommate relationship on the right foot with Roomie.<br><br>Enjoy a better way of living with ROOMIE.<br><br>Co-Habitation. Simplified. <a href='http://localhost:3000/#/inviteduser/${this.props.household}'>Click here</a></body></head></html><br><img src="cid:logo"><br>Sincerely,<br>ROOMIE<br></p>`,
       "images": [
     {
         "type": "image/png",
         "name": "logo",
         "content": "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"
     }
 ]
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
