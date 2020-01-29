// REACT
import React from 'react'

// REACT NATIVE
import {TouchableOpacity} from 'react-native';

// LOCAL
import Thumbnail from '../Thumbnail';
import { Container,Name,Description } from './style';

export default VideoItem = (props) => {
    return (
        <TouchableOpacity onPress={() => props.onPress(props.id)}>
                <Container>
                    <Thumbnail url={props.url_thumbnail} />
                    <Name>{props.name_video}</Name>
                    <Description>{props.description.substring(0,100)+"..."}</Description> 
                </Container>
        </TouchableOpacity>
    )
}