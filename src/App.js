import React from "react";
import Login from "./components/userAccount/Login";
import Register from "./components/userAccount/Register";
import UserProfile from "./components/userAccount/UserProfile";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <>
            <ToastContainer />
            <Switch>
                <Route path='/register' component={Register} />
                <Route path='/loginForm' component={Login} />
                <Route path='/userProfile' component={UserProfile} />
                <Route path='/' component={Register} />
            </Switch>
        </>
    );
};

export default App;
