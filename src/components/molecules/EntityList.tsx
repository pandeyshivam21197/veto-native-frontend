import ProgressBar from '@components/atoms/ProgressBar';
import StatusHeader, {campaignStatus} from '@components/molecules/StatusHeader';
import React from 'react';
import {FlatList, StyleProp, View, ViewStyle} from 'react-native';

export interface IEntity {
    title: string;
    requestedAmount: number;
    availedAmount: number;
    currentPrice: string;
    status: campaignStatus;
}

interface IEntityList {
    containerStyle?: StyleProp<ViewStyle>;
    data: IEntity[];
    numColumns?: number;
}

const EntityList = (props: IEntityList): React.ReactElement => {
    const {containerStyle = {}, data, numColumns = 2} = props;
    return (
        <FlatList data={data} renderItem={renderEntity} contentContainerStyle={containerStyle} numColumns={numColumns}/>
    )
};

const renderEntity = ({item}: {item: IEntity}): React.ReactElement => {
    const {title, requestedAmount, availedAmount, status} = item;
    const progress = availedAmount / requestedAmount;
    return (
        <View>
            <StatusHeader title={title} status={status}/>
            <ProgressBar type={'circle'} barProps={{showsText: true, progress}}/>
        </View>
    )
};

export default EntityList;
