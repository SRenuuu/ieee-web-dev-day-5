import {Route, BrowserRouter as Router} from "react-router-dom";
import LoginClass from "./components/login/loginclass";
import Login from "./components/login/login";
import Register from "./components/register/register";
import FriendsList from "./components/cards/FriendsList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Router>
            <Route exact path="/" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={LoginClass}/>
            <Route exact path="/friends" component={FriendsList}/>

        </Router>
    );
}

export default App;
