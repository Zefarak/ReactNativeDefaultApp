import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';



const MyCard = props => {

    return (
        <Card>
            <View style={{...styles.cardStyle, ...props.style}}>
                <Text style={{width: '100%'}}>{props.title}</Text>
            </View>
        </Card>
    )
};

export default MyCard


const styles = StyleSheet.create({
    cardStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',

    }
})
