import React from 'react';
import {View} from 'react-native';
import * as Progress from 'react-native-progress';



const ProgressBar = props => {

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', }}>
            <Progress.Pie progress={0.2} size={50} color="#2245FF" />
        </View>
    )
};

export default ProgressBar;
