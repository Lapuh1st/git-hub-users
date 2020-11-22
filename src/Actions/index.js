export const getUsers = () => ({
    type: 'GET_USERS',
});

export const getUserInfo = (userName) => ({
    type: 'GET_USER_INFO',
    userName: userName
});

export const getUserInfoNoApiCall = () => ({
    type: 'GET_USER_INFO_NO_API_CALL'
});

export const goBackFromDetailed = () => ({
    type: 'GO_BACK_FROM_DETAILED'
});

