import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {Input} from "react-native-elements";


const NewPlan = props => {
    const [title, setTitle] = useState('');
    const [guide, setGuide] = useState('');

    handleTitle =(text) =>{
        setTitle(text)
    };

    handleGuide =(text) =>{
        setGuide(text)
    };

    handleSubmit =() =>{
        const data = {
            title: title,
            guide: guide

        };
        this.props.handleNewPlanSubmit(data)
    };

    handleShow = () => {
        this.props.handleShowNewPlan()
    }

    return (

        <View>
            <Input
                placeholder='Enter a Title'
                onChangeText={this.handleTitle}
            />
            <Input
                placeholder='Enter a guide'
                onChangeText={this.handleGuide}
            />
            <Button title='Create new Plan' onPress={this.handleSubmit} />
            <Button title='Close' color='red' onPress={this.handleShow} />
        </View>
    )
};


export default NewPlan;
