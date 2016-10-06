import React, { Component } from 'react';
import moment from 'moment'
// import FontAwesome from 'react-fontawesome'

class Chore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInput: false
    }
  }

  changeToInput() {
    this.setState({
      displayInput: !this.state.displayInput
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addEditedChore(this.name.value, this.props.chore.key)
    this.setState({
      displayInput: !this.state.displayInput
    })
  }

  claim() {
    this.props.claimChore(this.props.chore)
    this.setState({
      claimed: !this.state.claimed
    })
  }

  handleClick(){
    this.props.deleteChore(this.props.chore.name)
  }

  render() {
    const thisUser = JSON.parse(sessionStorage.getItem('currentUser'))
    const thisUserPhoto = sessionStorage.getItem('UserAvatar')

    let choreClaimer = <p>Unclaimed</p>
    if (this.state.claimed) {
      choreClaimer = <p>{thisUser.displayName}</p>
    }

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
          <button onClick={this.handleClick.bind(this)}>
            <FontAwesome className="trash"/>
          </button>
          </div>
          <div className="ChoreFrequency">
          </div>
        </div>
        <div className="ChoreRight">
          <div>
          </div>
          {choreClaimerAvatar}
          {choreClaimer}
          <button onClick={this.claim.bind(this)}>{buttonText}</button>
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
      </div>
    );
  }
}

export default Chore;
