export const getUsers = () => ({
    type: 'GET_USERS',
});

export const getUserInfo = (userName) => ({
    type: 'GET_USER_INFO',
    userName: userName
});

export const goBackFromDetailed = () => ({
    type: 'GO_BACK_FROM_DETAILED'
});

