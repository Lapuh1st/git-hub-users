import React from "react";
import { useSelector } from "react-redux";
import Button from "./BackButton"
import './user-deatailed.css';


const User = () => {
    const state = useSelector(state => state);
    const userInfo = state.userInfo;

    const createdAt = userInfo && userInfo.created_at ? new Date(userInfo.created_at).toLocaleDateString() : null;

    function lineGenerator (text, value) {
        return value ? <div>{text} : {value}</div> : null
    } 

    return userInfo && state.showDetailed ? <div>
        <Button />
        <div className="article article--detailed">
            <h1>{userInfo.name}</h1>

            <div className="detailed__container detailed__img__container"> 
                <img className="article__img" width="250" alt="" src={userInfo.avatar_url} />
            </div>
            <div className="detailed__container detailed__info__container">
                {lineGenerator("Followers", userInfo.followers)}
                {lineGenerator("Following", userInfo.following)}
                {lineGenerator("Created at", createdAt)}
                {lineGenerator("Company", userInfo.company)}
                {lineGenerator("Email", userInfo.email)}
                {lineGenerator("Location", userInfo.location)}
                {lineGenerator("Bio", userInfo.bio)}

                {userInfo.blog ? <div>Open <a className="detailed__link" href={userInfo.blog}>{userInfo.name}</a> blog</div> : null}



            </div>
        </div> 
    </div>: null
}

export default User;
