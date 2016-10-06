import React, {Component} from 'react';
import './styles/Login.css';
import './styles/App.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="loginNav">
          <div className="teamContact">
            <div className="team"><a className="aTeam" href="#team">Team</a></div>
            <div className="contact"><a className="aTeam" href="#Contact">Contact</a></div>
          </div>
        </div>
        <div className="loginHouseName">
          <div className="logoBox">
          <div className="title">
            <img className="roomieLogo" src="http://i67.tinypic.com/2cmlxfb.png" alt="ROOMIE"/>
          </div>
          </div>
          <div className="householdSignInBox">
            <div className="opacityBox">
            <div className="chooseName">
              <div className="chooseText">
                <strong>Pink Palace? Man Cave? Animal House?</strong><br/>
                Enter a name for the place your mail gets sent below...<br/>
                Finish By Signing In With Facebook
              </div>
            </div>

            <form>
              <input onChange={this.props.addHousehold} type="text" className="answerBox" placeholder="Enter Text" ref="houseInput"/>
            </form>
            <div>
              <button className="loginBtn" onClick={this.props.onLogin}>
              <i className="fa fa-facebook-square fa-2x" aria-hidden="true">  Sign in with Facebook</i>
              </button>
            </div>
            </div>
          </div>
        </div>
        <div className="bodyBox">
          <div className="bodyTitle">
            <h2>A Simple Solution for All Your Roommate Needs</h2>Co-Habitation. Simplified.</div>
          <div className="loginBody">
            <ul className="cleaningImages">
              <li className="smallerCleaningImages">
                <img src="http://i66.tinypic.com/a4lts5.png" alt="Dont be lazy" height="199" width="200"/>
                <p className="choreText">Dust The House</p>
              </li>
              <li className="smallerCleaningImages"><img src="http://i68.tinypic.com/2v1m9h2.png" alt="Dont be lazy" height="199" width="200"/>
              <p className="choreText">Take Out The Trash</p>
              </li>
              <li className="smallerCleaningImages"><img src="http://i63.tinypic.com/33o3yhw.png" alt="Dont be lazy" height="199" width="200"/>
              <p className="choreText">Clean The Kitchen</p>
              </li>
              <li className="smallerCleaningImages"><img src="http://i67.tinypic.com/1zo86f5.png" alt="Dont be lazy" height="199" width="200"/>
              <p className="choreText">Water The Plants</p>
              </li>
            </ul>
          </div>
          <div className="bodyText">
            <h2>Make Your Life Easier With Roomie</h2>
            <p className="bodyParagraph">Living with people is an experience, make it a positive one. Start your roommate relationship on the right foot with Roomie.<br/>Our application allows you to easily keep tabs on household tasks. View each room in your home and what needs to be done.<br/>Need to water a plant, do laundry or load the dishwasher? It's all trackable with Roomie.</p>
          </div>
        </div>
        <div className="Team" id="team">
          <div className="teamTextHeader">
            <img src="http://i65.tinypic.com/25p4ex4.png" alt="Profile Picture" height="152" width="800"/>
          </div>
          <div className="profileBox">
            <div className="bioBox">

              <img src="http://i66.tinypic.com/a2sl0j.png" alt="Profile Picture" height="300" width="279"/>

            </div>
            <div className="profileBox">
              <img src="http://i68.tinypic.com/2ihuv0h.png" alt="Profile Picture" height="352" width="498"/>
            </div>
            <div className="bioBox">

              <img src="http://i67.tinypic.com/2e39zt5.png" alt="Profile Picture" height="300" width="279"/>

            </div>
          </div>
          <div className="teamFooter">
            <img src="http://i65.tinypic.com/11v5cus.png" alt="Profile Picture" height="68" width="800"/>
          </div>
        </div>
        <div className="contactFooter" id="Contact">
          <div className="contactBox">
          <div className="teamSocial">
          <h3>Contact Linsy</h3>
          <ul className="socialIcons">
            <li className="listSocial">
              <a href="https://www.facebook.com/profile.php?id=100013525780488&fref=ts" className="btn-social btn-outline">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
              </a>
            </li>
            <li className="listSocial">
              <a href="https://github.com/linsydeanna" className="btn-social btn-outline">
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>
            </li>
            <li className="listSocial">
              <a href="https://www.linkedin.com/in/linsydeanna?authType=NAME_SEARCH&authToken=2GqI&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A435101060%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1475602726237%2Ctas%3Alin" className="btn-social btn-outline">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="teamSocial">
        <h3>Contact Kevin</h3>
        <ul className="socialIcons">
          <li className="listSocial">
            <a href="https://www.facebook.com/kevin.chambers.507" className="btn-social btn-outline">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
          </li>
          <li className="listSocial">
            <a href="https://github.com/kbchambers2" className="btn-social btn-outline">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </a>
          </li>
          <li className="listSocial">
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

export default Login;
