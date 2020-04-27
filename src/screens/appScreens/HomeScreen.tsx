import ProgressBar from '@components/atoms/ProgressBar';
import {Text} from '@components/atoms/Text';
import React from 'react';
import {View} from 'react-native';

class HomeScreen extends React.PureComponent {
    render() {
        return (
            <View>
                <Text>This is home screen</Text>
                <ProgressBar type={'bar'} barProps={{}}/>
                <ProgressBar type={'circle'} barProps={{progress: 0.5, showsText: true}}/>
            </View>
        )
    }
}

export default HomeScreen;
