import userApi from '../api/userApi';

function findUser(id) {
    return (dispatch) => userApi.findUser(id).then(
        (user) => {
            dispatchEvent({
                type : actionType.SET_USER,
                payload : user
            })
        }
    )
}

function claerUser() {
    return dispatch => {
        dispatch({
            type : actionType.CLEAR_USER
        })
    }
}

function registerUser(user) {
    return () => userApi.registerUser(user);
}