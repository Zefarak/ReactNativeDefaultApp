import React, {useState} from 'react';
import {Text, View, StyleSheet, SectionList, SafeAreaView, Button} from 'react-native';

import MyHeader from '../components/General/Header'
import {SectionItem, SectionHeader} from "./components/SectionItem";
import { lookupPublicOptions } from '../Account/auth';


const DATA = [
    {
        title: 'Lastest Workouts',
        data: [
            {
                id: 1,
                title: 'AMRAP: PushUps, Burpees',
                details: 'Do as many pushups every 30 sec for 10 min, after that 2 min rest and do the same with burpees.',
                exercises: ['PushUps', 'Burpies']
        },
            {
                id:2,
                title: 'DeadLift',
                details: 'Do as many pushups every 30 sec for 10 min, after that 2 min rest and do the same with burpees.',
                exercises: ['Deadlift', 'Row']
            }]
    },
    {
        title: 'Favorite Workouts',
        data: [
            {
                id: 1,
                title: 'AMRAP: PushUps, Burpees',
                details: 'Do as many pushups every 30 sec for 10 min, after that 2 min rest and do the same with burpees.',
                exercises: ['PushUps', 'Burpies']
            },
            {
                id:2,
                title: 'DeadLift',
                details: 'Do as many pushups every 30 sec for 10 min, after that 2 min rest and do the same with burpees.',
                exercises: ['Deadlift', 'Row']
            }]
    },

];

const HomepageScreen = props => {
    const [workouts, setWorkout] = useState('');
    const [workoutsLoading, setWorkoutLoading] = useState(false)

    loadWorkOut = () => {
        fetch(WORKOUTS_ENDPOINT, lookupPublicOptions)
        .then(resp=>resp.json())
        .then(respData=>{
            setWorkout(respData);
            setWorkoutLoading(true)
        })
        .catch(error=> alert('Check you internet provider you motherfucker'))
    };

    handlePress = (id) => {
        console.log(id)
    };

    return (
        <View style={styles.homepage}>
            <MyHeader title='Homepage' />
            <Button title='Test Button' onPress={()=>{props.navigation.navigate('WorkoutDetail',{
                                                                    itemId: 86,
                                                                    title: 'anything you want here',
                                                                    }
                                                                    )
                                                        }}
             />
            <SafeAreaView style={styles.container}>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <SectionItem item={item} handlePress={handlePress}  />}
                    renderSectionHeader={({ section: { title } }) => (
                        <SectionHeader title={title}  />
                    )}
                />
            </SafeAreaView>
        </View>
    )
}



const styles = StyleSheet.create({
    homepage:{

    },
    container: {
        marginTop: 15,
        marginHorizontal: 16,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    header: {
        fontSize: 32,
    },
    title: {
        fontSize: 24,
    },
});

export default HomepageScreen;
