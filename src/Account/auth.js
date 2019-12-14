import { TOKEN_ENDPOINT, REFRESH_TOKEN, CURRENT_USER_ENDPOINT } from "../constants/endpoints";
import {AsyncStorage} from "react-native";


export function lookupOptionsGETWithToken(token) {
    return {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },

    }
}


export const lookupPublicOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },

};

export function lookupPOSToptionsWithToken(data, token) {
    return{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
    }
}

export function lookupOptionsPOSTResfreshToken(data) {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(data)

    }
}

export function lookupPOSTOptions(data){
    const lookupOption = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      };
    return lookupOption

}


export async function requestToken(data){

    return fetch(TOKEN_ENDPOINT, lookupPOSTOptions(data))
        .then((response)=> response.json())
        .then(async (responseData)=>{
            await AsyncStorage.setItem('access_token', responseData.access);
            await AsyncStorage.setItem('refresh_token', responseData.refresh);
            await AsyncStorage.setItem('isLogged', 'true');
            return true
        })
        .catch(async (error)=>{
            console.log('error', error)
            await AsyncStorage.setItem('isLogged', false);
            return false
        })
}

export async function requestRefreshToken(refresh_token){
    return fetch(REFRESH_TOKEN)
        .then((response)=>response.json())
        .then((responseData)=>{
            return{
                loggedIn: true,
                access_token: responseData.access
            }
        })
        .catch((error)=>{
            console.error(error);
            return {
                loggedIn: false,
                access_token: '',
                login_token: ''
            }
        })
}


export function refreshToken(data){
    console.log('will refresh token');
    fetch(REFRESH_TOKEN, lookupOptionsPOSTResfreshToken(data))
        .then(resp=> resp.json())
        .then(async (respData)=>{
            console.log('check if refresh token is valid', respData);
            if (respData.code){
                await AsyncStorage.setItem('access_token', false);
                await AsyncStorage.setItem('refresh_token', false);
                await AsyncStorage.setItem('datetimeLogged', false);
                await AsyncStorage.setItem('isLogged', false);
                return {
                    isLogged: false,
                    token: false,
                    datetimeLogged: false
                }
            } else {
                await AsyncStorage.setItem('access_token', respData.access);
                await AsyncStorage.setItem('datetimeLogged', new Date());
                await AsyncStorage.setItem('isLogged', 'true');
                return {
                    isLogged: true,
                    token: respData.access,
                    datetimeLogged: new Date()
                }
            }
        });


}

// if is logged, check if token is still valid;
/*
fetch(CURRENT_USER_ENDPOINT, lookupOptionsGETWithToken(access_token))
    .then(async (resp)=>{
        // if fails
        console.log('auth status', resp.status);
        if (resp.status !== 200) {
            const answer = refreshToken(refreshToken());
            return answer
        } else {
            resp.json();
        }})
    .then(respData_ => {
        console.log('fetch data', respData_, )
    })
    */

export async function authStatus(){
    // returns [isLogged, access_token, datetimeLogged]
    console.log('start Process');
    const access_token = await AsyncStorage.getItem('access_token');
    const refresh_token = await AsyncStorage.getItem('refresh_token');
    const isLogged = await AsyncStorage.getItem('isLogged');
    const datetimeLogged = await AsyncStorage.getItem('datetimeLogged');

    // check if is logged
    if (isLogged) {
        console.log('user is logged');
        fetch(CURRENT_USER_ENDPOINT, lookupOptionsGETWithToken(access_token))
            .then(resp => resp.json())
            .then(async (respData) => {
                console.log('check if token is valid', access_token, respData);
                if (respData.code){
                    const data = {'refresh': refresh_token};
                    return refreshToken(data)
                } else {
                    return {
                        isLogged: true,
                        access_token: true,
                        datetimeLogged: datetimeLogged
                    }
                }
            })
            .catch(error => {
                console.log('error on token auth', error)
            })
    } else {
        return {
            isLogged: false,
            access_token: false,
            datetimeLogged: false
        }
    }
}

export async function checkLoginAndRefreshToken() {
    const access_token = await AsyncStorage.getItem('access_token', '')
    const refresh_token = await AsyncStorage.getItem('refresh_token', '')
    const loggedIn = await AsyncStorage.getItem('loggedIn', false)
    if (loggedIn) {
        fetch(CURRENT_USER_ENDPOINT, lookupOptionsGETWithToken(access_token))
            .then(resp=>{
                    if (resp.status === 401) {
                        fetch(REFRESH_TOKEN, lookupOptionsPOSTResfreshToken(refresh_token))
                        .then(resp=>resp.json())
                        .then(async(respData)=> {
                            if (respData.status === 401) {
                                await AsyncStorage.setItem('loggedIn', false)
                                return false
                            } else {
                                const new_token = respData.access;
                                await AsyncStorage.setItem('access_token', new_token)
                                await AsyncStorage.setItem('loggedIn', true)
                                return true
                            }
                        })
                    }
                    resp.json()}
                )
            .then(async(respData)=>{
                if (respData.status == 401) {

                } else {
                    await AsyncStorage.setItem('loggedIn', true)
                    return true
                }
            })

    } else {
        return false
    }

}
