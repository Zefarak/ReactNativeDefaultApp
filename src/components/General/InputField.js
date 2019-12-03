import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import {colors, fontSizes} from '../../constants/styles';

const InputField = props => {
    const [value, setValue] = useState('')

    handleInput = text => {
        console.log(text);
        setValue(text);
        props.handleInput(text)
    };

    const {
        labelText,
        labelTextSize,
        labelColor,
        textColor,
        borderBottomColor,
        inputType,
        customStyle
      }  = props;

      const color = labelColor || colors.PRIMARY;
      const fontSize = labelTextSize || fontSizes.H1;
      const inputColor = textColor || 'white';
      const borderBottom = borderBottomColor || 'transparent';

      return (
        <View style={[customStyle, styles.wrapper]}>
            <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
            <TextInput
              onChangeText={handleInput}
              value={value}
              autoCorrect={false}
              style={[
                  { color: inputColor, borderBottomColor: borderBottom },
                  styles.inputFiled
              ]}
            secureTextEntry={inputType === "password"}
            />
      </View>
      )
}

const styles = StyleSheet.create({
    wrapper: {
      display: "flex"
    },
    label: { fontWeight: "700", marginBottom: 10 },
    inputFiled: {
      borderBottomWidth: 1,
      paddingTop: 5,
      paddingBottom: 5
    }
  });
export default InputField;
