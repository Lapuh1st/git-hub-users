import React from 'react';
import { goBackFromDetailed } from '../../../Actions/index';
import { useDispatch, useSelector } from "react-redux";

const Button = () => {
   const dispatch = useDispatch();
   const showDetailed = useSelector(state => state.showDetailed);

   function dispatchActions() {
      dispatch(goBackFromDetailed());
   }


   return showDetailed ? <button className="button-back" onClick={() => dispatchActions()}></button> : null
}

export default Button;