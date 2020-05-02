import {IUser} from '@domain/interfaces';
import {FlatList, View, StyleSheet} from 'react-native';
import * as React from 'react';
import Divider from '@components/atoms/Divider';
import Image from '@components/atoms/Image';
import {Text} from '@components/atoms/Text';
import {Button} from '@components/atoms/Button';
import {theme} from '@styles/theme';

interface IConstributoList {
  data: IUser[];
  isHorizontal?: boolean;
  title?: string;
}
const CampaignContributorList = (
  props: IConstributoList,
): React.ReactElement => {
  const {data, isHorizontal = true, title} = props;

  return (
    <React.Fragment>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={data}
        horizontal={isHorizontal}
        renderItem={isHorizontal ? renderHorizontalItems : renderVerticalItems}
        ItemSeparatorComponent={
          isHorizontal ? renderHorizontalSeperator : renderVerticalSeperator
        }
      />
      {/* {isHorizontal && (
        <Button
          buttonType={'ghost'}
          // containerStyle={styles.buttonContainer}
          titleStyle={{backgroundColor: 'white'}}
          title={t('Common.viewAll')}
        />
      )} */}
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
    <View style={styles.verticalItems}>
      <Image source={{uri: userImage}} width={100} height={100} />
      <Text fontSize={'medium'}>{name}</Text>
    </View>
  );
};

export default CampaignContributorList;

const styles = StyleSheet.create({
  horizontalSeperator: {
    width: 4,
  },
  verticalItems: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: 4,
  },
  buttonContainer: {
    color: theme.colors.white,
    backgroundColor: 'white',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});
