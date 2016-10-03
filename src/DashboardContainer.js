import React, { Component } from 'react';
import SideNav from './SideNav'
import axios from 'axios'
import Room from './room/Room';

class DashboardContainer extends Component {

//start of email code
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
    //end of email code



  render() {
    return (
      <div className="DashboardContainer">
        <SideNav household={this.props.household}/>

        <Room
          room={this.props.params.room}
          key={this.props.params.room}
          household={this.props.household}
           />
           <div className="emailBox">
             <p>Enter new roommates email address and send them an invite</p>
             <input type="text" className="emailInput" placeholder="New roommate" ref="roommateEmail"/>
             <button onClick={() => this.sendEmail()}>Send Email</button>
           </div>
      </div>
    );
  }
}

export default DashboardContainer;
