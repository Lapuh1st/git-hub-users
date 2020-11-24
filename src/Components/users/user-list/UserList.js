import { useEffect} from "react";
import { getUsers } from '../../../Actions/index';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import User from "../user-view/User";

let UserList = () => {
  let usersToShow = [];
  const { currentPage } = useParams();
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getUsers(currentPage))
  }, [currentPage]);

  if (users && users.length) {
    usersToShow = users.map(user  => {
      return User(user);
    })
  }

  return usersToShow;
}

export default UserList;