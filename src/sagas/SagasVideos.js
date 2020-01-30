import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import {KEY_API_YOUTUBE,KEY_API_DOWNLOAD_MOVIE} from '../config/define';

export default function* getVideosTopTrend(){
    let response = yield call(axios.get, `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=BR&maxResults=25&key=AIzaSyCMRT8C6yXP8JzgfkJoj4utGYlf3a6nUmI`);
    yield put({type: 'SET_NEW_TREDING',topTreding:[...response.data.items]});
}

export const getVideoInfoDownload = function*(action){
    let videoDownloadSeleted = yield call(axios.get, `http://10.0.0.104:8000/videos?id_video=${action.id_video}`);
    yield put({type: 'SET_NEW_VIDEO_DOWNLOAD',videoDownloadSeleted:videoDownloadSeleted.data});
}