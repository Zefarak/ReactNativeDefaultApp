import React from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';



class ProfileScreen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            my_workouts: []
        }
    }

 

    render() {

        return (
            <View style={styles.screen}>
                <View style={styles.feed}>
                    <Text>Works!</Text>
                </View>
                <View style={{ justifyContent: 'space-between', 
                               alignItems: 'center', 
                               flexDirection: 'row' 
                            }}>
                                
                            </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    screen: {
        flex:1
    },
    feed: {
        height: 70,
        paddingTop: 'center',
        backgroundColor: 'white',
        borderColor: 'lightgrey',
    }
})

export default ProfileScreen;