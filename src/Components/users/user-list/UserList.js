import {useEffect} from "react";
import { getUserInfo, getUserInfoWithoutRequest, getUsers } from '../../../Actions/index';
import { useSelector, useDispatch } from "react-redux";
import User from "../user-view/User"

let UserList = () => {
  let usersToShow = [];
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
      dispatch(getUsers())
  }, []);

  function showUserInfo (user) {
    if (state.userInfo && state.userInfo.login === user) {
      dispatch(getUserInfoWithoutRequest());
      return;
    }
    dispatch(getUserInfo(user));
  }

  if (state.users && !state.showDetailed) {
    usersToShow = state.users.map(user  => {
      return User(user, showUserInfo);
    })

  }

  return usersToShow;
}

export default UserList;