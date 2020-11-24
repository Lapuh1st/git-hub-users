import {useEffect} from "react";
import { getUsers } from '../../../Actions/index';
import { useSelector, useDispatch } from "react-redux";
import User from "../user-view/User"

let UserList = () => {
  let usersToShow = [];
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
      dispatch(getUsers())
  }, []);

  if (state.users && state.users.length) {
    usersToShow = state.users.map(user  => {
      return User(user);
    })

  }

  return usersToShow;
}

export default UserList;