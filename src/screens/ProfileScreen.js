import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ProfileScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Profile</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})
export default ProfileScreen