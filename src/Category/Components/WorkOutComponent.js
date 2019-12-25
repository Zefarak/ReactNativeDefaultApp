import React from 'React';
import {Text, TouchableHighlight, View, StyleSheet} from 'react-native';


export const WorkOutComponent = props => {

    handleClick = () => {
        const id = this.props.cate;
        this.props.handleButton(cate)
    }

    return (
        <TouchableHighlight style={styles.box} onPress={this.handlePressButton} >
            <Text>{cate.title}</Text>
        </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    box: {
        width: '40%',
        height: 100,
        backgroundColor: 'red',
        marginHorizontal: 10,
        alignItems: 'center'
    }
})
