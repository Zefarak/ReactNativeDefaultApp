import React from 'React';
import {createStackNavigator} from 'react-navigation-stack';


import CategoryHomepageScren from './Homepage';
import CategoryDetailScreen from './Category';


const CategoryNavigation = createStackNavigator({
    Category: {
        screen: CategoryHomepageScren
    },
    CategoryDetail: {
        screen: CategoryDetailScreen
    }
});


export default CategoryNavigation;


