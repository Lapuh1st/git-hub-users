import React from "react";
import { Link } from "react-router-dom";
import './user.css';

let User = (user) => {
  return <article className="user" key={user.id}>
    <div className="user__container">
      <img className="user__img" width="100" height="100" src={user.avatar_url} alt="" />
      <div className="user__info-container">
        <div className="user__title-container">
          <h1 className="user__title" >{user.login}</h1>
          <a className="user__link" href={user.html_url} target="_blank" rel="noopener noreferrer">
            READ MORE on git hub
          </a>
        </div>
        <div className="user__button-container">
          <Link className="user__button"  to={`/user-info/${user.login}`}>User info</Link>
        </div>
      </div>
    </div>
  </article>

}

export default User;