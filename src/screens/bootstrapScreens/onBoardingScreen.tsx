import React from 'react';
import Carousel from '@components/atoms/Carousel';
import {Text} from '@components/atoms/Text';
import {View, Image, ImageSourcePropType, StyleSheet} from 'react-native';
import images from '@assets/images';

interface IOnboardCard {
  imageSource: ImageSourcePropType;
  description: string;
}

const onBoardCardData: IOnboardCard[] = [
  {
    imageSource: images.splashBackgroundImage,
    description: 'this is first screen',
  },
  {
    imageSource: images.splashBackgroundImage,
    description: 'this is secod screen',
  },
];

const onBoardCard = (card: IOnboardCard) => {
  const {imageSource, description} = card;
  return (
    <View style={{backgroundColor: 'blue'}}>
      <Text>{description}</Text>
    </View>
  );
};

const onBoardingScreen = (): React.ReactElement => {
  return (
    <View style={styles.constainer}>
      <Carousel<IOnboardCard>
        data={onBoardCardData}
        itemWidth={100}
        sliderWidth={500}
        card={onBoardCard}
      />
    </View>
  );
};

export default onBoardingScreen;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
});
