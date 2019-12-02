import React from 'react';
import {View, Text} from 'react-native';
import MyHeader from '../components/General/Header';




const WorkOutDetailScreen = props => {
    
    navigation = props.navigation;
    title = JSON.stringify(navigation.getParam('title', 'No data'))
    
    return (
        <View>
            <MyHeader title={title} />
        </View>
    )
}


export default WorkOutDetailScreen;