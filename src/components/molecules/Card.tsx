import {Text} from '@components/atoms/Text';
import EntityList, {IEntity} from '@components/molecules/EntityList';
import StatusHeader, {campaignStatus} from '@components/molecules/StatusHeader';
import ThumbnailList, {IThumbnail} from '@components/molecules/ThumbnailList';
import * as React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

export interface ICard {
  title: string;
  subTitle?: string;
  status: campaignStatus;
  entities?: IEntity[];
  description?: string;
  thumbnails?: IThumbnail[];
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
      {description && status === 'Completed' && <Text>{description}</Text>}
    </View>
  );
};

export default Card;
