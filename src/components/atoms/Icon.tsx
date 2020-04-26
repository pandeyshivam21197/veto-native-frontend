import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from "react";
import {StyleProp, ViewStyle} from "react-native";

interface IIcon {
    name: string;
    color?: string;
    size?: number;
    style?: StyleProp<ViewStyle>;
}

const Icon = (props: IIcon) => {
    const {name, color = 'white', size = 26, style = {}} = props;
    return (<MaterialCommunityIcons name={name} color={color} size={size} style={style}/>)
};

export default Icon;
