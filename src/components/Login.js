import '../css/Login.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faCheck, faX } from '@fortawesome/free-solid-svg-icons';

function Login({setWhichComponent}) {

  const [loginOrRegister, setLoginOrRegister] = useState('Login');
  const [passwordShowOrTell, setPasswordShowOrTell] = useState('password');
  const [keepMeSignedIn, setKeepMeSignedIn] = useState(false);

  // don't show either link
  setWhichComponent('Login');

  //toggle password viewability on click
  const doesPasswordShow = () => {
    if (passwordShowOrTell === 'password') {
      setPasswordShowOrTell('text');
    } else {
      setPasswordShowOrTell('password');
    }
  }

  // for sign in
  const [usernameCarrier, setUsernameCarrier] = useState('');
  const [passwordCarrier, setPasswordCarrier] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const checkDetails = () => {  
  if (usernameCarrier.length < 1 || passwordCarrier.length < 1) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  }

  return (
    <div className="login">
        <div className="form-main col-lg-4 col-md-10">
            <div className="sign-in-form p-3">
              {loginOrRegister === 'Login' ? <span className="header m-4">Sign In</span> : <span className="header m-4">Register</span>}
              <div className="error-div">
                {errorMessage && 
                  <span className="error-message">*Enter both a username and password</span>
                }
              </div>
              <div className="input-div user-div m-4 col-8">              
                <input className="col-10" placeholder="Username" onInput={(e) => setUsernameCarrier(e.target.value)}></input>
              </div>
              <div className="input-div eye-div m-4 col-8">
                <input className="col-10" placeholder="Password" type={passwordShowOrTell} onInput={(e) => setPasswordCarrier(e.target.value)}></input>
                <FontAwesomeIcon icon={faEye} onClick={() => doesPasswordShow()} className="eye"/>
              </div>
              {loginOrRegister === 'Login' && <div className="signed-in-toggle-div m-4 col-8" 
                onClick={() => keepMeSignedIn ? setKeepMeSignedIn(false) : setKeepMeSignedIn(true)}>
                {keepMeSignedIn && <FontAwesomeIcon className="col-2 faCheck" icon={faCheck} />}
                {!keepMeSignedIn &&<FontAwesomeIcon className="col-2 faX" icon={faX} />}
                <span className="col-8">Keep me signed in</span>
              </div>}
              {loginOrRegister === 'Login' && <><button className="m-3 p-2 col-8 sign-in-form-button" onClick={() => checkDetails()}>SIGN IN</button>
              <span className="m-2">Or</span></>}
              <button onClick={() => {setLoginOrRegister('Register'); checkDetails()}} className="m-3 sign-up">Sign Up</button>
            </div>
        </div>
    </div>
  );
}

export default Login;