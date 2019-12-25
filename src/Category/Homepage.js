import React from "react";
import {Text, View, Button, StyleSheet, TouchableHighlight, Dimensions} from "react-native";
import MyHeader from "../components/General/Header";
import {WorkOutComponent} from "./Components/WorkOutComponent";

const CATEGORIES = [
    {
        title: 'AMRAP',
        id: 'a'
    },
    {
        title: 'Rounds',
        id: 'b'
    },
    {
        title: 'For Time',
        id: 'c'
    },
    {
        title: 'Tabata',
        id: 'd'
    },
];

class CategoryHomepageScreen extends React.Component {

    handlePressButton = (cate) => {
        console.log('clicked!')
        this.props.navigation.navigate('CategoryDetail', {
            itemID: cate.id,
            title: cate.title
        })
    };

    render() {
        return(
            <View>
                <MyHeader title='Categories' />

                <View style={styles.screen}>
                    {CATEGORIES.map((cate, i)=>{
                        return (
                            <WorkOutComponent handleClicl={this.handlePressButton} cate={cate} />
                        )
                    })}
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    box: {
        width: '40%',
        height: 100,
        backgroundColor: 'red',
        marginHorizontal: 10,
        alignItems: 'center'
    }
});


export default CategoryHomepageScreen;
