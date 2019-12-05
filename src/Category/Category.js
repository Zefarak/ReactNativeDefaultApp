import React from 'react';
import {View} from 'react-native';
import {WORKOUTS_ENDPOINT} from "../constants/endpoints";
import {lookupPublicOptions} from "../Account/auth";



class CategoryDetailScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            workouts: [],
            workoutsDoneLoading: false
        }
    }

    loadWorkouts(){
        const thisComp = this;
        const url = WORKOUTS_ENDPOINT + '?';
        fetch(WORKOUTS_ENDPOINT, lookupPublicOptions)
            .then(resp=>resp.json())
            .then(respData=>{
                thisComp.setState({
                    workouts: respData,
                    workoutsDoneLoading:true
                })
            })
    }

    componentDidMount() {
        this.loadWorkouts();
    }

    render() {

    }
}
