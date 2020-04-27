import Icon from '@components/atoms/Icon';
import {Text} from '@components/atoms/Text';
import {theme} from '@styles/theme';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';

type campaignStatus = 'Completed' | 'Availed' | 'Initiated';

interface IThumbnail {
    url: string;
    type: string;
}

interface IEntity {
    title: string;
    requestedAmount: number;
    availedAmount: number;
    currentPrice: string;
    status: string;
    // add total status progress bar data. which we will calculate.
}

interface ICard {
    title: string;
    subTitle?: string;
    status: campaignStatus;
    entities?: IEntity[];
    description?: string;
    thumbnails?: IThumbnail[]
}

export const Card = (props: ICard) => {
    const {title, subTitle, status, entities, description, thumbnails} = props;
    return (
        <View>
            <View style={styles.cardHeader}>
                <React.Fragment>
                    <Text>{title}</Text>
                    {subTitle && <Text>{subTitle}</Text>}
                </React.Fragment>
                <Icon name={'status'} color={getStatusColor(status)}/>
            </View>
            {entities &&
            <View/>
                // TODO: add entities list
            }
            {thumbnails &&
            <View/>
                // TODO: render thumbnails
            }
            {description && status === 'Completed' && <Text>{description}</Text>}
        </View>
    )
}

const getStatusColor = (status: string): string => {
    switch (status) {
        case 'Completed':
            return theme.colors.green;
        case 'Availed':
            return theme.colors.orange;
        default:
            return theme.colors.green;
    }
};

const styles = StyleSheet.create({
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
