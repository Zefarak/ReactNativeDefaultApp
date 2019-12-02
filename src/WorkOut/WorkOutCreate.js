import React, {Component} from 'react';
import {View, StyleSheet, Text, Button, TextInput} from 'react-native';
import { EXERCISES_LIST_ENDPOINT } from '../constants/endpoints';
import { lookupPublicOptions } from '../Account/auth';
import { throws } from 'assert';



class WorkoutCreateScreen extends Component {
    constructor(props) {

        this.state = {
            exercises: '',
            loadExercises: false
        }
    }

    loadExercises() {
        const thisComp = this;

        fetch(EXERCISES_LIST_ENDPOINT, lookupPublicOptions)
        .then(resp=>resp.json())
        .then(repsData=>{
            thisComp.setState({
                exercises: repsData,
                loadExercises: true
            })
        })
    }

    componentDidMount() {
        throws.loadExercises();
    }

    render() {

        return (
            <View>
                <View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        
    }
})

export default WorkoutCreateScreen;