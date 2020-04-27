import Card, {ICard} from '@components/molecules/Card';
import React from 'react';
import {FlatList, StyleProp, ViewStyle} from 'react-native';

interface ICardList {
    data: ICard[];
    containerStyle?: StyleProp<ViewStyle>;
}

const CardList = (props: ICardList): React.ReactNode => {
    const {containerStyle = {}, data} = props;
    return (
        <FlatList data={data} renderItem={renderCard} contentContainerStyle={containerStyle}/>
    )
};

const renderCard = ({item}: { item: ICard }): React.ReactElement => {
    const {title, entities, subTitle, status, description, thumbnails} = item;
    return (
        <Card
            title={title}
            status={status}
            entities={entities}
            subTitle={subTitle}
            description={description}
            thumbnails={thumbnails}
        />
    )
};

export default CardList;
