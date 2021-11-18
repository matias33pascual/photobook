import React from "react";
import Login from "./components/userAccount/Login";
import CreateAccount from "./components/userAccount/CreateAccount";
import UserProfile from "./components/userAccount/UserProfile";
import { Switch, Route } from "react-router-dom";
//import { ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import RegisterCompletion from "./components/userAccount/RegisterCompletion";

const App = () => {
    return (
        <>
            {/* <ToastContainer /> */}
            <Switch>
                <Route
                    path='/registerCompletion'
                    component={RegisterCompletion}
                />
                <Route path='/register' component={CreateAccount} />
                <Route path='/login' component={Login} />
                <Route path='/userProfile' component={UserProfile} />
                <Route path='/' component={CreateAccount} />
            </Switch>
        </>
    );
};

export default App;
