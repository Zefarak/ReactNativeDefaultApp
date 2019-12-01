import * as types from './types';


function createReducer(initialState, handlers) {
    return function reducer(state=initialState, action) {
        if (handlers.hasOwnProperty(action.type)){
            return handlers[action.type](state, action);
        } else {
            return state
        }
    }
}

export const user = createReducer({password:null, secret: null}, {
    [types.RESET](state, {}){
        return {password: null, secret: null}
    },
    [types.SET_SECRET](state, { secret}) {
        return {...state, secret}
    },
    [types.SET_PASSWORD_AND_LOGIN](state, {password}) {
        return {...state, password}
    }
});


const initialAppState = {
    loginMessage: null,
    isLoggedIn: false,
    isPasswordSet: false
};

export const appState = createReducer(initialAppState, {
    [types.LOGOUT](state, {} ) {
        return { ...state, isLoggedIn: false }
    },
    [types.LOGIN](state, {} ) {
        return { ...state, isLoggedIn: true, loginMessage: null }
    },
    [types.SET_LOGIN_MESSAGE](state, { loginMessage } ) {
        return { ...state, loginMessage }
    },
    [types.RESET](state, { } ) {
        return { ...initialAppState };
    },
    [types.SET_PASSWORD_AND_LOGIN](state, { } ) {
        return { isLoggedIn: true, isPasswordSet: true, loginMessage: null }
    },
})
