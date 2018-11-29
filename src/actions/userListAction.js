import {actionType} from '../reducers/UserListReducer';
import UserApi from '../api/UserApi';

function findUsers() {
    return (dispatch) => UserApi.findUserList()
        .then((users) => {
            dispatch({
                type: actionType.SET_USERS,
                payload: users
            })
        })
}

export default {
    findUsers
}