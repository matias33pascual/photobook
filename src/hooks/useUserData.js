import React, { useState } from "react";
import * as userService from "../components/services/userService";

const useUserData = (user) => {
    const [userData, setUserData] = useState(user);

    const handleChange = (e) => {
        const newUserData = { ...userData };
        newUserData[e.target.name] = e.target.value;
        setUserData(newUserData);
    };

    const createHandleSubmit = async (e) => {
        e.preventDefault();

        try {
            await userService.createUser(user);
        } catch (ex) {}
    };

    const loginHandleSubmit = async (e) => {
        e.preventDefault();

        try {
            await userService.loginUser(user);
        } catch (ex) {}
    };

    return {
        userData,
        handleChange,
        createHandleSubmit,
        loginHandleSubmit,
    };
};

export default useUserData;
