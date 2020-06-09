import React from 'react';
import {View,StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    centerstyle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

const Center=({children})=>(
    <View style={styles.centerstyle}>
      {children}
    </View>
)


export default Center