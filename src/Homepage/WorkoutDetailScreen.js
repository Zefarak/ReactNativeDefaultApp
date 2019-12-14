import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, AsyncStorage} from 'react-native';
import {Card, ListItem, Overlay} from 'react-native-elements';
import {
    WORKOUTS_ENDPOINT,
    WORKOUT_DETAIL_ENDPOINT,
    WORKOUT_PARTS_LIST_ENDPOINT,
    PLAN_LIST_ENDPOINT
} from '../constants/endpoints';
import {lookupOptionsGETWithToken, lookupPublicOptions, requestToken, checkLoginAndRefreshToken} from '../Account/auth';
import MyButton from "../components/Button";
import PlanChooserComponent from '../components/General/PlanChooserComponent';
import IsLoggedComponent from './components/IsLoggedComponent';


class WorkoutDetailScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            workout: null,
            doneLoading: false,
            parts:[],
            doneLoadingParts: false,
            exercises:[],

            isVisible: false,
            overlay_data:{},

            isLogged: false,
            showPlans:false,
            plans: [],
            doneLoadingPlans: false

        }
    }

    loadWorkout(id){
        const thisComp = this;
        const endpoint = WORKOUT_DETAIL_ENDPOINT + id + '/';
        fetch(endpoint, lookupPublicOptions)
        .then(resp=>resp.json())
        .then(respData=> {
            thisComp.setState({
                workout: respData,
                doneLoading: true
            })
        })
        .catch(error=>{
            console.log('error', error);
        })
    }

    handleOverlay = (exercise) =>{
        this.setState({
            isVisible: true,
            overlay_data:exercise
        })
    };

    handlePlans = () => {
        this.setState({
            showPlans: true
        })
    };

    componentDidMount(){
        const id = JSON.stringify(this.props.navigation.getParam('id', 1));
        this.loadWorkout(id)
        AsyncStorage.getItem('isLogged').then(
            value=>{
                this.setState({
                    isLogged:value
                })
            }
        ).done()
    }

    render(){
        const {workout, doneLoading, overlay_data, isLogged } = this.state;
        console.log('logged', isLogged)
        return (
            <View style={styles.screen}>
                {doneLoading ?
                    <Card title={workout.title}>
                        <Text>{workout.guide}</Text>

                        <View style={styles.secondInfo}>
                            <Text>{workout.tag_category}</Text>
                            <Text>By {workout.tag_user}</Text>
                        </View>
                        <View>
                            {
                                workout.tag_parts.map((l, i) => (
                                <ListItem
                                    key={i}
                                    title={l.exercise_related__title}
                                    subtitle={l.guide}
                                    onPress={()=> {this.handleOverlay(l)}}
                                    bottomDivider
                                />
                                ))
                            }
                        </View>
                        {isLogged ?
                                <PlanChooserComponent isLogged={this.state.isLogged} />
                            :
                                <IsLoggedComponent isLogged={isLogged} navigation={this.props.navigation} handlePlans={this.handlePlans} />
                        }
                    </Card>
            :
            <Text>Loading....</Text>
            }

            <Overlay
                isVisible={this.state.isVisible}
                onBackdropPress={() => this.setState({ isVisible: false })}
                >
                <Text>{overlay_data.exercise_related__title}</Text>
            </Overlay>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex:1,

    },
    secondInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,

    }
});

export default WorkoutDetailScreen;
