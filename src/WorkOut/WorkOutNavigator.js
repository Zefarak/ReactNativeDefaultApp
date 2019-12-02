import { createStackNavigator } from 'react-navigation-stack';
import WorkOutScreen from './WourkOut';
import WorkOutDetailScreen from './WorkOutDetail';
import WorkoutCreateScreen from './WorkOutCreate';



const WorkOutNavigation = createStackNavigator({
    Workouts: {
        screen: WorkOutScreen,
        navigationOptions: {
            headerRight: <Button title='Create' onPress={()=>{this.PaymentResponse.navigation.navigate('WorkoutCreate')}} />
        }
    },
    WorkoutDetail: {
        screen: WorkOutDetailScreen
    },
    WorkoutCreate: {
        screen: WorkoutCreateScreen
    }
})

export default WorkOutNavigation;