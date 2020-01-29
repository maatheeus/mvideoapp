import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import {KEY_API_YOUTUBE,KEY_API_DOWNLOAD_MOVIE} from '../config/define';

export default function* getVideosTopTrend(){
    let response = yield call(axios.get, `https://www.googleapis.com/youtube/v3/videos&key=${KEY_API_YOUTUBE}`);
    yield put({type: 'SET_NEW_TREDING',topTreding:[...response.data.items]});
}

export const getVideoInfoDownload = function*(action){
    let videoDownloadSeleted = yield call(axios.get, `http://localhost/videos?id_video=${action.id_video}&key=${KEY_API_DOWNLOAD_MOVIE}`);
    yield put({type: 'SET_NEW_VIDEO_DOWNLOAD',videoDownloadSeleted:videoDownloadSeleted.data});
}