import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo, getUserInfoWithoutRequest } from '../../../Actions/index';
import { Link } from "react-router-dom";
import './user-info.css';

const UserInfo = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const { username } = useParams();
    const { currentPage, userInfo } = state;

    const createdAt = userInfo && userInfo.created_at ? new Date(userInfo.created_at).toLocaleDateString() : null;
    const goBackLink = currentPage ? `/list/${currentPage}` : "/list/"; 
    
    useEffect(() => {
        if (userInfo && userInfo.login === username) {
            dispatch(getUserInfoWithoutRequest());
            return;
        }
        dispatch(getUserInfo(username));
    }, []);

    function lineGenerator (text, value) {
        return value ? <div>{text} : {value}</div> : null
    } 

    return userInfo ? <div className="user__info">
        <Link to={goBackLink} className="button-back"></Link>
        <div className="user user--info">
            <h1>{userInfo.name}</h1>

            <div className="info__container info__img__container"> 
                <img className="user__img" width="250" alt="" src={userInfo.avatar_url} />
            </div>
            <div className="info__container info__container-text">
                {lineGenerator("Followers", userInfo.followers)}
                {lineGenerator("Following", userInfo.following)}
                {lineGenerator("Created at", createdAt)}
                {lineGenerator("Company", userInfo.company)}
                {lineGenerator("Email", userInfo.email)}
                {lineGenerator("Location", userInfo.location)}
                {lineGenerator("Bio", userInfo.bio)}
                {userInfo.blog ? <div>Open <a className="info__link" href={userInfo.blog}>{userInfo.name}</a> blog</div> : null}

            </div>
        </div> 
    </div>: null
}

export default UserInfo;
