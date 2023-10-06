import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window');

const cores = {
    blue: "#4267B2",
    red: "#EB6A58",
    green: "#449282",
    white: "#FBFBFB",
    lightWhite: "#FFFFFF",
    lightBlue: "#6885C1",
    lightRed: "#EB9C9B",
    lightGreen: "#73ADA1",
    black: '#121212',
    dark: '#3D3A45',
    gray: '#8C8896',
    lightGrey: '#D1CFD5',
};


const sizes = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 44,
    height,
    width
};

const text = {
    xxSmall: 8,
    xSmall: 10,
    small: 12,
    medium: 14,
    large: 16,
    xLarge: 20,
    xxLarge: 22,
};


const shadows = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    medium: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    },
};


export { cores, sizes, shadows, text };