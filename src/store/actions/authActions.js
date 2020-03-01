export const signIn = (username) => {
    return (dispatch, getState) => {
        localStorage.setItem('username', JSON.stringify(username.username))
        dispatch({type: 'LOGIN_SUCCESS', username: username});
    }
}