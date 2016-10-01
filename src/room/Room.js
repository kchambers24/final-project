import React, { Component } from 'react';
import Chore from './Chore'
import '../styles/ChoreView.css'
import base from '../config/base'

class Room extends Component {
  constructor(props){
    super(props);
    this.state = {
      chores: [],
      chore: {}
    }
  }

  componentDidMount() {
    let roomname = this.props.room
    this.rebaseRef = base.syncState(`${this.props.household}/rooms/${roomname}/chores`, {
      context: this,
      state: 'chores',
      asArray: true,
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.rebaseRef)
  }

  addChore(event) {
    event.preventDefault(event)
    let chores = this.state.chores
    let chore = {
      name: this.name.value
    }
    this.setState({
      chores: chores.concat([chore])
    })
  }

  deleteChore(deletedChore){
    event.preventDefault()
    let chores = this.state.chores
    this.setState({
      chores: chores.filter(chore => deletedChore !== chore.name)
    })
  }

  render() {
    return (
      <div className="Room">
        {this.state.chores.map((chore, index) => <Chore room={this.props.room} chore={chore} deleteChore={this.deleteChore.bind(this)} key={index}/>)}
        <div className="Chore">
          <div className="ChoreLeft">
            <div className="ChoreName">
              <form onSubmit={this.addChore.bind(this)}><input type="text" ref={(input) => this.name = input}/><button type="submit">Add Chore</button></form>
            </div>
            <div className="ChoreFrequency">
            </div>
          </div>
          <div className="Avatar">
          </div>
        </div>
      </div>
    );
  }
}
Room.contextTypes = {
 household: React.PropTypes.string
}

export default Room;
