import React, { Component } from 'react';
import base from '../config/base'

class Chore extends Component {
  constructor(props) {
    super(props);
    const isClaimed = this.props.chore.claimedBy
    this.state = {
      displayInput: false,
      claimed: isClaimed
    }
  }

  changeToInput() {
    this.setState({
      displayInput: !this.state.displayInput
    })
  }

  addEditedChore(editedChore) {
    event.preventDefault()
    let roomname = this.props.room
    base.update(`${this.props.household}/rooms/${roomname}/chores/${this.props.chore.key}`, {
      data: {name: editedChore}
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.addEditedChore(this.name.value)
    this.setState({
      displayInput: !this.state.displayInput
    })
  }

  handleClick(){
    this.props.deleteChore(this.props.chore.name)
  }

  claimChore(){
    const thisUser = JSON.parse(sessionStorage.getItem('currentUser'))
    let roomname = this.props.room
    base.update(`${this.props.household}/rooms/${roomname}/chores/${this.props.chore.key}`, {
      data: {claimedBy: thisUser.displayName}
    })
    if (this.state.claimed) {
      base.update(`${this.props.household}/rooms/${roomname}/chores/${this.props.chore.key}`, {
        data: {claimedBy: ''}
      })
    }
    this.setState({
      claimed: !this.state.claimed,
    })
    console.log("this.props.chore.key is", this.props.chore.key)
  }

  render() {
    const thisUser = JSON.parse(sessionStorage.getItem('currentUser'))
    const thisUserPhoto = sessionStorage.getItem('UserAvatar')

    let choreClaimer = <p>Unclaimed</p>
    if (this.state.claimed) {
      choreClaimer = <p>{thisUser.displayName}</p>
    }

    console.log(" thisUserPhoto is", thisUserPhoto)
    let choreClaimerAvatar = <div></div>
    if (this.state.claimed) {
      choreClaimerAvatar = <div><img src={thisUserPhoto} alt="choreClaimer"/></div>
    }

    let buttonText = 'Claim this chore'
    if (this.state.claimed) {
      buttonText = 'Unclaim'
    }

    let choreInputArea = <div onClick={this.changeToInput.bind(this)} className="ChoreName">
      <p>{this.props.chore.name}</p>
    </div>
    if (this.state.displayInput) {
    choreInputArea = <form onSubmit={this.handleSubmit.bind(this)}><input type="text" ref={(input) => this.name = input}/><button>I'm done editing</button></form>
    }
    return (
      <div className="Chore">
        <div className="ChoreLeft">
          <div className="ChoreName">
            {choreInputArea}
          <button onClick={this.handleClick.bind(this)}>Delete</button>
          </div>
          <div className="ChoreFrequency">
          </div>
        </div>
        <div className="ChoreRight">
          <div>
          </div>
          {choreClaimerAvatar}
          {choreClaimer}
          <button onClick={this.claimChore.bind(this)}>{buttonText}</button>
        </div>
        
      </div>
    );
  }
}
Chore.contextTypes = {
 household: React.PropTypes.string
}

export default Chore;
