import React from "react";
import {Text, View, AsyncStorage, Button} from "react-native";
import ActionCreators from '../../redux/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LoginScreen from "./Login";
import LoginWallpaperScreen from "../components/LoginWallpaperScreen";
import ProfileScreen from "./ProfileScreen";


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

    refreshPage = () => {
        this.componentDidMount()
    }

    async componentDidMount () {
        const loggedIn = await AsyncStorage.getItem('loggedIn', false)
        console.log('is user logged?', loggedIn)
        this.setState({
            loggedIn: loggedIn
        })
    }
    
    componentDidUpdate(nextProps) {
        if ( nextProps.navigation.state.params !== undefined) {
            const loggedIn = nextProps.navigation.state.params.loggedIn
            this.setState({
                loggedIn: loggedIn
            })
        }
    }

    handleLoginNavigation = () => {
        this.props.navigation.navigate('RegisterOrLogin');
    };

    handleRegister = () => {
        this.props.navigation.navigate('Register');
    };

    render() {
        const {isLoggedIn, logimMessage, isPAsswordSet} = this.props.appState;
        const {loggedIn} = this.state;
        const {registerView} = this.props;

        return(
            <View>
            {loggedIn ?
                 <ProfileScreen />
                 :
                <LoginWallpaperScreen 
                    handleButton={this.handleLoginNavigation} 
                    handleRegister={this.handleRegister} 
                    navigation={this.props.navigation} 
                    refreshPage={this.refreshPage}
                    />
             }
           </View>
        );
    }
}






export default connect(
    ({appState}) => {return { appState}},
    (dispatch) => bindActionCreators(ActionCreators, dispatch)
)(UserScreen)


