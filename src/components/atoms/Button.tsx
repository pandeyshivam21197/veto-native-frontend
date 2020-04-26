import Icon from '@components/atoms/Icon';
import {FontSize, FontWeight, Label, Text, TextType} from '@components/atoms/Text';
import {theme} from '@styles/theme';
import {PlatformUtils} from '@utils/PlatformUtil';
import {StyleUtils} from '@utils/StyleUtils';
import {debounce} from 'lodash';
import React, {ReactElement} from 'react';
import {
    GestureResponderEvent,
    Image,
    ImageSourcePropType,
    ImageStyle,
    StyleProp,
    StyleSheet,
    TextStyle,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';


export type ButtonType = 'filled' | 'ghost' | 'rounded' | 'link';

export interface IButtonProps {
    title?: any;
    onPress?: (event?: GestureResponderEvent) => void;
    containerStyle?: StyleProp<ViewStyle>;
    iconStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    containerDisabledStyle?: {};
    disabled?: boolean;
    buttonType?: ButtonType;
    textTagType?: TextType;
    textFontWeight?: FontWeight;
    textFontSize?: FontSize;
    iconRight?: boolean;
    icon?: string;
    iconSize?: number;
    iconColor?: string;
    image?: ImageSourcePropType;
    imageStyle?: StyleProp<ImageStyle>;
    numberOfLines?: number;
    touchableStyle?: ViewStyle;
}

export class Button extends React.PureComponent<IButtonProps, {}> {

    public render(): ReactElement<View> {
        const {
            title,
            icon,
            onPress,
            containerStyle = {},
            titleStyle,
            iconStyle,
            iconRight = false,
            iconSize = 25,
            disabled = false,
            buttonType = 'filled',
            iconColor = buttonType === 'filled' ? theme.colors.white : theme.colors.black,
            image = null,
            imageStyle = {},
            containerDisabledStyle = {},
            textFontSize = 'small',
            textFontWeight = 'regular',
            textTagType = 'text',
            numberOfLines = 1,
            touchableStyle = {},
        } = this.props;

        const Touchable = PlatformUtils.isAndroid() ? TouchableNativeFeedback : TouchableOpacity;
        let TextField = null;
        if (textTagType === 'label') {
            TextField = Label;
        } else {
            TextField = Text;
        }

        const debouncePress = () => {
            return onPress ? onPress() : () => null;
        };

        const touchableProps = PlatformUtils.isAndroid()
            ? {background: TouchableNativeFeedback.SelectableBackground()}
            : {activeOpacity: 0.8};

        const onPressButton = debounce(debouncePress, 100);

        return (
            // @ts-ignore
            <Touchable
                disabled={disabled}
                onPress={onPressButton}
                {...touchableProps}
                style={touchableStyle}
            >
                <View
                    style={[
                        styles.containerStyle(buttonType, textFontSize, iconRight, icon),
                        containerStyle,
                        styles.disabled(disabled),
                        StyleUtils.conditionalStyle(disabled, containerDisabledStyle),
                    ]}
                >
                    {icon &&
                    <Icon
                        name={icon}
                        size={iconSize}
                        color={disabled ? theme.colors.grey : iconColor}
                        style={[styles.iconStyle, iconStyle]}
                    />
                    }
                    {image &&
                    <Image resizeMode={'cover'} source={image} style={imageStyle}/>
                    }
                    {title &&
                    <TextField
                        fontWeight={textFontWeight}
                        fontSize={textFontSize}
                        numberOfLines={numberOfLines}
                        style={[styles.title(buttonType), titleStyle, styles.disabledTitle(disabled)]}
                    >
                        {title}
                    </TextField>
                    }
                </View>
            </Touchable>
        );
    }
}

const styles = {
    containerStyle: (type: string, size: string, iconRight: boolean, icon: string | undefined) => ({
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: type === 'filled' ? theme.colors.black : 'transparent',
        flexDirection: iconRight ? 'row-reverse' : 'row',
        justifyContent: icon ? 'space-between' : 'center',
        alignItems: 'center',
        borderRadius: type === 'rounded' ? 25 : 2,
        borderWidth: type === 'ghost' || type === 'rounded' ? StyleSheet.hairlineWidth : 0,
        borderColor: theme.colors.black,
    }),
    title: (type: string) => ({
        color: type === 'filled' ? 'white' : theme.colors.black,
        textAlign: 'center',
        paddingVertical: 5,
    }),
    disabled: (disabled: boolean) => ({
        ...StyleUtils.conditionalStyle(disabled, {
            backgroundColor: theme.colors.grey,
        }),
    }),
    disabledTitle: (disabled: boolean) => ({
        ...StyleUtils.conditionalStyle(disabled, {
            color: theme.colors.grey,
        }),
    }),
    iconStyle: {
        paddingHorizontal: 2,
    },
};
