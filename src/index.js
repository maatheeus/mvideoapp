import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';
import FooterBar from './components/FooterBarComponent/';
import {Provider} from 'react-redux';
import store from './store/index';
export default function App(){
    return (
        <Provider store={store}>  
            <StatusBar backgroundColor="#010038"></StatusBar>
            <Routes />
            <FooterBar></FooterBar>
        </Provider>
    )
}