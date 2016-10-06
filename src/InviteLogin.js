import React, {Component} from 'react';
import './styles/Login.css';
import './styles/App.css';

class InviteLogin extends Component {
  render() {
    return (
      <div className="Login">
        <div className="loginNav">
          <div className="teamContact">
            <div className="team"><a href="#team">Team</a></div>
            <div className="contact"><a href="#Contact">Contact</a></div>
          </div>
        </div>
        <div className="loginHouseName">
          <div className="title">
            <h1>ourHouse</h1>
          </div>
          <div className="householdSignInBox">
            <div className="chooseName">
              <strong>Contact to your household through Facebook.</strong>
            </div>

            <div>
              <button className="loginBtn" onClick={this.props.onLogin}>
              <i className="fa fa-facebook-square fa-2x" aria-hidden="true">  Sign in with Facebook</i>
              </button>
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
              <h2>
                <strong>Chores</strong>
              </h2>
              <article className="catchphrase">Chores suck, but don't be a slacker. Easily display chores that need to get accomplished around the home. Claim which chores you want. Get credit and make sure your roommates recognize all the hard work you did. Enjoy a better way of living with people.</article>
            </article>
          </div>
        </div>
        <div className="Team" id="team">
          <h1>Meet the Team</h1>
          <div className="profileBox">
            <div className="bioBox">
              <p className="teamBios">Linsy</p>
              <img src="http://i65.tinypic.com/r2ruky.png" alt="Profile Picture" height="200" width="200"/>
              <p className="teamBios">I Love Long Walks On The Beach</p>
            </div>
            <div className="bioBox">
              <p className="teamBios">Kevin</p>
              <img src="http://i63.tinypic.com/k4v3pt.png" alt="Profile Picture" height="200" width="200"/>
              <p className="teamBios">I love Chocolate</p>
            </div>
          </div>
        </div>
        <div className="contactFooter" id="Contact">
          <p className="contactTitle">Let's Stay In Touch</p>
          <div className="contactBox">
          <div className="teamSocial">
          <h3>Contact Linsy On the Web</h3>
          <ul className="socialIcons">
            <li>
              <a href="https://www.facebook.com/profile.php?id=100013525780488&fref=ts" className="btn-social btn-outline">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/linsydeanna" className="btn-social btn-outline">
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/linsydeanna?authType=NAME_SEARCH&authToken=2GqI&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A435101060%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1475602726237%2Ctas%3Alin" className="btn-social btn-outline">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="teamSocial">
        <h3>Contact Kevin On the Web</h3>
        <ul className="socialIcons">
          <li>
            <a href="https://www.facebook.com/kevin.chambers.507" className="btn-social btn-outline">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/kbchambers2" className="btn-social btn-outline">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/kbchambers" className="btn-social btn-outline">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
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

InviteLogin.contextTypes = {
 household: React.PropTypes.string
}

export default InviteLogin;
