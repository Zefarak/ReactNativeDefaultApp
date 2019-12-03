import React from 'react';
import {View, StyleSheet, Text, TextInput, SafeAreaView, ScrollView, AsyncStorage} from 'react-native';
import {Input, CheckBox, Divider, SearchBar, Slider, Button} from "react-native-elements";
import {EXERCISES_LIST_ENDPOINT, WORKOUTS_CREATE} from '../constants/endpoints';
import {lookupPOSTOptions, lookupPOSToptionsWithToken, lookupPublicOptions} from '../Account/auth';


class WorkoutCreateScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: '',
            loadExercises: false,
            searchText: '',
            title: '',
            public: true,
            status: true,
            duration: 0,
            rounds: 0,
            category: null
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

    handleTitle = (text) => {
        this.setState({
            title: text
        })
    };

    handleStatus = () => {
        this.setState({
            status: !this.state.status
        })
    };

    handlePublic = (evt) => {
        this.setState({
            public: !this.state.public
        })
    };

    componentDidMount() {
        this.loadExercises();
    }

    handleSubmit = async () => {
        const data = this.state;
        const token = await AsyncStorage.getItem('access_token');
        console.log('access_token', token);
        fetch(WORKOUTS_CREATE, lookupPOSToptionsWithToken(data, token))
            .then(resp=>resp.json())
            .then(respData=> {
                console.log(respData)
            })

    };

    render() {

        return (
            <SafeAreaView style={styles.screen}>
                <ScrollView style={styles.cardStyle}>
                    <Text style={styles.header}> Στοιχεια</Text>
                    <TextInput
                        placeholder='Ονομασια...'
                        style={{backgroundColor: 'grey'}}
                        onChangeText={text=>this.handleTitle(text)}
                    />

                    <CheckBox
                        title='Status'
                        checked={this.state.status}
                        onPress={this.handleStatus}
                    />

                    <CheckBox
                        title='Δημοσιο'
                        checked={this.state.public}
                        onPress={this.handlePublic}
                    />
                    <Divider style={{ backgroundColor: 'blue' }} />

                    <Divider style={{ backgroundColor: 'blue' }} />
                    <Slider
                        value={this.state.value}
                        onValueChange={value => this.setState({ value })}
                    />
                    <Slider
                        value={this.state.value}
                        onValueChange={value => this.setState({ value })}
                    />

                    <Divider style={{ backgroundColor: 'blue' }} />
                    <CheckBox
                        center
                        title='Click Here'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.checked}
                    />

                    <SearchBar
                        placeholder="Type Here..."
                        onChangeText={()=>{}}
                        value={this.state.searchText}
                        lightTheme={true}
                    />

                    <Button
                        title="Button with icon object"
                        onPress={this.handleSubmit}
                    />

                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        alignItems: 'center',
        marginTop: 30,
    },
    header: {
        flex:1,
        fontSize: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    cardStyle: {
        marginHorizontal: 20,
    },
    inputStyle: {
        backgroundColor: 'grey',
        width: '100%'
    }
});

export default WorkoutCreateScreen;
