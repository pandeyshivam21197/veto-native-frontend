import React from "react";
import {ActivityIndicator, StyleProp, StyleSheet, View, ViewStyle} from "react-native";
import {theme} from "@styles/theme";

interface ILoadingSpinner {
    size?: number | 'small' | 'large';
    color?: string;
    style?: StyleProp<ViewStyle>;
}

const LoadingSpinner = (props: ILoadingSpinner): React.ReactElement => {
    const {size = 'large', color = theme.colors.darkBlue, style = {}} = props;

    return (
        <View style={styles.container}>
            <ActivityIndicator size={size} color={color} style={style}/>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default LoadingSpinner;
