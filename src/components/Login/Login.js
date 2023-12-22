import React from 'react';
import Form from '../Form/Form';

function Login({ onLogin, serverError, location, setServerError }) {
   return <Form
      type='login'
      onSubmit={onLogin}
      setServerError={setServerError}
      serverError={serverError}
      location={location} />;
}

export default Login;