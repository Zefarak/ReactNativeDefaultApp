import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';


class NewWorkoutsScreen extends React.Component {


    render () {
        const users = [{name: 'chris'}, {name:'Nick'}];
        return (
            <Card title="Lastest Workouts">
                {
                    users.map((u, i) => {
                        return (
                            <View key={i} style={styles.screen}>
                                <Text style={styles.name}>{u.name}</Text>
                            </View>
                        );
                    })
                }
            </Card>

        )
    }
}



const styles = StyleSheet.create({
    screen : {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    user: {

    },
    name: {

    }
});

export default NewWorkoutsScreen;
