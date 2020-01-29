const initialState = {menu:[{
    nome_menu: 'Home',
    icon_menu: 'home',
    size_icon: 25,
    is_active: true
},{
    nome_menu: 'Search',
    icon_menu: 'search',
    size_icon: 25,
    is_active: false,
},
{
    nome_menu: 'History',
    icon_menu: 'history',
    size_icon: 25,
    is_active: false
}], menu_active : true}

export const FooterBarReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_NEW_ACTIVE_MENU':
            return{
                ...state,
                menu:state.menu.map(item_menu => {
                    item_menu.is_active = (item_menu.nome_menu == action.new_active_menu);
                    return item_menu;
                })
            }
        case 'SET_MENU_ACTIVE':
            return{
                ...state,
                menu_active: action.menu_active
            }
        default:
            return state;
    }
}