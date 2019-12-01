import { TOKEN_ENDPOINT, REFRESH_TOKEN } from "../constants/endpoints";


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
        .then((responseData)=>{
            console.log('works', responseData)
            return {
                access_token: responseData.access,
                refresh_token: responseData.refresh,
                loggedIn: true
            }
        })
        .catch((error)=>{
            console.error(error)
            return {
                loggedIn: false
            }
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
            console.error(error)
            return {
                loggedIn: false,
                access_token: '',
                login_token: ''
            }
        })
}

