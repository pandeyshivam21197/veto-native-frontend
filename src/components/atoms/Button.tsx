import * as React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import {PlatformUtils} from '@utils/PlatformUtil';
import {Text, FontSize, FontWeight} from '@components/atoms/Text';
import Icon from '@components/atoms/Icon';
import {StyleSheet, ViewStyle, StyleProp, TextStyle} from 'react-native';
import {theme} from '@styles/theme';
import LoadingSpinner from './LoadingSpinner';

interface IButtonProps {
  title: string;
  iconName?: string;
  isDisabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  textFontSize?: FontSize;
  textFontWeight?: FontWeight;
  iconSize?: number;
  onPress?: () => void;
  isLoading?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  showBorder?: boolean;
  needPadding?: boolean;
}

const Button = (props: IButtonProps): React.ReactElement => {
  const {
    title,
    iconName,
    isDisabled = false,
    containerStyle = {},
    textFontWeight = 'medium',
    textFontSize = 'small',
    iconSize = 26,
    onPress,
    isLoading = false,
    titleStyle = {},
    showBorder = true,
    needPadding = true,
  } = props;

  const Touchable = PlatformUtils.isAndroid()
    ? TouchableNativeFeedback
    : TouchableOpacity;

  const container: ViewStyle = createStyle(
    isDisabled,
    iconName,
    showBorder,
    needPadding,
  ).container;

  return (
    // @ts-ignore
    <Touchable
      style={[container, containerStyle]}
      disabled={isDisabled}
      onPress={onPress}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <React.Fragment>
          {title && (
            <Text
              fontSize={textFontSize}
              fontWeight={textFontWeight}
              containerStyle={titleStyle}>
              {title}
            </Text>
          )}
          {iconName && <Icon name={iconName} size={iconSize} />}
        </React.Fragment>
      )}
    </Touchable>
  );
};

export default Button;

const createStyle = (
  isDisabled: boolean,
  iconName?: string,
  showBorder?: boolean,
  needPadding?: boolean,
) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: iconName ? 'center' : 'space-around',
      backgroundColor: isDisabled
        ? theme.colors.whiteSmoke
        : theme.colors.transparent,
      borderColor: showBorder ? theme.colors.white : theme.colors.nero,
      borderWidth: showBorder ? StyleSheet.hairlineWidth : 0,
      paddingVertical: needPadding ? 8 : 0,
      paddingHorizontal: needPadding ? 4 : 0,
    },
  });
