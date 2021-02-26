import React from 'react'
import {View, Image, StyleSheet, Text} from 'react-native'

const OrderItemImage = props => {
    return(
        <View >
            <Image style = {styles.image} source = {{uri: `${props.image}`}}></Image>
            <View style = {styles.textView}>
                <Text style = {styles.text}>{props.count}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        height: 50, 
        width: 50, 
        marginRight: 15, 
        borderRadius: 10
    },
    textView: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 20,
        right: 1,
        borderRadius: 10,
        width: 20,
        height: 20,
        backgroundColor: '#3cb371'
    },
    text: {
        fontWeight: 'bold', 
        color: "white"
    }
        
})

export default OrderItemImage