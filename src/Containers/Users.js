import React from "react";
import { getUserInfo } from '../Actions/index';
import { useSelector, useDispatch } from "react-redux";

const articleStyle = {
  width: "50%",
  margin: "0 auto",
  color: "olive"
};

let Users = () => {
  let usersToShow = [];
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  console.log(state);

  if (state.users && !state.userInfo) {

    usersToShow = state.users.map(user  => {
      return <article style={articleStyle} key={user.id}>
        <div>
          <h1>{user.login}</h1>
          <img width="100" height="100" src={user.avatar_url} alt="" />
          <a href={user.html_url}>
            READ MORE on git hub
          </a>
          <button onClick={() => (dispatch(getUserInfo(user.login)))}>Go for page</button>
        </div>
      </article>
    })

  }

  return usersToShow;
}

export default Users;