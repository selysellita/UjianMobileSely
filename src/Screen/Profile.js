import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const Profile = () => {
    let {username} = useSelector(state => state.Auth.username)
    let image = useSelector(state => state.Auth.image)
    console.log(image)
    return (
        <View style={styles.container}>
            {
                image?
                <View>
                    <Image 
                    source={{
                        uri: image
                    }}
                    style={styles.image}
                    />
                </View>
                :
                <View>
                <Image 
                source={require('../Assets/defaultpicture.png')}
                style={styles.image}
                />
                </View>
            }
            <Text>{username}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height:'100%',
        justifyContent: 'center',
        alignItems:'center'
    },
    image: {
        borderWidth: 2,
        width: 200,
        height: 200
    }
})

export default Profile;