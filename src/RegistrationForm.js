import React, { Component } from 'react';
import './styles/RegistrationForm.css';
import moment from 'moment'
import Rebase from 're-base'

const base = Rebase.createClass({
    apiKey: "AIzaSyDnoxYjmFPcZSQWKRNlebHr9n0pkSGOyUw",
    authDomain: "final-project-34471.firebaseapp.com",
    databaseURL: "https://final-project-34471.firebaseio.com",
    storageBucket: "final-project-34471.appspot.com",
  });


class RegistrationForm extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     userID: '',
  //     userInfo: {}
  //   }
  // }
  //
  // componentDidMount() {
  //   this.rebaseRef = base.syncState('userInfo', {
  //     context: this,
  //     state: 'userInfo',
  //   })
  // }
  //
  // componentWillUnmount() {
  //   base.removeBinding(this.rebaseRef)
  // }
  // handleClick(event) {
  //   event.preventDefault();
  //   console.log("Is button working")
  //   this.addUserInfo();
  //   console.log("Does addUserInfo work")
  // }
  //
  // addUserInfo() {
  //   event.preventDefault()
  //   console.log("Adding UserInfo to FireBase")
  //   let preCInput = this.refs.preferredInput
  //   let lCInput = this.refs.leastInput
  //   let peeInput = this.refs.peevesInput
  //   let addedUserInfo = input.value
  //   let userInfo = this.state.userInfo
  //   this.setState({
  //     userInfo: userInfo.concat([addedUserInfo])
  //   })
  // }
  //
  //



render() {
  return (
    <div className="RegistrationForm">
      <div className="header">
        <h1>Registration Form</h1>
      </div>
      <div className="profileInfo">
        <div className="imageBox">
        <p>Upload picture or import from Facebook</p>
        <input type="text" className="imageUpload" placeholder="Select Image"/>
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
      <div className="submitBtn">
        <button onClick={this.handleClick}>Submit</button>
      </div>
    </div>

  );
 }
}

export default RegistrationForm;
