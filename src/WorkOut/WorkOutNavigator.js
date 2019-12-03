import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {Button, Text} from 'react-native'
import WorkOutScreen from './WourkOut';
import WorkOutDetailScreen from './WorkOutDetail';
import WorkoutCreateScreen from './WorkOutCreate';




const WorkOutNavigation = createStackNavigator({
    Workouts: {
        screen: WorkOutScreen,
        navigationOptions:({navigation}) => ({
            headerRight: ()=>(<Button title='Create' style={{backgroundColor: 'green', marginRight: '3%'}} onPress={()=>{navigation.navigate('WorkoutCreate')}} />),
            headerTitle: ()=>(<Text style={{alignItems: 'center', }}> Workouts</Text>)
        })
    },
    WorkoutDetail: {
        screen: WorkOutDetailScreen
    },
    WorkoutCreate: {
        screen: WorkoutCreateScreen,
        navigationOptions: {
            headerTitle: ()=>(<Text style={{alignItems: 'center', }}> Create a New Workout</Text>)
        }
    }
});

export default WorkOutNavigation;
