import React from 'react';
import {FlatList, Image, StyleProp, ViewStyle} from 'react-native';
import Video from 'react-native-video';

export interface IThumbnail {
    url: string;
    type: string;
}

export const thumbnailType = {
    IMAGE: 'Image',
    VIDEO: 'Video',
}

interface IThumbnailList {
    containerStyle?: StyleProp<ViewStyle>;
    data: IThumbnail[];
}

const ThumbnailList = (props: IThumbnailList): React.ReactElement => {
    const {data, containerStyle = {}} = props;

    return (
        <FlatList
            data={data}
            renderItem={renderThumbnail}
            contentContainerStyle={containerStyle}
            horizontal={true}
            numColumns={2}
        />
    );
};

const renderThumbnail = ({item}: { item: IThumbnail }): React.ReactElement => {
    const {url, type} = item;
    const {IMAGE} = thumbnailType;
    const isImage: boolean = type === IMAGE;
    return (
        <React.Fragment>
            {isImage ?
                <Image source={{uri: url}}/>
                :
                <Video source={{uri: url}}/>}
        </React.Fragment>
    )
};

export default ThumbnailList;
