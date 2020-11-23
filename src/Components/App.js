import React from 'react';
import Loading from '../Components/users/Loading';
import UserList from '../Components/users/user-list/UserList';
import UserDetailed from '../Components/users/user-detailed/UserDetailed';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

let App = () => {
  return (
    <div>
      <h1 className="title">List of github users</h1>
      <Loading />
      
      <Router>
        <Switch>
            <Route exact path="/">
              <UserList />
            </Route>
            <Route path="/user-detailed/:username">
              <UserDetailed />
            </Route>
          </Switch>
      </Router>
    </div>
  )
};

export default App;