import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {Input} from "react-native-elements";
import MyHeader from '../../components/General/Header';

const NewPlan = props => {
    const [title, setTitle] = useState('');
    const [guide, setGuide] = useState('');

    handleTitle =(text) =>{
        setTitle(text)
    };

    handleGuide = (text) =>{
        setGuide(text)
    };

    handleSubmit = () =>{
        const data = {
            title: title,
            guide: guide

        };
        props.handleNewPlanSubmit(data)
    };

    handleShow = () => {
        props.handleShowNewPlan()
    }

    return (

        <View style={styles.screen}>
            <MyHeader title='Create new plan' />
            <Input
                placeholder='Enter a Title'
                onChangeText={this.handleTitle}
            />
            <Input
                placeholder='Enter a guide'
                onChangeText={this.handleGuide}
            />
            <Button title='Create new Plan' onPress={this.handleSubmit} />
            <View style={{flex:0.1}}/>
            <Button style={styles.closeButton} title='Close' color='red' onPress={this.handleShow} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        alignItems: 'center',
        padding: 10
    },
    closeButton: {
        width: '50%',
        marginTop: 30,
        padding: 10
    }
})


export default NewPlan;
