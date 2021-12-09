import React from "react";
import axios from "axios";

const endpoints = {
    api: "http://localhost:50000",
    createUsers: "/users/create",
    registerUsers: "/users/register",
    loginUser: "/connect/token",
};

const TestAPI = () => {
    const createUser = async () => {
        const user = {
            firstName: "matias",
            lastName: "pascual",
            email: "mpascual@gmail.com",
        };

        const response = await axios.post(
            endpoints.api + endpoints.createUsers,
            user
        );

        console.log("create user!");
        console.log(response);
    };

    const registerUser = async () => {
        const user = {
            email: "mpascual@gmail.com",
            password: "Aa123!456",
            token: "CfDJ8ECdpYTF7URNjvnI7xFHZ9RM4NAG6WWrtuzNj2n/fNaVuOb7cFS0eJjZwz6BHh8bYxhKMRtM6SUhdIBBRVyJl1aMFjMBzc0tfH0hXr+JsPMIMyBjLGUSIyPB564qhI1ty/hrL+OFSMh00Zr/LDS0vh2rIv2iWe/Q7K/gnfVIrEtZS8+T8RuJxJFdhg7MoDvrGCsqxmInZy0RpPePskxL/YVM7ujNd1bEhzG2hb2sQofJ4q3oPy+pe1RcoXoAZKEh4g==",
        };

        const response = await axios.post(
            endpoints.api + endpoints.registerUsers,
            user
        );

        console.log("register user!");
        console.log(response);
    };

    const loginUser = async () => {
        const user = {
            username: "mpascual@gmail.com",
            password: "Aa123!456",
            client_id: "service.client",
            client_secret: "secret",
            grant_type: "password",
            scope: "regular",
        };

        const config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        };

        const response = await axios.post(
            endpoints.api + endpoints.loginUser,
            user,
            config
        );

        console.log(response);
        console.log("user logued");
    };

    return (
        <>
            <button onClick={createUser}>Create</button>
            <button onClick={registerUser}>Register</button>
            <button onClick={loginUser}>Login</button>
            <h1>test api</h1>
        </>
    );
};

export default TestAPI;
