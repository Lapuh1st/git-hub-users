import {GET_USERS, GET_USER_INFO, USERS_RECEIVED, USERS_INFO_RECEIVED, GO_BACK_FROM_DETAILED, GET_USER_INFO_WITHOUT_REQUEST} from "../Actions/index"


const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, loading: true };
    case USERS_RECEIVED:
      return { ...state, users: action.json, loading: false };
    case GET_USER_INFO:  
      return { ...state, loading: true };
    case USERS_INFO_RECEIVED:
      return { ...state, userInfo: action.json, loading: false, showDetailed: true };
    case GO_BACK_FROM_DETAILED:
      return { ...state, showDetailed: false };
    case GET_USER_INFO_WITHOUT_REQUEST:
      return { ...state, showDetailed: true };
    default:
      return state;
  }
};

export default reducer;
