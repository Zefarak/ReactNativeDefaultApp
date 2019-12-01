import React, {useState} from 'react';
import {View, Stylesheet, KeyboardAvoidingView, Button} from 'react-native';


const RegisterScreen = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password2, setPassword2] = useState('')

    handleUsername = text => {
        setUsername(text)
    }

    handlePassword = text => {
        setPassword(text);
    }

    handleEmail = text => {
        setEmail(text)
    }

    handlePassword2 = text => {
        setPassword2(text)
    }

    handleRegister = () => {
        console.log('worked!')
    }

    
    return (
        <KeyboardAvoidingView>
            <Text>works!</Text>
            <Button
                onPress={props.handleView}
                text='Login'
            />
        </KeyboardAvoidingView>
    )

}

export default RegisterScreen;