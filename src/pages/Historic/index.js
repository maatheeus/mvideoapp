import React from 'react';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Container, 
    ListHistoric,
    ContainerItem,
    NameVideo,
    DescriptionHistoric} from './style';
const Historic = () => {
    let teste = [{'id':1, 'name_video': 'MATHEUS TESTE', 'source' : 'C://teste/teste', 'format' : 'MP4'},{'id':1, 'name_video': 'MATHEUS TESTE', 'source' : 'C://teste/teste', 'format' : 'MP4'},{'id':1, 'name_video': 'MATHEUS TESTE', 'source' : 'C://teste/teste', 'format' : 'MP4'},{'id':1, 'name_video': 'MATHEUS TESTE', 'source' : 'C://teste/teste', 'format' : 'MP4'},{'id':1, 'name_video': 'MATHEUS TESTE', 'source' : 'C://teste/teste', 'format' : 'MP4'},{'id':1, 'name_video': 'MATHEUS TESTE', 'source' : 'C://teste/teste', 'format' : 'MP4'},{'id':1, 'name_video': 'MATHEUS TESTE', 'source' : 'C://teste/teste', 'format' : 'MP4'},{'id':1, 'name_video': 'MATHEUS TESTE', 'source' : 'C://teste/teste', 'format' : 'MP4'},{'id':1, 'name_video': 'MATHEUS TESTE', 'source' : 'C://teste/teste', 'format' : 'MP4'},{'id':1, 'name_video': 'MATHEUS TESTE', 'source' : 'C://teste/teste', 'format' : 'MP4'}]; 
    
    const renderItem = (item) => { 
        return (
                <ContainerItem>
                    <Icon name="download" size={60} color="#F39422" />
                    <Container>
                        <NameVideo key={item.id}>{item.name_video}</NameVideo>
                        <DescriptionHistoric>Formato : {item.format}</DescriptionHistoric>
                        <DescriptionHistoric>Source : {item.source}</DescriptionHistoric>
                    </Container>
                </ContainerItem>
        )
    }

    return(
        <Container>
            <ListHistoric 
                data={teste}
                renderItem={({item}) => renderItem(item)}
            />
        </Container>
    )
}

export default Historic;