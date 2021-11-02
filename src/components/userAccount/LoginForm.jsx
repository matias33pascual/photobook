import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [account, setAccount] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data: post } = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );

        console.log({ data: post });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccount((previousAccountData) => ({
            ...previousAccountData,
            [name]: value,
        }));
    };

    return (
        <div>
            <h1>login form</h1>
            <form action='' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                    value={account.email}
                    onChange={handleChange}
                    name='email'
                    id='email'
                    type='text'
                    autoFocus
                />

                <label htmlFor='password'>Password</label>
                <input
                    value={account.password}
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

export default LoginForm;
