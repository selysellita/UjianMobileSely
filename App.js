import 'react-native-gesture-handler'
import React, { useEffect } from 'react';
// import MainNavigation from './src/Navigation/MainNavigator';
import { Provider, useSelector, useDispatch } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { reducer } from './src/Redux/Reducer';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './src/Navigation/TabNav';
import AuthStack from './src/Navigation/AuthStack';
import {keepLogin} from './src/Redux/Action'
import AsyncStorage from '@react-native-community/async-storage';
import HomeNavigation from './src/Navigation/HomeNavigation';

const store = createStore(reducer, {}, applyMiddleware(thunk))

const App = () => {
//   // const username = useSelector(state => state.auth.username)
//   const dispatch = useDispatch();

//   useEffect(() => {
//     AsyncStorage.getItem('username')
//     .then(res => {
//         console.log(res)
//         dispatch(keepLogin(res))
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }, [dispatch])

  return (
    <Provider store={store}>
        <HomeNavigation/>
    </Provider>
  );
};

export default App;