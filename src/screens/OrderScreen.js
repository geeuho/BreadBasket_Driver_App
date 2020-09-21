import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const OrderScreen = props => {
    return(
        <View>
            <Text style = {styles.textStyle}>Orders</Text>
            <TouchableOpacity onPress={() => 
                props.navigation.navigate('Home')
            }>
                <Text>Back To Home</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30
    }
})
export default OrderScreen