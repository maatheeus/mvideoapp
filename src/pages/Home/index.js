import React from 'react';
import * as HomeComponents from './style';
import {useDispatch} from 'react-redux';

export default function Home(){
    const dispatch = useDispatch();
    dispatch({type:'SET_MENU_ACTIVE',menu_active : true})
    return (
        <HomeComponents.Container>
             <HomeComponents.ContainerCentralizado>
                <HomeComponents.TextDescricao>
                    Faça o download de vídeo e áudio do YouTube
                </HomeComponents.TextDescricao>
                
                <HomeComponents.TextLinkVideo placeholder="Cole aqui o link do seu video...">
                </HomeComponents.TextLinkVideo>

                <HomeComponents.TextTermsOfUse>
                    Ao usar nosso serviço, você aceita nossos termos de uso.
                </HomeComponents.TextTermsOfUse>
            </HomeComponents.ContainerCentralizado>
          
        </HomeComponents.Container>
    )
}