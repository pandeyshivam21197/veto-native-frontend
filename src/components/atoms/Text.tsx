import {StyleProp, View, ViewStyle, Text as RNText} from 'react-native';
import * as React from 'react';

interface IText {
    style: StyleProp<ViewStyle>;
}

export const Text = (props: IText) => {
    return (
        <View>
            <RNText>This is a Text</RNText>
        </View>
    )
}
