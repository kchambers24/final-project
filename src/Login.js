import React, {Component} from 'react';
import './styles/Login.css';
import './styles/App.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="loginNav">
          <ul>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="loginHouseName">
          <div className="title">
            <h1>ourHouse</h1>
          </div>
          <div className="householdSignInBox">
            <div className="chooseName">
              <strong>Let's get started! Choose your household name.<br/>Finish by signing through Facebook.</strong>
            </div>

            <form>
              <input onChange={this.props.addHousehold} type="text" className="answerBox" placeholder="Enter Text" ref="houseInput"/>
            </form>
            <div>
              <button className="loginBtn" onClick={this.props.onLogin}>Sign in with Facebook</button>
            </div>


          </div>
        </div>
        <div className="bodyBox">
          <div className="bodyTitle">
            <h2>A Simple Solution for All Your Roommate Needs</h2>Help your roommates help you</div>
          <div className="loginBody">
            <div className="desktop">
              <img className="cleaningPicOne" src="http://i67.tinypic.com/2ni1wg5.png" alt="No Picture For You" width="350px" height="300px"/>
            </div>
            <article className="bodyRightArticle">
            <h2><strong>Chores</strong></h2>
            <article className="catchphrase">Chores suck, but don't be a slacker. Easily display chores that need to get accomplished around the home. Claim which chores you want. Get credit and make sure your roommates recognize all the hard work you did. Enjoy a better way of living with people.</article>
          </article>
        </div>
        </div>
        <div className="loginFooter">
          <div className="footer">
            <small>&copy; 2016 - L & K Web Design</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
