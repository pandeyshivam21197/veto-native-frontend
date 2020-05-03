import {Text} from '@components/atoms/Text';
import EntityList from '@components/molecules/EntityList';
import StatusHeader from '@components/molecules/StatusHeader';
import ThumbnailList from '@components/molecules/ThumbnailList';
import {ICampaignRequest} from '@domain/interfaces';
import {theme} from '@styles/theme';
import * as React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import CampaignContributorList from './CampaignContributorList';
import {t} from 'i18n-js';
import {TouchableOpacity} from 'react-native-gesture-handler';

export interface ICard extends ICampaignRequest {
  containerStyle?: StyleProp<ViewStyle>;
  cardIndex: number;
  onCardPress?: () => void;
  onMemberViewAll?: () => void;
  onDonerViewAll?: () => void;
  isHorizontalRendering?: boolean;
  donationAmount?: number;
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
    cardIndex,
    donerIds,
    groupMemberIds,
    creatorId,
    onCardPress,
    onMemberViewAll,
    onDonerViewAll,
    isHorizontalRendering = false,
    _id,
    donationAmount,
  } = props;
  // TODO: add total progress bar
  const displayDoners = donerIds && donerIds.length > 0;
  const updatedGroupMemberIds = [creatorId, ...groupMemberIds];

  return (
    <TouchableOpacity
      style={[
        styles.cardConatiner,
        containerStyle,
        isHorizontalRendering ? styles.HorizontalCard : {},
      ]}
      onPress={onCardPress}
      key={_id}
      activeOpacity={0.8}>
      <StatusHeader title={title} status={status} subTitle={subTitle} />
      {entities && <EntityList data={entities} cardIndex={cardIndex} />}
      {thumbnails && <ThumbnailList data={thumbnails} cardIndex={cardIndex} />}
      {updatedGroupMemberIds && (
        <CampaignContributorList
          data={updatedGroupMemberIds}
          title={t('Common.members')}
          onViewAllPress={onMemberViewAll}
        />
      )}
      {displayDoners && (
        <CampaignContributorList
          data={donerIds}
          title={t('Common.doners')}
          onViewAllPress={onDonerViewAll}
        />
      )}
      {description ? (
        <Text containerStyle={styles.description}>{description}</Text>
      ) : null}
      {donationAmount ? (
        <Text containerStyle={styles.description}>{donationAmount}</Text>
      ) : null}
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardConatiner: {
    backgroundColor: theme.colors.nero,
    padding: 12,
    borderRadius: 3,
  },
  description: {
    flex: 1,
    marginTop: 12,
  },
  HorizontalCard: {
    width: theme.viewport.width - 2 * theme.layout.screenHorizontalMargin - 20,
  },
});
