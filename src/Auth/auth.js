import {AsyncStorage} from "react-native";

export const isLogged = 'isLogged';


export const onSignIn = (access_token, refresh_token) => {
    AsyncStorage.setItem('access_token', access_token);
    AsyncStorage.setItem('refresg_token', refresh_token);
    AsyncStorage.setItem(isLogged, "true");
};


export const onSignOut = () => {
    AsyncStorage.removeItem('access_token');
    AsyncStorage.removeItem('refresg_token');
    AsyncStorage.removeItem(isLogged );
};


export const isSignedIn = () => {
    return new Promise((resolve, regect)=>{
        AsyncStorage.getItem(isLogged).then(
            resp=> {
                if (resp !==null){
                    resolve(true)
                } else {
                    resolve(false)
                }
            }
        ).catch(err=>reject(err))
    })
};
