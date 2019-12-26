import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Button, TouchableOpacity, AsyncStorage} from 'react-native';
import {ListItem} from "react-native-elements";
import { PLAN_LIST_ENDPOINT } from '../constants/endpoints';
import {lookupOptionsGETWithToken, checkLoginAndRefreshToken, refreshToken, lookupPOSToptionsWithToken} from './auth';
import MyHeader from "../components/General/Header";
import MyButton from "../components/Button";
import NewPlan from "./components/NewPlan";



class ProfileScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            my_workouts: [],
            showNewPlan: false,
            plans: [],
            doneLoadingPlans: false
        }
    }

    loadPlans(token){
        const thisComp = this;
        const endpoint = PLAN_LIST_ENDPOINT + '?active=true';
        console.log('start download the plans')
        fetch(endpoint, lookupOptionsGETWithToken(token))
            .then(resp=>resp.json())
            .then(async (respData)=>{
                console.log('so the plans is ', respData);
                if (respData.code){
                    const refresh_token = await AsyncStorage.getItem('refresh_token');
                    console.log('get the refresh_token', refresh_token);
                    const data = {'refresh': refresh_token};
                    const fetchData = await refreshToken(data);
                    console.log('new token', fetchData)
                } else {
                    thisComp.setState({
                        plans: respData.results,
                        doneLoadingPlans: true

                    })
                }

            })
    }

    handleShowNewPlan = () =>{
        this.setState({
            showNewPlan: !this.state.showNewPlan
        })
    };

    handleNewPlanSubmit = async (data) => {
        const token  = await AsyncStorage.getItem('access_token')
        fetch(PLAN_LIST_ENDPOINT, lookupPOSToptionsWithToken(data, token))
            .then(resp=> resp.json())
            .then(respData => {
                if (respData.code){
                    
                }
                console.log('post data', respData)
            })
    };

    componentDidMount() {
        this.loadPlans(this.props.token);
    }

    render() {
        const {plans, doneLoadingPlans, showNewPlan} = this.state;
        return (
            <View style={styles.screen}>
                <MyHeader title='Plans'/>
                <View>
                    {doneLoadingPlans ?
                        plans.map((plan, index)=>(
                            <ListItem
                                key={index}
                                title={plan.title}
                                bottomDivider
                                chevron
                            />
                        ))
                        :<ActivityIndicator />}
                        {showNewPlan ?
                            <NewPlan
                                handleShowNewPlan={this.handleShowNewPlan}
                                handleNewPlanSubmit={this.handleNewPlanSubmit}
                            />
                            :<Button title='Add new Plan' onPress={this.handleShowNewPlan} />
                        }
                </View>
                <View>
                    <MyButton title='Add new Plan' onPress={()=>{console.log('hit me!')}} />
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    screen: {

    },
});

export default ProfileScreen;
