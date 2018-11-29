const actionType = {
    SET_USERS : 'userList.setUsers'
}

const initialState = {
    users : []
}

function reducer(state=initialState, action) {
    return {
        users : userReducer(state.users, action)
    }
}

function userReducer(userState, {type, payload}) {
    switch(type) {
        case actionType.SET_USERS : 
            return [...payload];
        default :
            return userState;
    }
}

export default reducer;
export {actionType};