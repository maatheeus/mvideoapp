import RNFetchBlob from 'rn-fetch-blob'
import {ToastAndroid} from 'react-native'
export const downloadFile = (link,title,format, dirs) => {
    
    ToastAndroid.show(`O download do arquivo '${title}.${format}' foi iniciado. `, ToastAndroid.LONG);
    RNFetchBlob
    .config({
        addAndroidDownloads : {
            useDownloadManager : true,
            notification : true,
            path : dirs + `/${title}.${format}`,
            description : 'Mvideos Download.'
        }
    })
    .fetch('GET', link)
    .catch((error) => {
        // CRIAR TRATAMENTO DE ERRO
        console.log(error);
    })
    .then((resp) => {
        resp.path()
    })

    
}