import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, AsyncStorage} from 'react-native';
import {Card, ListItem, Overlay} from 'react-native-elements';
import {
    WORKOUTS_ENDPOINT,
    WORKOUT_DETAIL_ENDPOINT,
    WORKOUT_PARTS_LIST_ENDPOINT,
    PLAN_LIST_ENDPOINT
} from '../constants/endpoints';
import {lookupOptionsGETWithToken, lookupPublicOptions} from '../Account/auth';
import MyButton from "../components/Button";

const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },

  ];


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

            login_message: false,
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
            alert('Something is Wrong, Nio')
        })
    }

    handleOverlay = (exercise) =>{
        this.setState({
            isVisible: true,
            overlay_data:exercise
        })
    };

    loadPlans = () => {
        const thisComp = this;
        const endpoint = PLAN_LIST_ENDPOINT + '?active=true';
        const token = AsyncStorage.getItem('access');
        fetch(endpoint, lookupOptionsGETWithToken(token))
            .then(resp=>resp.json())
            .then(respData=>{
                console.log(respData);
                if(respData.code !== undefined) {
                    console.log('here!');
                    thisComp.setState({
                        login_message:true,
                        doneLoadingPlan: true
                    })
                } else {
                    this.setState({
                        plans: respData.result,
                        doneLoadingPlan: true
                    })
                }
            })
    };

    componentDidMount(){
        const id = JSON.stringify(this.props.navigation.getParam('id', 1));
        this.loadWorkout(id)
    }

    render(){
        const {workout, doneLoading, overlay_data, doneloadingPlans, plans, login_message } = this.state;
        console.log(overlay_data);
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
                        <Button title='Add To Plan' onPress={this.loadPlans} />
                        {login_message?
                            <View>
                                {doneloadingPlans ?
                                    <Text>Data!</Text>
                                    :
                                    <MyButton title='Login'/>
                                }
                            </View>
                        :<View><Text>You need to login</Text></View>}
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
        marginBottom: 10
    }
})

export default WorkoutDetailScreen;
