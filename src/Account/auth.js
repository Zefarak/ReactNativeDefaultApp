import { TOKEN_ENDPOINT, REFRESH_TOKEN, CURRENT_USER_ENDPOINT } from "../constants/endpoints";
import {AsyncStorage} from "react-native";


export function lookupOptionsGETWithToken(token) {
    return {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + token
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

export function lookupOptionsPOSTResfreshToken(token) {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + token
        },

    }
}

export function lookupPOSTOptions(data){
    const lookupOption = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }
    return lookupOption

}


export async function requestToken(data){

    return fetch(TOKEN_ENDPOINT, lookupPOSTOptions(data))
        .then((response)=> response.json())
        .then(async (responseData)=>{
            await AsyncStorage.setItem('access_token', responseData.access);
            await AsyncStorage.setItem('refresh_token', responseData.refresh);
            await AsyncStorage.setItem('loggedIn', true);
            return true
        })
        .catch(async (error)=>{
            await AsyncStorage.setItem('loggedIn', false)
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

export async function checkLoginAndRefreshToken() {
    const access_token = await AsyncStorage.getItem('access_token', '')
    const refresh_token = await AsyncStorage.getItem('refresh_token', '')
    const loggedIn = await AsyncStorage.getItem('loggedIn', false)
    if (loggedIn) {
        fetch(CURRENT_USER_ENDPOINT, lookupOptionsGETWithToken(access_token))
            .then(resp=>resp.json())
            .then(async(respData)=>{
                if (respData.status == 401) {
                    fetch(REFRESH_TOKEN, lookupOptionsPOSTResfreshToken(refresh_token))
                        .then(resp=>resp.json())
                        .then(async(respData)=> {
                            if (respData.status === 401) {
                                await AsyncStorage.setItem('loggedIn', false)
                            } else {
                                const new_token = respData.access;
                                await AsyncStorage.setItem('access_token', new_token)
                                return false
                            }
                        })
                } else {
                    return true
                }
            })

    } else {
        return false
    }

}
