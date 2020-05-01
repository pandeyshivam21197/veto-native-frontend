import Card from '@components/molecules/Card';
import {ICampaignRequest} from '@domain/interfaces';
import React from 'react';
import {FlatList, StyleProp, ViewStyle} from 'react-native';

interface ICardList {
  data: ICampaignRequest[];
  containerStyle?: StyleProp<ViewStyle>;
  isHorizontal?: boolean;
}

const CardList = (props: ICardList): React.ReactNode => {
  const {containerStyle = {}, data, isHorizontal = true} = props;
  return (
    <FlatList
      data={data}
      renderItem={renderCard}
      contentContainerStyle={containerStyle}
      horizontal={isHorizontal}
    />
  );
};

const renderCard = ({item}: {item: ICampaignRequest}): React.ReactElement => {
  const {
    _id,
    title,
    entities,
    subTitle,
    status,
    description,
    thumbnails,
    creatorId,
    donerIds,
    groupMemberIds,
    createdAt,
    updatedAt,
  } = item;

  return (
    <Card
      _id={_id}
      title={title}
      status={status}
      entities={entities}
      subTitle={subTitle}
      description={description}
      thumbnails={thumbnails}
      creatorId={creatorId}
      donerIds={donerIds}
      groupMemberIds={groupMemberIds}
      createdAt={createdAt}
      updatedAt={updatedAt}
    />
  );
};

export default CardList;
