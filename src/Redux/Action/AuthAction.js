import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const getData = () => {
    return async dispatch => {
        try {
            let res = await Axios.get('https://api.thecatapi.com/v1/images/search?limit=10',
                {headers:{
                    " X-Api-Key" : "743337bc-accc-41e9-a2f3-25b69da0acac"
                }}
            )
            
            // console.log(res.data)
            dispatch({
                type: 'GET_DATA',
                payload: res.data
            })
        } catch (error) {
            
        }
    }
}

export const loginAction = (data) => {
    console.log(data, 'loginaction')
    // return {
    //     type:'LOGIN', payload:data.username
    // }
    return async (dispatch) => {
        try {
            dispatch({
                type: 'LOGIN',
                payload: data.username
            })
            await AsyncStorage.setItem('username', JSON.stringify(data.username))
        } catch (error) {
            
        }
    }
}

export const keepLogin = () => {
    return async dispatch => {
        try {
            let data = await AsyncStorage.getItem('username')
            data = JSON.parse(data)
            console.log(data, 'keeploginaction')
            dispatch({
                type: 'LOGIN',
                payload: data
            })
        } catch (error) {
            
        }
    }
}

export const imageAction = (data) => {
    return async dispatch => {
        try {
            dispatch({
                type: 'IMAGE',
                payload: data
            })
        } catch (error) {
            
        }
    }
}

export const logoutAction = () => {
    return async dispatch => {
        try {
            dispatch({
                type: 'LOGOUT'
            })
            await AsyncStorage.removeItem('username')
        } catch (error) {
            
        }
    }
}