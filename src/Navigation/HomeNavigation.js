import 'react-native-gesture-handler'
import React, { useEffect } from 'react';
// import MainNavigation from './src/Navigation/MainNavigator';
import {  useSelector, useDispatch, connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './TabNav';
import AuthStack from './AuthStack';
import {keepLogin} from './../Redux/Action'
import AsyncStorage from '@react-native-community/async-storage';



const HomeNavigation = ({Auth}) => {
    let username = Auth.username
    let dispatch = useDispatch();
    console.log(username, 'keeplogin')
    useEffect(() => {
        AsyncStorage.getItem('username')
        .then(res => {
            // console.log(res)
            dispatch(keepLogin(res))
        })
        .catch(err => {
            console.log(err)
        })
    }, [dispatch])

    return (
        <NavigationContainer>
            {
                username
                ?
                <TabNav />
                :
                <AuthStack />
            }
        </NavigationContainer>
    );
};

const MapstateToProps=(state)=>{
    return{
        Auth:state.Auth
    }
}

export default connect(MapstateToProps) (HomeNavigation);