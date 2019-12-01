import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';


export function SectionHeader({title}) {
    return (
        <Text>
            {title}
        </Text>
    )

}


export function SectionItem({ title }) {
    return (
        <Card title={title.title}>
            <View>
                <Text>{title.details}</Text>
            </View>
        </Card>

    );
}





