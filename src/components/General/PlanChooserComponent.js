import React from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';
import {lookupOptionsGETWithToken} from '../../Account/auth';
import {
    PLAN_LIST_ENDPOINT
} from '../../constants/endpoints';

class PlanChooserComponent extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            plans: [],
            doneLoadingPlans: false,
        }
    }

    loadPlans = (token) => {
        const thisComp = this;
        const endpoint = PLAN_LIST_ENDPOINT + '?active=true';
        fetch(endpoint, lookupOptionsGETWithToken(token))
            .then(resp=>resp.json())
            .then(respData=>{
                console.log(respData);
                if(respData.code !== undefined) {
                    thisComp.setState({
                        doneLoadingPlans: false
                    })
                } else {
                    this.setState({
                        plans: respData.result,
                        doneLoadingPlans: true
                    })
                }
            })
    };

     componentDidMount (){
        const token =  AsyncStorage.getItem('access_token');
        this.loadPlans(token);
    }

    render() {
        const {doneLoadingPlan, plans} = this.state
        return(
            <View>
                <Text>Plans</Text>
                {doneLoadingPlan ?
                    <View>
                        {plans.map((plan, i)=>{
                            <Text>{plan.title}</Text>
                        })}
                    </View>
                : 
                    <View>
                        <Text>Loading</Text>
                    </View>
                }
            </View>
        )
    }
}


const styles = StyleSheet.create({
    screen: {
        marginTop:15
    }
})


export default PlanChooserComponent;