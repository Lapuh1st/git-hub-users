import Button from "../Components/users/Button"
import Loading from '../Components/users//Loading';
import Users from '../Components/users//Users';
import UserDetailed from '../Components/users//UserDetailed';
import React from 'react';
import { getUsers } from '../Actions/index';
import { useDispatch } from "react-redux";

let App = () => {
  const dispatch = useDispatch();
  dispatch(getUsers())
  
  return (
    <div>
      <h1 style={{textAlign: "center"}}>List of github users</h1>
      <Button />
      <Loading />
      <Users />
      <UserDetailed />
    </div>
  )
};

export default App;