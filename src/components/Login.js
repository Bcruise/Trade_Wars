import '../css/Login.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCheck, faX, faCrown } from '@fortawesome/free-solid-svg-icons';

function Login({player, setPlayer}) {

  const [passwordShowOrTell, setPasswordShowOrTell] = useState('password');
  const [keepMeSignedIn, setKeepMeSignedIn] = useState(false);
  const [pagePath, setPagePath] = useState('');

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
  
  const StaySignedInConfirmation = () => {
    if (keepMeSignedIn === true && player.username == usernameCarrier && player.password == passwordCarrier) {
      setPlayer(prev => ({
        ...prev,      
        "permSignedIn": true
      }));
    } else if (keepMeSignedIn === true && usernameCarrier.length > 0 && passwordCarrier.length > 0 && localStorage.getItem('player') == null) {
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
  }

  const CheckDetails = () => {  
    if (usernameCarrier.length < 1 || passwordCarrier.length < 1) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);    
    }

    if (player.username !== usernameCarrier || player.password !== passwordCarrier) {
      if (localStorage.getItem('player') !== null) {
        alert('Input the correct name and password');
      }
      setKeepMeSignedIn(false);
      setPlayer(prev => ({
        ...prev,      
        "permSignedIn": false
      }));
    }
  }
  
  const AddPlayerDetails = () => {
    if (player.username == '' && player.password == '') {
      setPlayer(prev => ({
        ...prev,      
        "username": usernameCarrier,
        "password": passwordCarrier
      }));
    }
  }

  useEffect(() => {
    if (player.username == usernameCarrier && player.password == passwordCarrier && pagePath !== `/PlayerHome`) {
      setPagePath(`/PlayerHome`);
    } 
  }, [usernameCarrier, passwordCarrier])
 
  
  return (
    <div className="login">
        <div className="form-title p-4 my-1 col-lg-4 col-md-10">
            <FontAwesomeIcon icon={faCrown} />
            <span>Trade your favourite Cryptocurrencies</span>
            <FontAwesomeIcon icon={faCrown} />
        </div>
        <div className="form-main col-lg-4 col-md-10">
            <div className="sign-in-form p-3">
              {localStorage.getItem('player', player) !== null ? <span className="header m-4">Sign In</span> : <span className="header m-4">Register</span>}
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
              <div className="signed-in-toggle-div m-4 col-8"
                onClick={() => keepMeSignedIn === true ? setKeepMeSignedIn(false) : setKeepMeSignedIn(true)}>
                {keepMeSignedIn && <FontAwesomeIcon className="col-2 faCheck" icon={faCheck} />}
                {!keepMeSignedIn &&<FontAwesomeIcon className="col-2 faX" icon={faX} />}
                <span className="col-8">Keep me signed in</span>
              </div>
              {localStorage.getItem('player', player) !== null ? <Link to={pagePath}
              className="m-3 p-2 col-8 sign-in-form-button"
              onClick={() => {CheckDetails(); AddPlayerDetails(); StaySignedInConfirmation()}}>
              SIGN IN
              </Link> : 
              <Link to='/PlayerHome' className="m-3 sign-up"
              onClick={() => {CheckDetails(); AddPlayerDetails(); StaySignedInConfirmation()}} 
              >Sign Up</Link>}              
            </div>
        </div>
    </div>
  );
}

export default Login;