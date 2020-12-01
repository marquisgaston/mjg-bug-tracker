import React from "react";
import {useSelector} from "react-redux";
import './index.scss';
import Login from './Views/Login/login';
import Sidebar from './Views/pages/sidebar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ViewBugPage from "./Views/pages/viewBugPage";

function App() {
  const {auth} = useSelector(state=>state)
  return (
    <Router>
      {!auth.loggedIn ? <Login/> :
        <div className="app-wrapper">
          <Sidebar/>
            <Switch>
              <Route path="/" exact component={ViewBugPage}/>
            </Switch>
        </div>
      }
    </Router>
  );
}

export default App;
