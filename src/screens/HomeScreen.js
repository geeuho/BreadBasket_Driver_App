import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Home = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Home</Text>
        </View>
    )

    const styles = StyleSheet.create({
        textStyle: {
            fontSize: 30
        }
    })
}

export default Home