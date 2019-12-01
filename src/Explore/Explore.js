import React, {useState} from "react";
import {Text, View, StyleSheet, Image, FlatList, Button} from "react-native";
import MyHeader from "../components/General/Header";
import {lookupPublicOptions} from "../Account/auth";
import {EXERCISE_CATEGORIES_ENDPOINT} from "../constants/endpoints";
import MyCard from "../components/General/Card";



class ExploreScreen extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            refresh: false,
            categories: {}
        }
    }

    loadCategories(){
        const thisComp = this;
        console.log(EXERCISE_CATEGORIES_ENDPOINT);
        fetch(EXERCISE_CATEGORIES_ENDPOINT, lookupPublicOptions)
            .then(resp=>resp.json())
            .then(respData=>{
                const categories = respData;
                thisComp.setState({
                    categories: respData,
                })
            })
            .catch(error=>{
                alert('Did you check you internet connection?')
            })
    }

    loadNew = () => {
        this.setState({refresh:true})
    };

    componentDidMount() {
        this.loadCategories();
    }

    render() {
        return(
            <View style={styles.screen}>
                <MyHeader title='Explore Screen' myStyle={styles.headerStyle} />
                <View>
                    <Text> Workout Categories </Text>
                    <View style={styles.testStyle}>
                        <MyCard title='Works!' style={styles.cardStyle} />
                        <MyCard title='Works!' style={styles.cardStyle} />
                        <MyCard title='Works!' style={styles.cardStyle} />
                        <MyCard title='Works!' style={styles.cardStyle} />
                    </View>
                </View>

            </View>
        );
    }
}



const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#eaeddf',
        flex: 1,

    },
    headerStyle: {
        backgroundColor: 'white',
    },
    flatListStyle: {
        flex:1,
        backgroundColor: "#eee"
    },
    testStyle:{
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    cardStyle: {
        width: '30%',
        margin: '1%',
    }
})


export default ExploreScreen;
