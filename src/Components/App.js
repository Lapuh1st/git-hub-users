import React from 'react';
import Loading from '../Components/users/Loading';
import UserList from '../Components/users/user-list/UserList';
import UserDetailed from '../Components/users/user-detailed/UserDetailed';

let App = () => {
  return (
    <div>
      <h1 className="title">List of github users</h1>
      <UserList />
      <Loading />
      <UserDetailed />
    </div>
  )
};

export default App;