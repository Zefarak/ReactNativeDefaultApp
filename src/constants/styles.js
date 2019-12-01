import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const colors = {
    PRIMARY: 'white',
    SECONDARY: '#CA3F27'
}

export const myFontSizes = {
    big: 100,
    normal: 70,
    small: 40
}

const scalingFactors ={
    small: 40,
    normal: 30,
    big:20
}


export const fontSizes = {
    H1: {
        fontsize: width/scalingFactors.big,
        lineHeight: (width/scalingFactors).big * 1.3
    },
    P:{
        fontsize: width/scalingFactors.normal,
        lineHeight: (width/scalingFactors.normal) * 1.3
    },
    SMALL: {
        fontSize: width / scalingFactors.small,
    }
}

export const globalStyles = {
    textHeader: {...fontSizes.H1,
        color: colors.PRIMARY,
        paddingTop: 20,
        fontWeight: 'bold'
    }
}
