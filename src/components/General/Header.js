import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Header} from 'react-native-elements'

const MyHeader = props => {
    return (
        <View style={styles.headerContainer}>
            <Header
                leftComponent={
                    <Button
                        icon={{name:'arrow-back'}}
                        buttonStyle={{
                            backgroundColor: null,
                            padding: 0
                        }}
                        title=''
                        color= 'white'
                        onPress={()=>{}}
                    />
                }
                centerComponent={
                    <Text>
                        {props.title}
                    </Text>
                }
                rightComponent={
                    <Button
                        icon={{name: 'home'}}
                        buttonStyle={{
                            backgroundColor: null,
                            padding: 0,
                        }}
                        title=''
                        color='white'
                        onPress={()=>{}}
                    />
                }
            >

            </Header>
        </View>
    )
};


const styles = StyleSheet.create({
    headerContainer: {

    },


    header: {
        flex: 1,
        marginTop: 40,
        height: 50,
        alignItems: 'center',
        backgroundColor: '#348feb',
        fontSize: 100,
        fontWeight: "200"
    }
});

export default MyHeader;


