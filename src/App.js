import React from 'react';
import LoginForm from './components/userAccount/LoginForm';
import RegisterForm from './components/userAccount/RegisterForm';
import UserProfile from './components/userAccount/UserProfile'

const App = () => {
    return (
        <>
            <RegisterForm />
            {/* <LoginForm /> */ }
            <UserProfile />
        </>
    );
}

export default App;