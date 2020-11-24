import {
  GET_USERS, 
  GET_USER_INFO, 
  USERS_RECEIVED,
  USERS_INFO_RECEIVED, 
  GO_BACK_FROM_INFO, 
  GET_USER_INFO_WITHOUT_REQUEST
} from "../Actions/index"

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, loading: true, pagination: action.payload };
    case USERS_RECEIVED:
      return { ...state, users: action.payload, loading: false };
    case GET_USER_INFO:  
      return { ...state, loading: true };
    case USERS_INFO_RECEIVED:
      return { ...state, userInfo: action.payload, loading: false };
    case GO_BACK_FROM_INFO:
      return { ...state };
    case GET_USER_INFO_WITHOUT_REQUEST:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
