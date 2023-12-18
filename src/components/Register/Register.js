import React from 'react';
import Form from '../Form/Form';

function Register({ onRegister, serverError, location, setServerError }) {
    return <Form
        type='register'
        onSubmit={onRegister}
        serverError={serverError}
        setServerError={setServerError}
        location={location} />;
}

export default Register;