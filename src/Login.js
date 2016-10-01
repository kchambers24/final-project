import React, {Component} from 'react';
import './styles/Login.css';
import './styles/App.css';

class Login extends Component {
 render() {
    return (
      <div className="Login">
        <div>
        <p>Choose Household Name</p>
        <form>
        <input onChange={this.props.addHousehold} type="text" className="answerBox" placeholder="Enter Household Name" ref="houseInput"/>
        </form>
        </div>
        <div>
        <button className="loginBtn" onClick={this.props.onLogin}>Sign in with Facebook</button>
        </div>
      </div>
    );
  }
}

export default Login;
