import '../css/Login.css';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';

function Login() {

  const [loginOrRegister, setLoginOrRegister] = useState('Login');
  const [passwordShowOrTell, setPasswordShowOrTell] = useState('password');

  //show password on click
  const doesPasswordShow = () => {
    if (passwordShowOrTell == 'password') {
      setPasswordShowOrTell('text');
    } else {
      setPasswordShowOrTell('password');
    }
  }

  return (
    <div className="login">
        <div className="form-main col-lg-4 col-md-10">
            <div className="sign-in-form p-3">
              {loginOrRegister == 'Login' ? <span className="m-2">Sign In</span> : <span className="m-2">Register</span>}
              <input className="m-2" placeholder="Username"></input>
              <div className="m-2">
                <input placeholder="Password" type={passwordShowOrTell}></input>
                <FontAwesomeIcon icon={faEye} onClick={() => doesPasswordShow()} className="eye"/>
              </div>
              {loginOrRegister == 'Login' && <div className="form-check m-2">
                <input className="form-check-input m-2" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label m-2" for="flexCheckDefault">
                  Keep me signed in
                </label>
              </div>}
              {loginOrRegister == 'Login' && <><button className="m-2">SIGN IN</button>
              <span className="m-2">Or</span></>}
              <button onClick={() => setLoginOrRegister('Register')} className="m-2">Sign Up</button>
            </div>
        </div>
    </div>
  );
}

export default Login;