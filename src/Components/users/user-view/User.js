import React from "react";
import { Link } from "react-router-dom";
import './user.css';

let User = (user) => {
  return <article className="user" key={user.id}>
    <div>
      <img className="user__img" width="100" height="100" src={user.avatar_url} alt="" />
      <h1 className="user__title" >{user.login}</h1>
      <a className="user__link" href={user.html_url} target="_blank" rel="noopener noreferrer">
        READ MORE on git hub
      </a>
      <div className="user__button-container">
        <Link className="user__button"  to={`/user-detailed/${user.login}`}>Go for detailed page</Link>
      </div>
    </div>
  </article>

}

export default User;