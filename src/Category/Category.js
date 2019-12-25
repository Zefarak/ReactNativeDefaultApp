import React from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {WORKOUTS_ENDPOINT} from "../constants/endpoints";
import {lookupPublicOptions} from "../Account/auth";
import Text from "react-native-web/dist/exports/Text";
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

    loadWorkouts(){
        const thisComp = this;
        const endpoint = WORKOUTS_ENDPOINT + '?category=';
        fetch(endpoint, lookupPublicOptions)
            .then(resp=>resp.json())
            .then(respData=>{
                thisComp.setState({
                    workouts: respData.result,
                    doneLoadingWorkouts:true
                })
            })
    }

    componentDidMount() {
        const { navigation } = this.props;
        const category_id = JSON.stringify(navigation.getParam('itemId', ''));
        const title = JSON.stringify(navigation.getParam('title', 'Problem'));
        this.setState({
            title: title,
            id: category_id
        });
        this.loadWorkouts(category_id);
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
