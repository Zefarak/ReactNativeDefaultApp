import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, ListItem} from 'react-native-elements';
import { WORKOUTS_ENDPOINT, WORKOUT_DETAIL_ENDPOINT, WORKOUT_PARTS_LIST_ENDPOINT } from '../constants/endpoints';
import { lookupPublicOptions } from '../Account/auth';

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
    
  ]


class WorkoutDetailScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            workout: null,
            doneLoading: false,
            parts:[],
            doneLoadingParts: false
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
            console.log('error', error)
            alert('Something is Wrong, Nio')
        })
    }

    loadWorkoutParts(id){
        const thisComp = this;
        const endpoint = WORKOUT_PARTS_LIST_ENDPOINT + '?workout_related='+ id;
        fetch(endpoint, lookupPublicOptions)
        .then(resp=>resp.json())
        .then(respData=>{
            thisComp.setState({
                parts: respData,
                doneLoadingParts: true
            })
        })
        .catch(error=>{
            console.log('part error', error)
        })
    };

    componentDidMount(){
        const id = JSON.stringify(this.props.navigation.getParam('id', 1))
        console.log('id', id)
        this.loadWorkout(id)
    }

    render(){
        const {workout, parts, doneLoadingParts, doneLoading } = this.state;
        return (
            <View>
                {doneLoading ?
                    <Card title={workout.title}>
                        <Text>{workout.guide}</Text>
                        
                        <View
                            style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
                        >
                            <Text>{workout.tag_category}</Text>
                <Text>{workout.tag_user}</Text>
                        </View>
                        <View>
                            {
                                list.map((l, i) => (
                                <ListItem
                                    key={i}
                                    leftAvatar={{ source: { uri: l.avatar_url } }}
                                    title={l.name}
                                    subtitle={l.subtitle}
                                    bottomDivider
                                />
                                ))
                            }
                            </View>

                    </Card>   
            :
            <Text>Loading....</Text>
            }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
})

export default WorkoutDetailScreen;