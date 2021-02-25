import React from 'react'
import Header from "../header/Header"
import { Text, View, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

let imageURL = { uri: 'https://popmenucloud.com/bpwgoysv/e84c0f4a-9442-40c4-a58f-389187fb960b'}

const ProfileScreen = props => {
    return (
        <View>
            <Header navigation={props.navigation} />
            <Text style={styles.textStyle}>Profile</Text>
            <Image source = {imageURL} style = {styles.imageStyle}></Image>
            <TouchableOpacity>
                <View
                    accessible= {true}
                    accessibilityLabel="Tap Me!"
                >
                    <Text>Tap me!</Text>
                </View>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    imageStyle: {
        height: 200,
        resizeMode: 'stretch',
        margin: 5
    }

})
export default ProfileScreen