import React, { useState } from "react";
import { View, ScrollView, StyleSheet, KeyboardAvoidingView, Text, Button, AsyncStorage } from "react-native";
import {colors} from "../../src/constants/styles";
import MyHeader from "../components/General/Header";
import InputField from "../components/General/InputField";
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
        console.log(data.username, data.password);
        const loginOptions = requestToken(data);
        alert('You Logged in');
        this.props.navigation.navigate('HomeScreen')

    };


    render() {

        return (
            <KeyboardAvoidingView style={[{ backgroundColor: 'teal' }, styles.wrapper]} behavior='padding'>
                <MyHeader title='Login'/>
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>
                            Type your username and password
                        </Text>
                        <InputField
                            labelText="EMAIL ADDRESS"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="email"
                            customStyle={{marginBottom:30}}
                            handleInput={this.handleUsername}
                        />
                        <InputField
                            labelText="PASSWORD"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="password"
                            customStyle={{marginBottom:30}}
                            handleInput={this.handlePassword}

                        />
                        <Button
                            title='Login'
                            onPress={this.handleLogin}
                        />
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        )
    }


}

const styles = StyleSheet.create({
    wrapper: {
       height: '100%'
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1,
        padding: 0,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    scrollView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1,
    },
    loginHeader: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,
    },
    notificationWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default LoginScreen;
