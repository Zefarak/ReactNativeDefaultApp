import * as types from './types';
import store from './ReduxStore';
import {SET_PASSWORD_AND_LOGIN} from "./types";


function setSecret(secret) {
    return {
        type: types.SET_SECRET,
        secret
    }
}


function setPasswordAndLogin(password) {
    return {
        type: types.SET_PASSWORD_AND_LOGIN,
        password
    }
}

function attemptLogin(password) {
    const {user} = store.getState();
    return (user.password === password) ?{type: types.LOGIN} :{
        type: types.SET_LOGIN_MESSAGE,
        loginMessage: 'Login Incorrect'
    }
}

function reset() {
    return {
        type: types.RESET,
    }
}
function logout() {
    return {
        type: types.LOGOUT,
    }
}

function setLoginMessage(message) {
    return {
        type: types.SET_LOGIN_MESSAGE,
        message
    }
}


export default ActionCreators = {
    setSecret,
    setPasswordAndLogin,
    attemptLogin,
    reset,
    logout,
    setLoginMessage,
}
