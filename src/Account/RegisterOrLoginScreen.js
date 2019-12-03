import React, {useState} from 'react';
import {View, Text} from 'react-native';
import LoginScreen from './Login';
import RegisterScreen from './Register';


const RegisterOrLoginScreen = props => {

    const [registerView, setRegisterView] =  useState(false)

    handleRegisterView = () => {
        const register = registerView
        setRegisterView(!register)
    }

    return (
        <View>
            {registerView ? 
                <RegisterScreen />
            :
                <LoginScreen />
            }
        </View>
    )
}