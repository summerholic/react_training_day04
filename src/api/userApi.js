import axios from 'axios';

const basePath='/user-api';

function findUserList() {
    return axios.get(`${basePath}/users`).then(
            (response) => response.data
        );
}

function findUser(userId) {
    return axios.get(`${basePath}/users/${userId}`).then(
        (response) =>response.data
    );
}

function registerUser(user) {
    return axios.post(`${basePath}/users`, user).then(
        (response) => response.data
    );
}


export default {
    findUserList,
    findUser,
    registerUser
}