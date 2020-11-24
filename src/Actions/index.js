export const GET_USERS = 'GET_USERS';
export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_USER_INFO_WITHOUT_REQUEST = 'GET_USER_INFO_WITHOUT_REQUEST';
export const GO_BACK_FROM_INFO = 'GO_BACK_FROM_INFO';
export const USERS_RECEIVED = "USERS_RECEIVED";
export const USERS_INFO_RECEIVED = "USERS_INFO_RECEIVED";

export const getUsers = (payload) => ({
    type: GET_USERS,
    payload
});

export const setUsers = (payload) => ({
    type: USERS_RECEIVED,
    payload
});

export const getUserInfo = (userName) => ({
    type: GET_USER_INFO,
    userName
});

export const setUserInfo = (payload) => ({
    type: USERS_INFO_RECEIVED,
    payload
});

export const getUserInfoWithoutRequest = () => ({
    type: GET_USER_INFO_WITHOUT_REQUEST
});
