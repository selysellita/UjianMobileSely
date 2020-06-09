import React, { useState } from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { loginAction } from '../Redux/Action';

const Login=({navigation,loginAction})=>{
    const [username, setUsername] = useState('');
    return(
        <View style={styles.container} >
            <StatusBar backgroundColor='#828282' />
            <Icon type="material" name="android" color="#3ded97" size={200} style={{marginBottom:10}} />
            <Input 
                
                placeholder="Input Username"
                onChangeText={e => setUsername(e)}
            />
            <View>
                <Button 
                    title="LOGIN"
                    containerStyle={{
                        alignItems: 'center',
                        color:'#32612d'
                    }}
                    buttonStyle={{
                        backgroundColor: '#3ded97',
                        // width: '15%'
                    }}
                    onPress={() => {loginAction({username})}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
container: {
    backgroundColor:'#c7c6c1',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
}
})


export default connect(null, {loginAction}) (Login);