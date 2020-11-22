import React from 'react';
import { getUsers, goBackFromDetailed } from '../Actions/index';
import { useDispatch, useSelector } from "react-redux";

let Button = () => {
   const dispatch = useDispatch();

   const state = useSelector(state => state);

   console.log(state.userInfo);

   function dispatchActions() {
      dispatch(getUsers());
      dispatch(goBackFromDetailed());
   }

   return <button onClick={() => dispatchActions()}>Go back to users</button>
}

export default Button;