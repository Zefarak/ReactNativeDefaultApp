import React from "react";
import {Text, View, AsyncStorage, Button} from "react-native";
import ActionCreators from '../../redux/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LoginScreen from "./Login";
import RegisterScreen from "./Register";
import LoginWallparerScreen from "../components/LoginWallpaperScreen";


class UserScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            registerView: false,
            loggedIn: false,
        }
    }

    handleView = () => {
       console.log('hitted!!!')
        
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
        this.props.navigation.navigate('')
    }

    render() {
        const {isLoggedIn, logimMessage, isPAsswordSet} = this.props.appState;
        const {LoggedIn} = this.state;
        const {registerView} = this.props;

        return(
            <View>
            {LoggedIn ?
                 <LoginScreen />
                 :
                <LoginWallparerScreen handleButton={this.handleLoginNavigation} />
             }
           </View>
        );
    }
}






export default connect(
    ({appState}) => {return { appState}},
    (dispatch) => bindActionCreators(ActionCreators, dispatch)
)(UserScreen)


