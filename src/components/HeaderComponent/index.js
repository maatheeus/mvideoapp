import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {Container,
    NomeApp,
    LogoMarca,
    ContainerSearch,
    TextInputSearch} from './style';  
import Icon from 'react-native-vector-icons/FontAwesome';  
import logo from '../../assets/logo.png';

export default function HeaderComponent(){
    const dispatch = useDispatch();
    let header_reducer = useSelector((state) => state.header_reducer);
    const change_mode_search = () => dispatch({type:'ACTIVE_SEARCH_MODE_CHANGE'});
    return(
        <>
            <Container>
                {header_reducer.search_active ? 
                    <TextInputSearch placeholder="Digite aqui para procurar..."/> 
                        : 
                    <>
                        <LogoMarca source={logo}></LogoMarca>
                        <NomeApp>MATHEUS VIDEO</NomeApp>
                    </>
                }
            </Container>
            <ContainerSearch>
                <TouchableOpacity onPress={() => change_mode_search()}>
                    <Icon name="search" size={20} color="#F39422"></Icon>
                </TouchableOpacity>
            </ContainerSearch>
        </>
    )
}