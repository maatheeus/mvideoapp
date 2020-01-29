import {createStore, combineReducers, applyMiddleware} from 'redux';
import {FooterBarReducer} from '../reducers/FooterBarReducer';
import createSagamiddleware from 'redux-saga';
import startSaga from '../config/sagas';
import {VideoReducer} from '../reducers/VideosReducer';
import {HeaderReducer} from '../reducers/HeaderReducer';

const sagaMiddleware = createSagamiddleware();
const Reducers = combineReducers({
    menu_reducer : FooterBarReducer,
    video_reducer : VideoReducer,
    header_reducer : HeaderReducer
})

export default createStore(Reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(startSaga);