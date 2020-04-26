import {StyleProp, ViewStyle, Text as RNText, StyleSheet, TextStyle} from 'react-native';
import * as React from 'react';

interface IFontWeight {
    fontWeight: 'regular' | 'medium' | 'bold';
}

interface IFontSize {
    fontSize: 'small' | 'medium' | 'large';
}

interface IText extends IFontWeight, IFontSize {
    containerStyle?: StyleProp<ViewStyle>;
    children: string | React.ReactNode;
}

export const Text = (props: IText) => {
    const {children, fontSize = 'small', fontWeight = 'small', containerStyle={}} = props;
    const style: TextStyle = styles(fontSize, fontWeight).text;

    return (<RNText style={[style, containerStyle]}>{children}</RNText>)
};

export const Label = (props: IText) => {
    const {children, fontSize = 'small', fontWeight = 'small', containerStyle={}} = props;
    const style: TextStyle = styles(fontSize, fontWeight).label;

    return (<RNText style={[style, containerStyle]}>{children}</RNText>)
};

const textFontSize = {
    small: 20,
    medium: 24,
    large: 28,
}

const labelFontSize = {
    small: 8,
    medium: 12,
    large: 16,
}


const getTextStyle = (fontWeight: string, fontSize: string, isLabel = false): { fontSize: number, fontWeight: any } => {
    let weight;
    let size;
    let fontSizes = textFontSize;
    if (isLabel) {
        fontSizes = labelFontSize;
    }
    const {small, medium, large} = fontSizes;

    switch (fontWeight) {
        case 'medium':
            weight = '400';
            break;
        case 'bold':
            weight = '700';
            break;
        default:
            weight = 'normal';
    }

    switch (fontSize) {
        case 'medium':
            size = medium;
            break;
        case 'large':
            size = large;
            break;
        default:
            size = small;
    }
    return {
        fontSize: size,
        fontWeight: weight,
    };
};

const styles = (fontWeight: string, fontSize: string) => (StyleSheet.create({
    text: {
        ...getTextStyle(fontWeight, fontSize),
    },
    label: {
        ...getTextStyle(fontWeight, fontSize, true),
    }
}));
