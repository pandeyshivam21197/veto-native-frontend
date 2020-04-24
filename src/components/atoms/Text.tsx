import {StyleProp, View, ViewStyle, Text as RNText} from 'react-native';
import * as React from 'react';

interface IText {
    style?: StyleProp<ViewStyle>;
    children: string | React.ReactNode;
}

export const Text = (props: IText) => {
    return (
        <View>
            <RNText>children</RNText>
        </View>
    )
}
