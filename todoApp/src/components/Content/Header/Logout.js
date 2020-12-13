import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux'

import { userLogOut } from '../../../store/actionCreators/todoActions'

const clientId =
  '692735965571-rl30v5io41nrdrnijhpi5bo0dorqcush.apps.googleusercontent.com';

function Logout() {
  const dispatch = useDispatch()
  const onSuccess = () => {
    console.log('Logout made successfully');
    dispatch(userLogOut())
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;