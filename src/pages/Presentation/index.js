import React from 'react';
import backgroundHeader from '../../assets/header.png';
import logo from '../../assets/logo.png';
import {TouchableOpacity} from 'react-native';
import {LogoSistema,DescricaoApp,NomeApp,Container,ImagemHeader,NomeNegrito,ContainerInformativo,NomeDescricao,ContainerDescricao,ContainerFooter} from './style';
export default class Presentation extends React.Component{
    static navigationOptions = {header: null}
    render(){
        const {navigate} = this.props.navigation;
        return (
            <Container>
                    <ImagemHeader source={backgroundHeader}>
                            <LogoSistema source={logo}></LogoSistema>
                            <NomeApp>MATHEUS VIDEO APP</NomeApp>
                            <DescricaoApp>THE BEST APP DOWNLOAD VIDEO</DescricaoApp>                    
                    </ImagemHeader>
                    <ContainerInformativo>
                        <NomeNegrito style={{textAlign: 'center',marginBottom: 30}}>PRINCIPAIS FUNCIONALIDADES</NomeNegrito>
                        <ContainerDescricao>
                            <NomeNegrito>Baixe um vídeo em vários formatos rapidamente</NomeNegrito>
                            <NomeDescricao>Nosso processo de download, conversão e distribuição é feito de forma totalmente assíncrona.</NomeDescricao>
                        </ContainerDescricao>
                        <ContainerDescricao>
                            <NomeNegrito>Ferramenta de busca, download e conversão intuitiva e fácil de usar</NomeNegrito>
                            <NomeDescricao>Estamos orgulhosos de ter desenvolvido o conversor de YouTube mais fácil de usar da Internet.</NomeDescricao>
                        </ContainerDescricao>
                        <ContainerDescricao>
                            <NomeNegrito>Gratuito e totalmente online, sem necessidade de registro ou instalação</NomeNegrito>
                            <NomeDescricao>Navegar e baixar vídeos em MP3 ou MP4 neste app é totalmente gratuito.</NomeDescricao>
                        </ContainerDescricao>
                    </ContainerInformativo>
                    <ContainerFooter>
                        <TouchableOpacity onPress={() => navigate('Home')}> 
                            <NomeNegrito>Próximo</NomeNegrito>
                        </TouchableOpacity>
                    </ContainerFooter>
            </Container>
        )
    }
}
