import React from 'react';
import {ActivityIndicator, ScrollView, View, Text} from 'react-native';
import {WORKOUTS_ENDPOINT} from "../constants/endpoints";
import {lookupPublicOptions} from "../Account/auth"; 
import {FlatList} from "react-native-gesture-handler";
import {SectionItem} from "../Homepage/components/SectionItem";



class CategoryDetailScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            category_id: '',
            workouts: [],
            next: null,
            previous: null,
            doneLoadingWorkouts: false
        }
    }

    loadWorkouts(category_id){
        const thisComp = this;
        const endpoint = WORKOUTS_ENDPOINT + '?category='+ category_id.replace(/"/g, '');
        console.log('endpoit-->', endpoint)
        fetch(endpoint, lookupPublicOptions)
            .then(resp=>resp.json())
            .then(respData=>{
                console.log(respData)
                thisComp.setState({
                    workouts: respData.results,
                    doneLoadingWorkouts:true
                })
            })
    }

    componentDidMount() {
        const { navigation } = this.props;
        const category_id = JSON.stringify(navigation.getParam('itemID', ''));
        const title = JSON.stringify(navigation.getParam('title', 'Problem'));
        this.setState({
            title: title,
            id: category_id
        });
        this.loadWorkouts(category_id);
    }

    handlePress = (id) => {
        console.log('hitted' ,handlePress)
    }

    render() {
        const {workouts, doneLoadingWorkouts} = this.state;
        return (
            <View>
                <Text>works mother fucker</Text>
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
            </View>
        )
    }
}

export default CategoryDetailScreen;
