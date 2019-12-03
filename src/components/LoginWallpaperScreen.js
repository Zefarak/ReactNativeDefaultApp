import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';


const LoginWallparerScreen = props => {

    return (
        <View style={styles.screen}>
            <Text>Lofin fgfdggh</Text>
            <Button 
                title='Login Pls'
                onPress={props.handleButton}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:  {
        height: '100%',
        marginTop: 170,
        padding: 0,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'red'

     },

}
)

export default LoginWallparerScreen;