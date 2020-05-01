import {Text} from '@components/atoms/Text';
import EntityList from '@components/molecules/EntityList';
import StatusHeader from '@components/molecules/StatusHeader';
import ThumbnailList from '@components/molecules/ThumbnailList';
import {ICampaignRequest} from '@domain/interfaces';
import * as React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

export interface ICard extends ICampaignRequest {
  containerStyle?: StyleProp<ViewStyle>;
}

const Card = (props: ICard): React.ReactElement => {
  const {
    title,
    subTitle,
    status,
    entities,
    description,
    thumbnails,
    containerStyle = {},
  } = props;
  // TODO: add total progress bar
  return (
    <View style={containerStyle}>
      <StatusHeader title={title} status={status} subTitle={subTitle} />
      {entities && <EntityList data={entities} />}
      {thumbnails && <ThumbnailList data={thumbnails} />}
      {description ? <Text>{description}</Text> : null}
    </View>
  );
};

export default Card;
