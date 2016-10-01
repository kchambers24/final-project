import React, { Component } from 'react';
import './styles/RegistrationForm.css';
import moment from 'moment'
import Rebase from 're-base'
import axios from 'axios'
import {Link} from 'react-router'

const base = Rebase.createClass({
    apiKey: "AIzaSyDnoxYjmFPcZSQWKRNlebHr9n0pkSGOyUw",
    authDomain: "final-project-34471.firebaseapp.com",
    databaseURL: "https://final-project-34471.firebaseio.com",
    storageBucket: "final-project-34471.appspot.com",
  });

class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      urls: [],
      url: {}
    }

  }


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
    <div className="RegistrationForm">
      <div className="header">
        <h1>Registration Form</h1>
      </div>
      <div className="profileInfo">
        <div className="imageBox">
        <p>Profile Avatar</p>
        <img src={this.state.urls.map((url) => <url url={url} key={url.key}/>)} alt="user avatar"  />
        </div>
        <p>Date of move-in:</p>
          <input
               id="changeStarting"
               min={moment().format('YYYY-MM-DD')}
               type="date"
               className="ui-input"
               onChange={(e) => this.setState({
                 starting: moment(e.target.value),
                 currentlyChoosing: null,
               })}
             />
        <p>Most perferred chores:</p>
        <input type="text" className="answerBox" placeholder="Enter Answer"ref="preferredInput"/>
        <p>Least perferred chores:</p>
        <input type="text" className="answerBox" placeholder="Enter Answer"ref="leastInput"/>
        <p>Pet peeves:</p>
        <input type="text" className="answerBox" placeholder="Enter Answer"ref="peevesInput"/>
      </div>
      <Link to="/dashboard">
      <div className="submitBtn">
        <button>Submit</button>
      </div>
    </Link>

    <div className="emailBox">
      <p>Enter new roommates email address and send them an invite</p>
      <input type="text" className="emailInput" placeholder="New roommate" ref="roommateEmail"/>
      <button onClick={() => this.sendEmail()}>Send Email</button>
    </div>

    </div>
  );
 }
}
RegistrationForm.contextTypes = {
 household: React.PropTypes.string
}


export default RegistrationForm;
