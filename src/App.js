import React from "react";
import Login from "./components/userAccount/Login";
import Register from "./components/userAccount/Register";
import UserProfile from "./components/userAccount/UserProfile";
import { Switch, Route } from "react-router-dom";
//import { ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import RegisterCompletion from "./components/userAccount/RegisterCompletion";
import TestAPI from "./components/test/TestAPI";

const App = () => {
    return (
        <>
            {/* <ToastContainer /> */}
            <Switch>
                <Route
                    path='/registerCompletion'
                    component={RegisterCompletion}
                />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <Route path='/userProfile' component={UserProfile} />
                <Route path='/' component={TestAPI} />
            </Switch>
        </>
    );
};

export default App;
