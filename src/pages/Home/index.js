import React from 'react';
import * as HomeComponents from './style';
import {useDispatch} from 'react-redux';
import LottieView from 'lottie-react-native';

import cloud from '../../assets/animation/cloud.json';

export default function Home(){
    const dispatch = useDispatch();
    dispatch({type:'SET_MENU_ACTIVE',menu_active : true})
    return (
        <HomeComponents.Container>
             <HomeComponents.ContainerCentralizado>
                 <LottieView  source={cloud} style={{width: 150}} resizeMode="contain" autoPlay loop/>
                <HomeComponents.TextDescricao>
                    Faça o download de vídeo e áudio do YouTube
                </HomeComponents.TextDescricao>
                
                <HomeComponents.TextLinkVideo placeholder="Cole aqui o link do seu video...">
                </HomeComponents.TextLinkVideo>


            </HomeComponents.ContainerCentralizado>
          
        </HomeComponents.Container>
    )
}