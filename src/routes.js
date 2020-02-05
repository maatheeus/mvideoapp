import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Presentation from './pages/Presentation';
import Home from './pages/Home';
import Search from './pages/Search';
import Download from './pages/Download';
import Historic from './pages/Historic';

import HeaderComponent from './components/HeaderComponent';


const TabNavigator = createBottomTabNavigator({
    Inicio : { 
        screen : Home,
        title : 'Inicio',
        navigationOptions: {
            tabBarIcon :  ({tintColor}) => <Icon name='home' size={25} color={tintColor} />
        }
    },
    Procurar : { 
        screen : Search,
        navigationOptions : { 
            tabBarIcon :  ({tintColor}) => <Icon name='search' size={25} color={tintColor} />
        }
    },

    Historico : { 
        screen : Historic,
        navigationOptions : { 
            tabBarIcon :  ({tintColor}) => <Icon name='history' size={25} color={tintColor} />
        }
    }
},{
    tabBarOptions : {
        activeTintColor: '#F39422',
        style : {
            backgroundColor : '#293A80'
        }
    }
})





// Home,
// Historic,
// Presentation,
// Search,
// Download

const Routes = createAppContainer(
    createStackNavigator({
        TabNavigator,
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