import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Presentation from './pages/Presentation';
import Home from './pages/Home';
import Search from './pages/Search';
import Download from './pages/Download';
import Historic from './pages/Historic';

import HeaderComponent from './components/HeaderComponent';

const Routes = createAppContainer(
    createStackNavigator({
        Search,
        Presentation,
        Home,
        Download
    },{
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor:"#293A80"
            },
            headerTitle: <HeaderComponent></HeaderComponent>
        }
    })
);

export default Routes;