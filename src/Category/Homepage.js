import React from "react";
import {Text, View, Button, StyleSheet, TouchableHighlight, Dimensions} from "react-native";
import MyHeader from "../components/General/Header";

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
        console.log(id)
    }

    render() {
        return(
            <View>
                <MyHeader title='Categories' />
                <View style={styles.screen}>
                    <TouchableHighlight style={styles.box} >
                        <Text>AMRAP</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.box} >
                        <Text>Rounds</Text>
                    </TouchableHighlight>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        marginHorizontal: 10,
        alignItems: 'center'
    }
});


export default CategoryHomepageScreen;
