import React from "react";
import {Text, View} from "react-native";
import ActionCreators from '../../redux/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LoginScreen from "./Login";
import RegisterScreen from "./Register";


class UserScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            registerView: false
        }
    }

    handleView = () => {
       console.log('hitted!!!')
        
        this.setState({
            registerView: !this.state.registerView
        })
    }

    render() {
        const {isLoggedIn, logimMessage, isPAsswordSet} = this.props.appState;
        const {registerView} = this.props;

        return(
            <View>
                {registerView ?
                    <RegisterScreen handleView={this.handleView} />
                    :
                    <LoginScreen handleView={this.handleView} />
                }
            </View>
        );
    }
}

export default connect(
    ({appState}) => {return { appState}},
    (dispatch) => bindActionCreators(ActionCreators, dispatch)
)(UserScreen)


