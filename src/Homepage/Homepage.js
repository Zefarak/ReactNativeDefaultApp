import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import {SectionItem} from './components/SectionItem'
import MyHeader from '../components/General/Header'
import { lookupPublicOptions, checkLoginAndRefreshToken } from '../Account/auth';
import {WORKOUTS_ENDPOINT} from '../constants/endpoints'
import { FlatList } from 'react-native-gesture-handler';


class HomepageScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            workouts:[],
            doneLoadingWorkouts: false
        }
    }

    loadWorkOut(){
        const thisComp = this;
        fetch(WORKOUTS_ENDPOINT, lookupPublicOptions)
        .then(resp=>resp.json())
        .then(respData=>{
            if (respData.results !== undefined) {
                thisComp.setState({
                    workouts: respData.results,
                    doneLoadingWorkouts: true
                })
            } else {
                thisComp.setState({
                    workouts: respData,
                    doneLoadingWorkouts: true
                })
            }
            
        })
        .catch(error=> {
            alert('Check you internet provider you motherfucker')})
    }

    handlePress = (id) => {
        this.props.navigation.navigate('HomeDetail', {id:id})
    }

    updateTokens(){
        const logged = checkLoginAndRefreshToken();
        
    }

    componentDidMount(){
        this.loadWorkOut()
        this.updateTokens()
    }
    
    render() {
        const {doneLoadingWorkouts, workouts} = this.state;
        return (
            <View style={styles.homepage}>
            <MyHeader title='Latest Workouts' />
            <SafeAreaView style={styles.container}>
                {doneLoadingWorkouts ?
                    <ScrollView nestedScrollEnabled={true}>
                        <FlatList
                            data={workouts}
                            renderItem={({ item }) => <SectionItem item={item} handlePress={this.handlePress} />}
                            keyExtractor={item => item.id}
                        />
                    </ScrollView>
                    :
                    <ActivityIndicator size="large" color="#0000ff" />
                }
            </SafeAreaView>
        </View>
        )
    }
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
