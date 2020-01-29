import React,{useEffect} from 'react'

import {Picker} from 'react-native'
import {useNavigation,useNavigationParam} from 'react-navigation-hooks';
import {useDispatch, useSelector} from 'react-redux';

// import AsyncStorage from '@react-native-community/async-storage';

import {downloadFile} from '../../helpers/Download.helper';
import VideoItem from '../../components/VideoItem';
import ItemDownload from './components/ItemDownload';
import {Loading,Container,ListFomarts,SelectType} from './style';

const Download = () => {   
    useEffect(() => {dispatch({type: 'SET_NEW_VIDEO_DOWNLOAD_SAGA', id_video})},[])

    const dispatch = useDispatch();   
    const id_video =  useNavigationParam('id_video');
    const { goBack } = useNavigation();
   
    let info_video_download = useSelector(state => state.video_reducer.videoDownloadSeleted);
    let type_quality = info_video_download.picker_selecionado == 'audio' ? info_video_download.videos.audio : info_video_download.videos.video;
    
    const start_download_file_back_page = (link,name,format) => {
        downloadFile(link,name,format);
        goBack();
    }

    if(!info_video_download.is_complete) return <Loading size="large" color="#F39422" />
     return (
        <Container>
            <VideoItem 
                id={id_video} 
                onPress={_ => false}
                description={info_video_download.videos.description} 
                url_thumbnail={info_video_download.videos.thumbnail} 
                name_video={info_video_download.videos.title} />

            <Picker selectedValue={info_video_download.picker_selecionado} onValueChange={itemValue => dispatch({type:'ALTER_PICKER', itemValue})}>
                <Picker.Item label = "Audio" value = "audio" />
                <Picker.Item label = "Video" value = "video" />
            </Picker>

            <ListFomarts 
                data={type_quality.links}
                renderItem={({item}) => <ItemDownload key={item.link} onPress={() => start_download_file_back_page(item.url,info_video_download.videos.title,item.format)}  text={item.information}/>}
            />
        </Container>
    )
}
export default Download;