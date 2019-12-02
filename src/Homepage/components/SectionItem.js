import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';


export function SectionHeader({title}) {
    return (
        <Text>
            {title}
        </Text>
    );

};

export const SectionItem = props => {

    handlePress = () => {
        props.handlePress(props.item.id)
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.button} activeOpacity={0.5} >
            <Card title={props.item.title}>
                <View>
                    <Text>{props.item.details}</Text>
                </View>
            </Card>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    button: {
        
    },
});



