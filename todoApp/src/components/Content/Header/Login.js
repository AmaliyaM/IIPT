import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux'

import { userSignIn } from '../../../store/actionCreators/todoActions'

const clientId =
  '692735965571-rl30v5io41nrdrnijhpi5bo0dorqcush.apps.googleusercontent.com'

function Login() {
  const dispatch = useDispatch()
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    dispatch(userSignIn(res.profileObj))
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;