import React from "react";
import { useDispatch } from "react-redux";
import { getUserInfo } from '../Actions/index';

let User = (users) => {
  const dispatch = useDispatch();

  // function dispatchUser() {
  //   dispatch(getUserInfo());
  // }

  const articleStyle = {
    width: "50%",
    margin: "0 auto",
    color: "olive"
  };

  return users.map(user  => {
    return <article style={articleStyle} key={user.id}>
      <div>
        <h1>{user.login}</h1>
        <img width="100" height="100" src={user.avatar_url} alt="" />
        <a href={user.html_url} target="javscript:void(0)">
          READ MORE on git hub
        </a>
        <button>Go for page</button>
      </div>
    </article>
  })
}

export default User;
