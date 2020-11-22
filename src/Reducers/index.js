const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, loading: true };
    case "USERS_RECEIVED":
      return { ...state, users: action.json, loading: false };
    case "GET_USER_INFO":  
      return { ...state, loading: true };
    case "USERS_INFO_RECEIVED":
      return { ...state, userInfo: action.json, loading: false };
    case "GO_BACK_FROM_DETAILED":
      return { ...state, userInfo: false };
    default:
      return state;
  }
};

export default reducer;
