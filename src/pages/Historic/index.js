import React,{useEffect,useLayoutEffect} from 'react';
import {Text} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Container, 
    ListHistoric,
    ContainerItem,
    NameVideo,
    DescriptionHistoric} from './style';

const Historic = () => {
    const dispatch = useDispatch();
    let data_historic = useSelector(state => state.video_reducer.historicDownload.data);

    useLayoutEffect(() => {
        AsyncStorage.getItem("@historic_download").then((data) => {
            dispatch({type:'SET_NEW_HISTORIC_DOWNLOAD', historicDownload: JSON.parse(data)})
        });    
    },[])
    const renderItem = (item) => { 
        return (
                <ContainerItem>
                    <Icon name="download" size={60} color="#F39422" />
                    <Container>
                        <NameVideo key={item.id}>{item.name}</NameVideo>
                        <DescriptionHistoric>Formato : {item.format}</DescriptionHistoric>
                        <DescriptionHistoric>Source : {item.dirs}</DescriptionHistoric>
                    </Container>
                </ContainerItem>
        )
    }

    return(
        <Container>
            <ListHistoric 
                data={data_historic}
                renderItem={({item}) => renderItem(item)}
            />
        </Container>
    )
}

export default Historic;