const initialState = {topTreding: {videos : [], is_complete : false}, videoDownloadSeleted: {formato_selecionado : '', link_video: '',picker_selecionado : 'audio',is_complete : false, videos : {}}}

export const VideoReducer = (state = initialState,action) => {
    switch(action.type){
        case 'SET_NEW_TREDING':
           return{
               ...state,
               topTreding: {videos : action.topTreding, is_complete : true}
           }
        case 'SET_NEW_VIDEO_DOWNLOAD':
            return{
                ...state,
                videoDownloadSeleted : {...state.videoDownloadSeleted,is_complete : true,videos : action.videoDownloadSeleted}
            }
        case 'START_INFO_VIDEO_DOWNLOAD':
            return{
                ...state,
                videoDownloadSeleted : {...state.videoDownloadSeleted,is_complete:false, videos : []}
            }
        case 'ALTER_PICKER':
            return{
                ...state,
                videoDownloadSeleted: {...state.videoDownloadSeleted, picker_selecionado : action.itemValue}
            }
        case 'ALTER_URL':
            return{
                ...state,
                videoDownloadSeleted: {...state.videoDownloadSeleted, link_video : action.itemValue}
            }
        case 'ALTER_FORMATO_SELECIONADO':
            return{
                ...state,
                videoDownloadSeleted: {...state.videoDownloadSeleted, formato_selecionado : action.itemValue}
            }
        default:
            return state
    }
}