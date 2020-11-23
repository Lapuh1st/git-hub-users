import React from "react";
import './user.css';

let User = (user, showUserInfo) => {
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

}

export default User;
