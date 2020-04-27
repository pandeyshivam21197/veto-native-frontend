import React from 'react';
import {
    Bar,
    BarPropTypes,
    Circle,
    CirclePropTypes,
    CircleSnail,
    CircleSnailPropTypes,
    Pie,
    PiePropTypes,
} from 'react-native-progress';

interface IProgressBar {
    type: 'bar' | 'pie' | 'circle' | 'circleSnail';
    barProps: BarPropTypes | CirclePropTypes | PiePropTypes | CircleSnailPropTypes;
}

const ProgressBar = (props: IProgressBar) => {
    const {type, barProps} = props;
    const BarTag = getBarTag(type);

    // @ts-ignore
    return (<BarTag {...barProps}/>)
}

const getBarTag = (type: string) => {
    switch (type) {
        case 'bar':
            return Bar;
        case 'pie':
            return Pie;
        case 'circle':
            return Circle;
        case 'circleSnail':
            return CircleSnail;
        default:
            return Bar;
    }
};

export default ProgressBar;
