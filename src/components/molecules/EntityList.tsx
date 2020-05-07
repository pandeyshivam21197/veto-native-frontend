import Divider from '@components/atoms/Divider';
import ProgressBar from '@components/atoms/ProgressBar';
import {Label} from '@components/atoms/Text';
import StatusHeader from '@components/molecules/StatusHeader';
import {IEntity} from '@domain/interfaces';
import LocalService from '@services/Locale/LocaleService';
import React from 'react';
import {FlatList, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Formik, FormikProps, FormikValues} from 'formik';
import FormTextInput from './FormTextInput';
import FormSubmitButton from './FormSubmitButton';

interface IEntityList {
  containerStyle?: StyleProp<ViewStyle>;
  data: IEntity[];
  isHorizontal?: boolean;
  cardIndex?: number;
}

const EntityList = (props: IEntityList): React.ReactElement => {
  const {
    containerStyle = {},
    data,
    isHorizontal = false,
    cardIndex = 0,
  } = props;

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderEntity}
      ItemSeparatorComponent={renderSeperator}
      contentContainerStyle={containerStyle}
      horizontal={isHorizontal}
      listKey={`entityList-${cardIndex}`}
    />
  );
};

const renderSeperator = (): React.ReactElement => <Divider />;

const keyExtractor = (item: IEntity, index: number): string =>
  `${item.title}-${index}`;

const renderEntity = ({item}: {item: IEntity}): React.ReactElement => {
  const {
    title,
    requestedAmount,
    availedAmount,
    status,
    unitType,
    currentPrice,
    currency,
  } = item;
  const {t} = LocalService;

  const entityValue = 0;
  const requiredValue = requestedAmount - availedAmount;

  const unit = unitType ? unitType : t('Common.unit');
  const progress = availedAmount / requestedAmount;

  return (
    <View style={styles.flexOne}>
      <View style={[styles.entityHeader, styles.flexOne]}>
        <StatusHeader
          title={title}
          status={status}
          containerStyle={styles.entityHeaderRight}
          titleContainer={styles.titleContainer}
        />
        {currentPrice && (
          <Label fontSize={'large'} fontWeight={'regular'}>
            {`${t('Common.currentPrice')} ${currentPrice} ${currency}/${unit}`}
          </Label>
        )}
      </View>
      <View style={[styles.quantityInfoContainer, styles.flexOne]}>
        <Label fontSize={'large'} fontWeight={'regular'}>
          {`${t('Common.requestedAmount')} ${requestedAmount} ${unit}`}
        </Label>
        <Label fontSize={'large'} fontWeight={'regular'}>
          {`${t('Common.availedAmount')} ${availedAmount} ${unit}`}
        </Label>
      </View>
      <ProgressBar
        type={'circle'}
        barProps={{
          showsText: true,
          progress,
          size: 60,
          fill: 'yellow',
          style: styles.progressBar,
        }}
      />
      {progress !== 1 && (
        <Formik
          initialValues={{entityValue, requiredValue}}
          onSubmit={onDonate}>
          {(formProps: FormikProps<FormikValues>) => (
            <View>
              <FormTextInput
                formProps={formProps}
                inputName={'entityValue'}
                inputType={'number'}
                placeholder={t('Common.donatePlaceholder')}
              />
              <FormSubmitButton
                formProps={formProps}
                buttonTitle={t('Common.donate')}
                containerStyle={styles.donateButton}
              />
            </View>
          )}
        </Formik>
      )}
    </View>
  );
};

const onDonate = () => {};

export default EntityList;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  progressBar: {
    alignSelf: 'center',
  },
  quantityInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  entityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  entityHeaderRight: {
    justifyContent: 'flex-start',
  },
  titleContainer: {
    marginEnd: 4,
  },
  donateButton: {
    marginTop: 12,
  },
});
