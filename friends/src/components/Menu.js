import React from "react";
import Login from "./Login"
import FriendsList from "./FriendsList"
import ProtectedRoute from "../components/ProtectedRoute"
import Logout from "./Logout";
import {getToken} from "../utils/api"
import { BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";

export default function Menu(){
    const signedIn = getToken();

    return(
    <Router>
    <div className = "menu">
        <ul>
            <li>
            {!signedIn && <Link to="/login">Login</Link>}
            {signedIn && <Link to="/logout">Logout</Link>}
            
            </li>
            <li>
            <Link to="/friends">Friends</Link>
            </li>
        </ul>
        </div>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/friends" component={FriendsList} />
        <ProtectedRoute path="/logout" component={Logout} />
    </Router>
    
    )
}