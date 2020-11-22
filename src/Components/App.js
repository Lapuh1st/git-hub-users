import Button from '../Containers/Button';
import Loading from '../Containers/Loading';
import Users from '../Containers/Users';
import UserDetailed from '../Containers/UserDetailed';
import React from 'react';
import { getUsers } from '../Actions/index';
import { useDispatch } from "react-redux";

let App = () => {
  const dispatch = useDispatch();
  dispatch(getUsers())
  
  return (
    <div>
      <Button />
      <Loading />
      <Users />
      <UserDetailed />
    </div>
  )
};

export default App;