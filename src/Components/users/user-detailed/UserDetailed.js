import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo, getUserInfoWithoutRequest } from '../../../Actions/index';
import { Link } from "react-router-dom";
import './user-deatailed.css';

const UserDetailed = () => {
    const dispatch = useDispatch();
    const { username } = useParams();
    const state = useSelector(state => state);
    const userInfo = state.userInfo;
    const createdAt = userInfo && userInfo.created_at ? new Date(userInfo.created_at).toLocaleDateString() : null;

    useEffect(() => {
        if (state.userInfo && state.userInfo.login === username) {
            dispatch(getUserInfoWithoutRequest());
            return;
        }
        dispatch(getUserInfo(username));
    }, []);

    function lineGenerator (text, value) {
        return value ? <div>{text} : {value}</div> : null
    } 

    return userInfo ? <div>
        <Link to="/" className="button-back"></Link>
        <div className="user user--detailed">
            <h1>{userInfo.name}</h1>

            <div className="detailed__container detailed__img__container"> 
                <img className="user__img" width="250" alt="" src={userInfo.avatar_url} />
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

export default UserDetailed;
