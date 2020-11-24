import React from 'react';
import Loading from './Loading';
import Pagination from '../Components/users/pagination/Pagination';
import UserList from '../Components/users/user-list/UserList';
import UserInfo from '../Components/users/user-info/UserInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

let App = () => {
  return (
    <div>
      <h1 className="title">List of github users</h1>
      <Loading />

      <Router>
        <Switch>
            <Redirect exact from="/" to="list" />
            <Route exact path="/list/:currentPage?">
              <Pagination/>
              <UserList />
            </Route>
            <Route exact path="/user-info/:username">
              <UserInfo />
            </Route>
          </Switch>
      </Router>
    </div>
  )
};

export default App;