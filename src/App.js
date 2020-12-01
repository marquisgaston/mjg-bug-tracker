import React from "react";
import {useSelector} from "react-redux";
import './index.scss';
import Login from './Views/Login/login';
import Sidebar from './Views/pages/sidebar';
import {BrowserRouter as Router} from "react-router-dom";
import ViewBugPage from "./Views/pages/viewBugPage";

function App() {
  const {auth} = useSelector(state=>state)
  return (
    <Router>
      {!auth.loggedIn ? <Login/> :
        <>
          <Sidebar/>
          <ViewBugPage/>
        </>
      }
    </Router>
  );
}

export default App;
