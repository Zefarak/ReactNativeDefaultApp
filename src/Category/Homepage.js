import React from "react";
import {Text, View, Button} from "react-native";


class CategoryHomepageScreen extends React.Component {

    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> This is my Category Homescreen </Text>
                <Button onPress={fetchData} title='Fetch'/>
            </View>
        );
    }
}



export default CategoryHomepageScreen;
