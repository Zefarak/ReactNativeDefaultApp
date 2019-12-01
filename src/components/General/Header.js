import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Header} from 'react-native-elements'


const MyHeader = props => {

    return (
        <View style={{...styles.headerContainer, ...props.myStyle}}>
            <Text>{props.title}</Text>
        </View>
    )
}




const styles = StyleSheet.create({
    headerContainer: {
        height: 70,
        paddingTop:30,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderBottomWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default MyHeader;


