import Card from '@components/molecules/Card';
import {ICampaignRequest} from '@domain/interfaces';
import React from 'react';
import {FlatList, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface ICardList {
  data: ICampaignRequest[];
  containerStyle?: StyleProp<ViewStyle>;
  isHorizontal?: boolean;
}

const CardList = (props: ICardList): React.ReactElement => {
  const {containerStyle = {}, data, isHorizontal = true} = props;
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderCard}
      ItemSeparatorComponent={renderSeperator}
      contentContainerStyle={containerStyle}
      horizontal={isHorizontal}
      listKey={'cardList'}
    />
  );
};

const renderSeperator = (): React.ReactElement => (
  <View style={styles.separator} />
);

const keyExtractor = (item: ICampaignRequest, index: number): string =>
  `${item._id}-${index}`;

const renderCard = ({
  item,
  index,
}: {
  item: ICampaignRequest;
  index: number;
}): React.ReactElement => {
  const {
    _id,
    title,
    subTitle,
    status,
    description,
    thumbnails,
    creatorId,
    donerIds,
    groupMemberIds,
  } = item;

  return (
    <Card
      _id={_id}
      title={title}
      status={status}
      subTitle={subTitle}
      description={description}
      thumbnails={thumbnails}
      creatorId={creatorId}
      donerIds={donerIds}
      groupMemberIds={groupMemberIds}
      cardIndex={index}
    />
  );
};

export default CardList;

const styles = StyleSheet.create({
  separator: {
    height: 20,
  },
});
