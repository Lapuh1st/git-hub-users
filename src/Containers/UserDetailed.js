import React from "react";
import { useSelector } from "react-redux";

let User = () => {
    const state = useSelector(state => state);

    console.log(state.userInfo);

    return state.userInfo ? <div>Detailed</div> : null
}

export default User;
