import React from "react";
import {Text, View, AsyncStorage, Button} from "react-native";
import ActionCreators from '../../redux/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LoginScreen from "./Login";
import LoginWallpaperScreen from "../components/LoginWallpaperScreen";
import ProfileScreen from "./ProfileScreen";
import {authStatus} from "./auth";


class UserScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            registerView: false,
            isLogged: false,
            token: ''
        }
    }

    handleView = () => {
        this.setState({
            registerView: !this.state.registerView
        })
    };

    refreshPage = () => {
        this.componentDidMount()
    };

    handleLoginNavigation = () => {
        this.props.navigation.navigate('RegisterOrLogin');
    };

    handleRegister = () => {
        this.props.navigation.navigate('Register');
    };

    async loadData(){
        const dataFromStore = await authStatus();
        console.log('dataFromStore', dataFromStore);
        const isLogged = await AsyncStorage.getItem('isLogged');
        const token = await AsyncStorage.getItem('access_token');
        this.setState({
            isLogged: isLogged,
            token: token
        })
    }

    componentDidMount () {
        this.loadData()
    }

    componentDidUpdate(nextProps) {
        if (nextProps.navigation.state.params !== undefined){
            if (nextProps.navigation.state.params.loggedIn !== this.props.navigation.state.params.loggedIn) {
                const loggedIn = nextProps.navigation.state.params.isLogged
                console.log('loggedIn', loggedIn);
                this.setState({
                    isLogged: isLogged
                })
            }
        }
    }

    render() {
        const {token, isLogged} = this.state;
        return(
            <View>
            {isLogged === 'true' ?
                 <ProfileScreen token={token} />
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


