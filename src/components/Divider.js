import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import * as theme from '../components/themes';
import Block from "./Block";

export default class Divider extends Component {

    render() {
        const { color, style, ...props} = this.props;
        const dividerStyles = [
            styles.divider,
            style
        ]

        return (
            <Block
                color={color || theme.colors.gray2}
                style={dividerStyles}
                {...props}
            />
        )
    }
}
