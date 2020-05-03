import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from '@components/molecules/Card';
import {ICampaignRequest, IDonationHistory} from '@domain/interfaces';
import {Text} from '@components/atoms/Text';
import {theme} from '@styles/theme';
import CardList from '@components/organisms/CardList';

interface IHorizontalCampaign {
  title: string;
  data: ICampaignRequest[] | IDonationHistory[];
}

const HorizontalCampaignRail = (
  props: IHorizontalCampaign,
): React.ReactElement | null => {
  const {data, title} = props;

  if (!data || data.length <= 0) {
    return null;
  }

  return (
    <View style={[styles.flexOne, styles.container]}>
      <Text
        fontWeight="bold"
        containerStyle={[styles.title, styles.horizontalMargin]}>
        {title}
      </Text>
      <CardList data={data} renderItem={renderCampaign} />
    </View>
  );
};

const renderCampaign = ({
  item,
  index,
}: {
  item: ICampaignRequest | IDonationHistory;
  index: number;
}): React.ReactElement => {
  let cardItem;
  let donationAmount;
  // @ts-ignore
  if ((item as IDonationHistory) && item.campaignRequestId) {
    // @ts-ignore
    donationAmount = item.donationAmount;
    // @ts-ignore
    cardItem = item.campaignRequestId;
  } else {
    cardItem = item;
  }

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
  } = cardItem;

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
      isHorizontalRendering={true}
      donationAmount={donationAmount}
    />
  );
};

export default HorizontalCampaignRail;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    marginBottom: 20,
  },
  title: {
    marginBottom: 12,
  },
  horizontalMargin: {
    marginHorizontal: theme.layout.screenHorizontalMargin,
  },
});
