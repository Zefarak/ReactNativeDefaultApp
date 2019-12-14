import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import {Input} from 'react-native-elements';
import MyButton from '../components/Button';

import {requestToken} from '../Account/auth';


class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsername = text => {
        this.setState({
            username: text
        })
    };

    handlePassword = text => {
        this.setState({
            password: text
        })
    };

    handleLogin = async () => {
        const data = this.state;
        const loginOptions = requestToken(data);
        if(loginOptions){
            this.props.navigation.push('Account', {isLogged: true})
        } else {
            alert('Wrong Password')
        }
    };


    render() {
            return(
                <View style={styles.screen}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>
                            Type your username and password
                        </Text>
                        <Input
                            placeholder='Username'
                            onChangeText={this.handleUsername}

                        />
                        <Input
                            placeholder='Password'
                            onChangeText={this.handlePassword}
                            secureTextEntry={true}
                            password={true}
                        />
                        <MyButton style={styles.shadowButton} onPress={this.handleLogin}>
                            <Text center caption gray>Login</Text>
                        </MyButton>

                    </ScrollView>
                </View>
            )
            }
        }

const styles = StyleSheet.create({
    screen:  {
        height: '100%',
        marginTop: '10%',
        alignItems: 'center'
    },
    inputStyle: {
        backgroundColor: 'grey',
        width: '100%'
    },
    wrapper: {
       height: '100%'
    },
    scrollView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1,
    },

    notificationWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    shadowButton: {
        width: '80%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        alignItems: 'center',
        elevation: 24,
    }
});

export default LoginScreen;
