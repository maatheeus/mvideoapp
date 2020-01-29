import React,{useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from 'react-navigation-hooks'

import {Container,ListVideo} from './style';
import DownloadShimmer from './effects/shimmer';
import VideoItem from '../../components/VideoItem';

const Search = () =>{
    const dispatch = useDispatch();
    const { navigate } = useNavigation();
    const goScreenDownload = id => navigate("Download",{id_video : id});
    
    let top_trending = useSelector(state => state.video_reducer.topTreding)

    useEffect(_ => {dispatch({type: 'GET_VIDEOS'})},[]);

    if(!top_trending.is_complete) return <DownloadShimmer numRows={3}/>
    
    return (
        <Container>
            <ListVideo
                data={top_trending.videos}
                renderItem={({item}) => 
                <VideoItem key={item.id} 
                      id={item.id} 
                      onPress={goScreenDownload} 
                      description={item.snippet.description} 
                      url_thumbnail={item.snippet.thumbnails.medium.url} 
                      name_video={item.snippet.title}  />} />
        </Container>
    )
}

export default Search;