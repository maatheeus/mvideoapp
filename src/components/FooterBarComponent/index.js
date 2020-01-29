import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import * as FooterBarComponent from './style'
const FooterBar = () => {
    const {menu,menu_active} = useSelector(state => state.menu_reducer);
    const dispatch = useDispatch();

    function alterar_menu(nome_menu){
        dispatch({type:'SET_NEW_ACTIVE_MENU',new_active_menu : nome_menu})
    }
    return (
        <>
        {menu_active ?
            <FooterBarComponent.Bar>
                {menu.map((item_menu,index)=> (
                    <FooterBarComponent.ItemBar key={index}>
                        <TouchableOpacity onPress={() => alterar_menu(item_menu.nome_menu)}> 
                            <Icon name={item_menu.icon_menu} size={item_menu.size_icon} color={item_menu.is_active ? '#F39422' : '#537EC5'}></Icon>
                        </TouchableOpacity>
                    </FooterBarComponent.ItemBar>
                ))}
            </FooterBarComponent.Bar> : null}
        </>
    )
}
export default FooterBar

