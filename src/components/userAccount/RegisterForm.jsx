import React, { useState } from "react";
import axios from "axios";

//* Este componente registra un nuevo usuario
/**
 *  el usuario ingresa el mail
 *  se valida que el mail ingresado sea un mail nuevo
 * 		si el mail ya fue ingresado, se le informa al usuario
 *  el usuario recibe un mail de autentificacion
 *  el usuario accede al enlace del mail y es redirigido a la segunda parte del
 *      formulario donde debe ingresar su nombre, foto y password
 *  los datos son registrados en la base de datos
 *  el usuario accede al sistema
 *
 *
 */

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";
const RegisterForm = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const obj = { email: e.target.value };

        const { data: post } = await axios.post(apiEndpoint, obj);

        console.log(post);
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div>
            <h1>register form</h1>
            <form action='' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                    value={email}
                    onChange={handleChange}
                    type='text'
                    autoFocus
                />
                <button type='submit'>Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
