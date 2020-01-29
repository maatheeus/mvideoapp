import {takeLatest, takeEvery} from 'redux-saga/effects';
import getVideosTopTrend, {getVideoInfoDownload} from '../sagas/SagasVideos';


export default function* startSaga(){
    yield takeEvery('SET_NEW_VIDEO_DOWNLOAD_SAGA',getVideoInfoDownload);
    yield takeLatest('GET_VIDEOS',getVideosTopTrend);
}