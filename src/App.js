import React, { Component, PropTypes } from 'react';
import './styles/App.css';
import base from './config/base'

class App extends Component {
  getChildContext() {
    return {household: this.state.household}
  }

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      household: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.authHandler = this.authHandler.bind(this);
  }

  addHouseholdName(event) {
      this.setState(
        { household: event.target.value },
        function () {
          localStorage.setItem('household', this.state.household)
          console.log('callback state', this.state.household);
          console.log(localStorage.getItem('household'));
        })
   }

  componentWillMount() {
    console.log(localStorage.household);
      this.setState({household: localStorage.household})
  }

  authHandler(error, data) {
    if (error) {
      console.log(error)
    } else {
      console.log(data)
      this.setState({
        user: data.user
      })
      sessionStorage.setItem('currentUser', JSON.stringify(data.user))
       this.context.router.push(`/dashboard/${this.state.household}`)
    }
  }

  handleClick(event, household) {
    household = household || null
    event.preventDefault();
    base.authWithOAuthPopup('facebook', this.authHandler).then(() => {
      const loggedInUser = base.auth().currentUser;
      if (loggedInUser != null) {
        loggedInUser.providerData.forEach(profile => {
          console.log("  Photo URL: "+profile.photoURL);
          sessionStorage.setItem('UserAvatar', (profile.photoURL))
          base.post(`${this.state.household}/roommates/${this.state.user.uid}`, {
            data: {
              url: profile.photoURL,
              userName: this.state.user.displayName
            }
        });
      })
    }
    })
  }

  render() {
    return (
      <div className="App">
        {this.props.children && React.cloneElement(this.props.children, {onLogin: this.handleClick.bind(this), addHousehold: this.addHouseholdName.bind(this), household: this.state.household})}
      </div>
    );
  }
}

App.contextTypes = {
 router: React.PropTypes.object.isRequired
}

App.childContextTypes = {
 household: React.PropTypes.string
}

export default App;
