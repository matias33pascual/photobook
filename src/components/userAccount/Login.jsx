import React, { useState } from "react";
import * as userService from "../services/userService";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await userService.loginUser(user);
        } catch (ex) {
            // TODO: check error y mostrar algo en pantalla
        }
    };

    const handleChange = (e) => {
        const newUserData = { ...user };
        newUserData[e.target.name] = e.target.value;
        setUser(newUserData);
    };

    return (
        <div>
            <h1>login form</h1>
            <form action='' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                    value={user.email}
                    onChange={handleChange}
                    name='email'
                    id='email'
                    type='text'
                    autoFocus
                />

                <label htmlFor='password'>Password</label>
                <input
                    value={user.password}
                    onChange={handleChange}
                    name='password'
                    id='password'
                    type='text'
                />

                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;
