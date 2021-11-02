import React from "react";

const UserProfile = () => {
    return (
        <>
            <h1>user profile</h1>

            <label htmlFor='profilePicture'>profile picture</label>
            <img src='' alt='' />
            <p>foto</p>

            <label htmlFor='firstName'>first name</label>
            <input type='text' name='firstName' id='firstName' />

            <label htmlFor='lastName'>last name</label>
            <input type='text' name='lastName' id='lastName' />

            <label htmlFor='password'>password</label>
            <input type='text' name='password' id='password' />

            <label htmlFor='passwordConfirm'>confirm password</label>
            <input type='text' name='confirmPassword' id='passwordConfirm' />
        </>
    );
};

export default UserProfile;
