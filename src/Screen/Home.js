import React, { useEffect } from 'react';
import { View, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../Redux/Action/AuthAction';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
    let dataKucing = useSelector(state => state.Auth.dataKucing);
    let dispatch = useDispatch();
    // console.log(dataKucing)
    
    useEffect(() =>{
        dispatch( getData())
    }, [dispatch])

    return (
        <View style={{backgroundColor: 'whitesmoke', flex:1}}>
            <FlatList 
                keyExtractor={(item, index) => index.toString()}
                data={dataKucing}
                numColumns={2}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Detail', {detail: item})}
                        style={{backgroundColor: 'whitesmoke', flex:1}}
                    >
                        <Image
                        style={{width: 200, height: 200}}
                        source={{
                            uri: item.url
                        }}
                    />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};
const MapStateToProps=(state)=>{
    return{
        Auth:state.Auth
    }
}

export default Home;