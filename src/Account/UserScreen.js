import React from "react";
import {Text, View, AsyncStorage, Button} from "react-native";
import ActionCreators from '../../redux/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LoginScreen from "./Login";
import LoginWallpaperScreen from "../components/LoginWallpaperScreen";


class UserScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            registerView: false,
            loggedIn: false,
        }
    }

    handleView = () => {
        this.setState({
            registerView: !this.state.registerView
        })
    }

    componentDidMount() {
        const loggedIn = AsyncStorage.getItem('loggedIn', false)
        this.setState({
            loggedIn: loggedIn
        })
    }

    handleLoginNavigation = () => {
        this.props.navigation.navigate('RegisterOrLogin');
    };

    handleRegister = () => {
        this.props.navigation.navigate('Register');
    };

    render() {
        const {isLoggedIn, logimMessage, isPAsswordSet} = this.props.appState;
        const {LoggedIn} = this.state;
        const {registerView} = this.props;

        return(
            <View>
            {LoggedIn ?
                 <LoginScreen />
                 :
                <LoginWallpaperScreen handleButton={this.handleLoginNavigation} handleRegister={this.handleRegister} navigation={this.props.navigation} />
             }
           </View>
        );
    }
}






export default connect(
    ({appState}) => {return { appState}},
    (dispatch) => bindActionCreators(ActionCreators, dispatch)
)(UserScreen)


