import ProgressBar from '@components/atoms/ProgressBar';
import StatusHeader from '@components/molecules/StatusHeader';
import {IEntity} from '@domain/interfaces';
import React from 'react';
import {FlatList, StyleProp, View, ViewStyle} from 'react-native';

interface IEntityList {
  containerStyle?: StyleProp<ViewStyle>;
  data: IEntity[];
  numColumns?: number;
  isHorizontal?: boolean;
}

const EntityList = (props: IEntityList): React.ReactElement => {
  const {
    containerStyle = {},
    data,
    numColumns = 2,
    isHorizontal = false,
  } = props;
  return (
    <FlatList
      data={data}
      renderItem={renderEntity}
      contentContainerStyle={containerStyle}
      numColumns={numColumns}
      horizontal={isHorizontal}
    />
  );
};

const renderEntity = ({item}: {item: IEntity}): React.ReactElement => {
  const {title, requestedAmount, availedAmount, status} = item;
  const progress = availedAmount / requestedAmount;
  return (
    <View>
      <StatusHeader title={title} status={status} />
      <ProgressBar type={'circle'} barProps={{showsText: true, progress}} />
    </View>
  );
};

export default EntityList;
