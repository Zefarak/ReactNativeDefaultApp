import React, {useState} from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Button, Text} from 'react-native';
import MyButton from '../components/Button'

import Block from '../components/Block';
import MyInput from '../components/Input';

import InputField from "../components/General/InputField";
import * as theme from '../components/themes';

import {REGISTER_ENDPOINT, TOKEN_ENDPOINT} from "../constants/endpoints";
import {lookupPOSTOptions, requestToken} from "./auth";


class RegisterScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: ''
        }
    }

    handleUsername = (text) => {
        this.setState({
            username: text
        }
       )
    };

    handleEmail = (text) => {
        this.setState({
            email: text
        })
    };

    handlePassword = (text) => [
        this.setState({
            password: text
        })
    ];

    handleRegister = () => {
        const data = this.state;
        fetch(REGISTER_ENDPOINT, lookupPOSTOptions(data))
            .then(resp=>resp.json())
            .then(respData=>{
                const token_progress = requestToken(data);
                if (token_progress){
                    this.props.navigation.navigate('Account')
                }
            }).catch((error) => {
                console.log(error)
            }

           )
    };



    render(){
        return (
            <Block padding={[0, theme.sizes.base * 2]}>
                <Text>Login</Text>
                <Block middle>
                    <MyInput
                        label="Email"
                        style = {styles.input}
                        defaultValue={this.state.email}
                        onChangeText={text => this.setState({email : text})}
                    />
                    <MyInput
                        secure
                        label="Password"
                        style = {styles.input}
                        defaultValue={this.state.password}
                        onChangeText={text => this.setState({password : text})}
                    />
                </Block>
            </Block>
            );
        }

}


const styles = StyleSheet.create({
    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

})



export default RegisterScreen;
