import {Button} from '@components/atoms/Button';
import Icon from '@components/atoms/Icon';
import {Text} from '@components/atoms/Text';
import React from 'react';
import {StyleSheet, View} from 'react-native';

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
