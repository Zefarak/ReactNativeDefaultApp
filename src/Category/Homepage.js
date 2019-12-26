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

    handlePressButton = (id) => {
        this.props.navigation.navigate('CategoryDetail', {
            itemID: id,
            title: 'CATEGORIES[id]'
        })
    };
    
    render() {
        return(
            <View>
                <MyHeader title='Categories' />

                <View style={styles.screen}>
                    {CATEGORIES.map((cate, i)=>{
                        return (
                            <WorkOutComponent handlePressButton={this.handlePressButton} cate={cate} />
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
