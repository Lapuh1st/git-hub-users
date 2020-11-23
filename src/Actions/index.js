export const GET_USERS = 'GET_USERS';
export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_USER_INFO_WITHOUT_REQUEST = 'GET_USER_INFO_WITHOUT_REQUEST';
export const GO_BACK_FROM_DETAILED = 'GO_BACK_FROM_DETAILED';
export const USERS_RECEIVED = "USERS_RECEIVED";
export const USERS_INFO_RECEIVED = "USERS_INFO_RECEIVED";

export const getUsers = () => ({
    type: GET_USERS,
});

export const getUserInfo = (userName) => ({
    type: GET_USER_INFO,
    userName: userName
});

export const getUserInfoWithoutRequest = () => ({
    type: GET_USER_INFO_WITHOUT_REQUEST
});

export const goBackFromDetailed = () => ({
    type: GO_BACK_FROM_DETAILED
});

