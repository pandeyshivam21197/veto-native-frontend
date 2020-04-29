import React from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "@components/atoms/Text";
import Icon from "@components/atoms/Icon";
import {Button} from "@components/atoms/Button";

interface IErrorComponentProps {
    text: string;
    onPress: () => void;
}

const ErrorComponent = (props: IErrorComponentProps) => {
    const {text, onPress} = props;

    return (
        <View style={styles.container}>
            <Icon name={'exclamation-circle'}/>
            <Text>{text}</Text>
            <Button onPress={onPress}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ErrorComponent;
