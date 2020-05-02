import ProgressBar from '@components/atoms/ProgressBar';
import StatusHeader from '@components/molecules/StatusHeader';
import {IEntity} from '@domain/interfaces';
import React from 'react';
import {FlatList, StyleProp, View, ViewStyle, StyleSheet} from 'react-native';
import {Label, Text} from '@components/atoms/Text';
import LocalService from '@services/Locale/LocaleService';
import Divider from '@components/atoms/Divider';

interface IEntityList {
  containerStyle?: StyleProp<ViewStyle>;
  data: IEntity[];
  isHorizontal?: boolean;
  cardIndex: number;
}

const EntityList = (props: IEntityList): React.ReactElement => {
  const {containerStyle = {}, data, isHorizontal = false, cardIndex} = props;

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderEntity}
      ItemSeparatorComponent={renderSeperator}
      contentContainerStyle={containerStyle}
      horizontal={isHorizontal}
      listKey={`entityList-${cardIndex}`}
    />
  );
};

const renderSeperator = (): React.ReactElement => <Divider />;

const keyExtractor = (item: IEntity, index: number): string =>
  `${item.title}-${index}`;

const renderEntity = ({item}: {item: IEntity}): React.ReactElement => {
  const {
    title,
    requestedAmount,
    availedAmount,
    status,
    unitType,
    currentPrice,
    currency,
  } = item;
  const {t} = LocalService;

  const unit = unitType ? unitType : t('Common.unit');
  const progress = availedAmount / requestedAmount;

  return (
    <View style={styles.flexOne}>
      <View style={[styles.entityHeader, styles.flexOne]}>
        <StatusHeader
          title={title}
          status={status}
          containerStyle={styles.entityHeaderRight}
          titleContainer={styles.titleContainer}
        />
        {currentPrice && (
          <Label fontSize={'large'} fontWeight={'regular'}>
            {`${t('Common.currentPrice')} ${currentPrice} ${currency}/${unit}`}
          </Label>
        )}
      </View>
      <View style={[styles.quantityInfoContainer, styles.flexOne]}>
        <Label fontSize={'large'} fontWeight={'regular'}>
          {`${t('Common.requestedAmount')} ${requestedAmount} ${unit}`}
        </Label>
        <Label fontSize={'large'} fontWeight={'regular'}>
          {`${t('Common.availedAmount')} ${availedAmount} ${unit}`}
        </Label>
      </View>
      <View style={styles.progressBar}>
        <ProgressBar
          type={'circle'}
          barProps={{showsText: true, progress, size: 60, fill: 'yellow'}}
        />
      </View>
    </View>
  );
};

export default EntityList;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  progressBar: {
    alignSelf: 'center',
  },
  quantityInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  entityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  entityHeaderRight: {
    justifyContent: 'flex-start',
  },
  titleContainer: {
    marginEnd: 4,
  },
});
