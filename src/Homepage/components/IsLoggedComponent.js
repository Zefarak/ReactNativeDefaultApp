import React from 'react';
import {View, Text, Button} from 'react-native';


const IsLoggedComponent = (props) => {


    return (
        <View>
            {props.isLogged ?
                <Button title='Add to Plan' onPress={()=>{props.handlePlans()}} />
                :
                 <Button title="Login to add to plan" onPress={()=>{props.navigation.navigate('Login')}} />    
        }
        </View>
    )
}

export default IsLoggedComponent;