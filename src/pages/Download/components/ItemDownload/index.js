import React from 'react';

import {TouchableOpacity} from 'react-native';

import {Container,TextInfo} from './style';

const ItemDownload = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Container>
                <TextInfo>{props.text} </TextInfo>
            </Container>
        </TouchableOpacity>
    )
}

export default ItemDownload;