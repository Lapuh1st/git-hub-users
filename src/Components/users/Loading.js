import React from "react";
import img from "../../loading_spinner.gif";
import { useSelector } from "react-redux";

const Loading = () => {
  const loading = useSelector(state => state.loading);

  return loading ? (
    <div className="loader">
      <img src={img} alt="loading" />
      <h1>LOADING</h1>
    </div>
  ) : null;
}

export default Loading;
