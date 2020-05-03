import {IUser} from '@domain/interfaces';
import {FlatList, View, StyleSheet} from 'react-native';
import * as React from 'react';
import Divider from '@components/atoms/Divider';
import Image from '@components/atoms/Image';
import {Text} from '@components/atoms/Text';
import Button from '@components/atoms/Button';
import LocalService from '@services/Locale/LocaleService';

interface IConstributoList {
  data: IUser[];
  isHorizontal?: boolean;
  title?: string;
  onViewAllPress?: () => void;
}
const CampaignContributorList = (
  props: IConstributoList,
): React.ReactElement => {
  const {data, isHorizontal = true, title, onViewAllPress} = props;
  const {t} = LocalService;

  return (
    <React.Fragment>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={[styles.listContainer, styles.flexOne]}>
        <FlatList
          data={data}
          horizontal={isHorizontal}
          contentContainerStyle={styles.flexOne}
          renderItem={
            isHorizontal ? renderHorizontalItems : renderVerticalItems
          }
          ItemSeparatorComponent={
            isHorizontal ? renderHorizontalSeperator : renderVerticalSeperator
          }
        />
        {isHorizontal && (
          <Button
            title={t('Common.viewAll')}
            showBorder={false}
            onPress={onViewAllPress}
          />
        )}
      </View>
    </React.Fragment>
  );
};

const renderHorizontalSeperator = () => (
  <View style={styles.horizontalSeperator} />
);

const renderVerticalSeperator = () => <Divider />;

const renderHorizontalItems = ({item}: {item: IUser}): React.ReactElement => {
  const {userImage} = item;
  return (
    <Image
      source={userImage ? {uri: userImage} : undefined}
      width={30}
      height={30}
    />
  );
};

const renderVerticalItems = ({item}: {item: IUser}): React.ReactElement => {
  const {userImage, name} = item;

  return (
    <View style={[styles.verticalItems, styles.flexOne]}>
      <Image source={{uri: userImage}} width={100} height={100} />
      <Text fontSize={'medium'}>{name}</Text>
    </View>
  );
};

export default CampaignContributorList;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  horizontalSeperator: {
    width: 4,
  },
  verticalItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: 4,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
