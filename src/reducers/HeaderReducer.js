const initState = {search_active : false, value_search : 'TESTE'}

export const HeaderReducer = (state = initState, action) => {
    switch(action.type){
        case 'ACTIVE_SEARCH_MODE_CHANGE':
            return {
                ...state,
                search_active : !state.search_active
            }
        default:
            return state;
    }
} 