import React, { useState } from "react";
import * as userService from "../services/userService";

const RegisterCompletion = ({ location }) => {
    const URLParams = new URLSearchParams(location.search);

    const userToken = URLParams.get("token");
    const userEmail = URLParams.get("email");

    const [user, setUser] = useState({
        password: "",
        passwordConfirm: "",
    });

    const handleChange = (e) => {
        const newUserData = { ...user };
        newUserData[e.target.name] = e.target.value;
        setUser(newUserData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newUser = {
                email: userEmail,
                password: user.password,
                token: userToken,
            };
            await userService.registerUser(newUser);
        } catch (ex) {
            // TODO: check error y mostrar algo en pantalla
        }
    };

    return (
        <>
            <h1>register completion: {userEmail}</h1>
            <form action='' onSubmit={handleSubmit}>
                <label htmlFor='password'>Ingrese su password</label>
                <input
                    type='text'
                    name='password'
                    id='password'
                    onChange={handleChange}
                />
                <label htmlFor='passwordConfirm'>Confirme su password</label>
                <input
                    type='text'
                    name='passwordConfirm'
                    id='passwordConfirm'
                    onChange={handleChange}
                />
                <button type='submit'>Registrar</button>
            </form>
        </>
    );
};

export default RegisterCompletion;
