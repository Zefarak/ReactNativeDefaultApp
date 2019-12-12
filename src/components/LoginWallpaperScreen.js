import React from 'react';
import {View, StyleSheet, Text, Button, Image} from 'react-native';
import MyButton from './Button';
import MyHeader from "./General/Header";


class LoginWallpaperScreen extends React.Component{


    handleRegister = () => {
        this.props.navigation.navigate('Register');
    };

    handleLogin = () => {
        this.props.navigation.navigate('Login')
    };

    refreshPage = () => {
        this.props.refreshPage()
    }

    render(){

        return (
            <View style={styles.screen}>
                <MyHeader title='Login or Register' />
                <Image style={styles.image} source={require('../../assets/my_images/login_image.jpg')} />
                <Text>***</Text>
                <MyButton style={styles.shadowButton} onPress={this.handleLogin} refreshPage={this.refreshPage}>
                    <Text center caption gray>Login</Text>
                </MyButton>
                <MyButton style={styles.shadowButton} onPress={this.handleRegister} refreshPage={this.refreshPage}>
                    <Text center caption gray>Register</Text>
                </MyButton>
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
    container: {
      flex: 1,
      marginTop: '70%'
    },
    image: {
        marginBottom: '40%'
    },
    button: {
        width: '80%',
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

}
);

export default LoginWallpaperScreen;
