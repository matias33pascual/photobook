import React, { useState } from "react";
import httpServices from "../services/httpServices";
import config from "../services/config.json";
// import { toast } from "react-toastify";
import * as userService from "../services/userService";

const CreateAccount = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const handleChange = (e) => {
        const newUserData = { ...user };
        newUserData[e.target.name] = e.target.value;
        setUser(newUserData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await userService.createUser(user);
        } catch (ex) {
            // TODO: check error y mostrar algo en pantalla
        }

        //toast("revisa tu email!");
    };

    return (
        <div>
            <h1>Creando tu cuenta de usuario</h1>
            <form action='' onSubmit={handleSubmit}>
                <label htmlFor='firstName'>Nombre</label>
                <input
                    type='text'
                    name='firstName'
                    id='firstName'
                    value={user.firstName}
                    onChange={handleChange}
                />

                <label htmlFor='lastName'>Apellido</label>
                <input
                    type='text'
                    name='lastName'
                    id='lastName'
                    value={user.lastName}
                    onChange={handleChange}
                />

                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    name='email'
                    id='email'
                    value={user.email}
                    onChange={handleChange}
                />
                <button type='submit'>Crear</button>
            </form>
        </div>
    );
};

export default CreateAccount;
