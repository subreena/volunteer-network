import React,{ createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import LogIn from './Components/LogIn/LogIn';
import PrivateRoute from './Components/LogIn/PrivateRoute';
import TaskChosen from './Components/TaskChosen/TaskChosen';
import Register from './Components/Register/Register';
import Admin from './Components/Admin/Admin';
import AddEvent from './Components/Admin/AddEvent';

export const UserContext = createContext();
function App() {
  const [loggedInUser , setLoggedInUser] = useState({});
  return (
    <>  
    <UserContext.Provider value={[loggedInUser , setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <LogIn></LogIn>
        </Route>
        <PrivateRoute path="/register/:name">
          <Register></Register>
        </PrivateRoute>
        <PrivateRoute path="/task-chosen/:email">
          <TaskChosen></TaskChosen>
        </PrivateRoute>
        <Route path="/admin">
        <Admin></Admin>
        </Route>
        <Route path="/addEvent">
          <AddEvent></AddEvent>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
    </>
  );
}

export default App;
