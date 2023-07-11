import '../css/Login.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCheck, faX, faCrown } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

function Login({player, setPlayer}) {

  const [passwordVerified, setPasswordVerified] = useState(false);
  const [usernameVerified, setUsernameVerified] = useState(false);
  
  // Password input - Start
  const PasswordUsernameInput = () => {
    const [revealPasswordType, setRevealPasswordType] = useState('password');
    return  <>
              <div className="input-div user-div m-4 col-8">              
                  <input className="col-10" placeholder="Username" onInput={(e)=> {
                    setPlayer(prev => ({
                      ...prev,      
                      "username": e.target.value
                    })) ; setPasswordVerified(true);
                  }}></input>
              </div>
              <div className="input-div eye-div m-4 col-8">
                <input className="col-10" placeholder="Password" type={revealPasswordType} onInput={(e)=> {
                  setPlayer(prev => ({
                    ...prev,      
                    "password": e.target.value
                  })) ; setUsernameVerified(true);
                }}></input>
                <FontAwesomeIcon icon={faEye} className="eye"
                  onClick={() => revealPasswordType === 'password' ? setRevealPasswordType('text') : setRevealPasswordType('password')}
                />
              </div>
            </>
  }
  // Password input - Finish

  // Keep me signed in - Start
  const [staySignedIn, setStaySignedIn] = useState(false);
  const KeepMeSignedInButton = () => {
    return  <div className="signed-in-toggle-div m-4 col-8" onClick={() => staySignedIn === false ? setStaySignedIn(true) : setStaySignedIn(false)}>
              {staySignedIn ? <FontAwesomeIcon className="col-2 faCheck" icon={faCheck} /> 
                                :
                              <FontAwesomeIcon className="col-2 faX" icon={faX} />}
              <span className="col-8">Keep me signed in</span>
            </div>;
  };  

  useEffect(() => {
    if (staySignedIn) {
      setPlayer(prev => ({
        ...prev,      
        "permSignedIn": true
      }));
    } else {
      setPlayer(prev => ({
        ...prev,      
        "permSignedIn": false
      }));
    }
  }, [staySignedIn]);
  // Keep me signed in - Finish

  // Login button - Start
  const LoginButton = () => {
    if (localStorage.getItem('player', player) !== null) {
        if (usernameVerified && passwordVerified) {
          setPlayer(prev => ({
            ...prev,      
            "loginCompleted": true
          }));
          return <Link  to='/PlayerHome' className="m-3 p-2 col-8 sign-in-form-button">SIGN IN</Link>
        } else {
          setPlayer(prev => ({
            ...prev,      
            "loginCompleted": true
          }));
          return <Link className="m-3 p-2 col-8 sign-in-form-button">SIGN IN</Link>
        }
    } else {
        if (usernameVerified && passwordVerified) {
          return <Link to='/PlayerHome' className="m-3 sign-up">Sign Up</Link>
        } else {
          return <Link className="m-3 sign-up">Sign Up</Link>
        }
    }
  };
  // Login button - Finish

  return (
      <div className="login">
          <div className="form-title p-4 my-1 col-lg-4 col-md-10">
              <FontAwesomeIcon icon={faCrown} />
              <span>Trade your favourite Cryptocurrencies</span>
              <FontAwesomeIcon icon={faCrown} />
          </div>
          <div className="form-main col-lg-4 col-md-10">
              <div className="sign-in-form p-3">
                <span className="header m-4">Sign In</span>

                {PasswordUsernameInput()}

                {KeepMeSignedInButton()}

                {LoginButton()}              

              </div>
          </div>
      </div>
    );
}

export default Login;