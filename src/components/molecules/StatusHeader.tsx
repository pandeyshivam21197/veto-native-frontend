import Icon from '@components/atoms/Icon';
import {Text} from '@components/atoms/Text';
import {theme} from '@styles/theme';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {campaignStatus} from '@domain/interfaces';

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
      <Icon name={'circle'} color={getStatusColor(status)} />
    </View>
  );
};

const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Completed':
      return theme.colors.green;
    case 'Availed':
      return theme.colors.orange;
    default:
      return theme.colors.green;
  }
};

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default StatusHeader;
