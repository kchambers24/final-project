import React, {Component} from 'react';

class InviteLogin extends Component {


  render() {
    console.log("pizza", this.props);
    const household = `${this.props.household}`
    localStorage.getItem('household');
    console.log(localStorage.getItem('household'))

    return (
    <div className="inviteLogin">
        <button className="loginBtn" onClick={this.props.onLogin}>Sign in with Facebook</button>
    </div>
   )
  }
}
InviteLogin.contextTypes = {
 household: React.PropTypes.string
}

export default InviteLogin;
