import React from 'react'
import Header from "../navigation/Header"
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const EarningsScreen = props => {
    return (
        <View>
            <Header navigation={props.navigation} />
            <Text style={styles.textStyle}>Earnings</Text>
            <TouchableOpacity onPress={() =>
                props.navigation.navigate('Home')
            }>
                <Text>Back To Home</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})
export default EarningsScreen 