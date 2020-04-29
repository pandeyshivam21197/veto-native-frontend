import {Text} from '@components/atoms/Text';
import {theme} from '@styles/theme';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface IHeader {
   title: string;
}

const Header = (props: IHeader) => {
    const {title} = props;

    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: theme.layout.headerHeight,
        backgroundColor: 'red',
    },
})

export default Header;
