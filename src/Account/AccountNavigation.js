import React from 'React';
import {createStackNavigator} from 'react-navigation-stack';


import UserScreen from './UserScreen';
import RegisterOrLoginScreen from "./RegisterOrLoginScreen";
import RegisterScreen from "./Register";
import {Image} from "react-native";
import LoginScreen from './Login';


const AccountNavigation = createStackNavigator({
    Account: {
        screen: UserScreen
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerTitle: 'Login',
        }
    },
    Register: {
        screen: RegisterScreen,
        navigationOptions: {
            headerTitle: 'Register',
            headerBackTitle: null,
            headerStyle: {
                height: 800,
                backgroundColor: 'white',
                borderBottomColor: "transparent",
                elevation:0
            },
            headerBackImage: <Image source={require('../../assets/my_images/login_image.jpg')} />,
            headerLeftContainerStyle: {
                alignItems: 'center',
                marginLeft: 200,
                paddingRight: 200
            },
            headerRightContainerStyle: {
                alignItems: 'center',
                paddingRight: 200
            }


        }
    }
});


export default AccountNavigation;
