import React from "react";
import { getUserInfo, getUserInfoNoApiCall } from '../Actions/index';
import { useSelector, useDispatch } from "react-redux";
import '../css/article.css';

let Users = () => {
  let usersToShow = [];
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  function showUserInfo (user) {
    if (state.userInfo && state.userInfo.login === user) {
      dispatch(getUserInfoNoApiCall());
      return;
    }

    dispatch(getUserInfo(user));
  }

  if (state.users && !state.showDetailed) {
    usersToShow = state.users.map(user  => {
      return <article className="article" key={user.id}>
        <div>
          <img className="article__img" width="100" height="100" src={user.avatar_url} alt="" />
          <h1 className="article__title" >{user.login}</h1>
          <a className="article__link" href={user.html_url} target="_blank" rel="noopener noreferrer">
            READ MORE on git hub
          </a>
          <div className="article__button-container">
            <button className="article__button" onClick={() => showUserInfo(user.login)}>Go for detailed page</button>
          </div>
        </div>
      </article>
    })

  }

  return usersToShow;
}

export default Users;