import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';


import HomepageScreen from './Homepage';
import WorkoutDetailScreen from './WorkoutDetailScreen';



const HomepageNavigation = createStackNavigator({
    Homepage: {
        screen: HomepageScreen,
        headerTitle: 'Homepage'
    },
    HomeDetail: {
        screen: WorkoutDetailScreen
    }
})


export default HomepageNavigation