import Icon from '@components/atoms/Icon';
import {Text} from '@components/atoms/Text';
import {campaignStatus} from '@domain/interfaces';
import {theme} from '@styles/theme';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';

interface IStatusHeader {
  title: string;
  subTitle?: string;
  status: campaignStatus;
}
const StatusHeader = (props: IStatusHeader) => {
  const {title, subTitle, status} = props;

  return (
    <View style={styles.cardHeader}>
      <React.Fragment>
        <Text>{title}</Text>
        {subTitle && <Text>{subTitle}</Text>}
      </React.Fragment>
      <Icon
        name={'circle'}
        color={getStatusColor(status)}
        size={15}
        style={styles.icon}
      />
    </View>
  );
};

const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Completed':
      return theme.colors.screamingGreen;
    case 'Availed':
      return theme.colors.mustard;
    default:
      return theme.colors.skyBlue;
  }
};

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    alignSelf: 'center',
  },
});

export default StatusHeader;
