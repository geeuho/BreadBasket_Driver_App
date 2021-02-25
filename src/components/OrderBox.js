import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import { Card } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const OrderBox = props => {
    return(
        <Card style = {styles.card}>
            <Card.Title titleStyle = {styles.cost} title={props.total}></Card.Title>
            <Card.Content>
                <View style = {styles.delivery_info}>
                    <View style = {styles.delivery_section}>
                        <Icon style = {{paddingRight: 5}} name = "truck" size = {20}></Icon> 
                        <Text>8.1 miles</Text>
                    </View>
                    <View style = {styles.delivery_section}>
                        <Icon style = {{paddingRight: 2}} name = "food-apple" size = {20}></Icon>
                        <Text>{props.orderCount} Items/ {props.unitCount} Units</Text>    
                    </View>
                </View>
                <View style = {styles.border}></View>
                <View style = {styles.row}>
                    <View>
                        <Image style = {styles.image} source = {`${props.store_img}`}></Image>
                    </View>
                    <View>
                        <Text style = {styles.image}>{props.address}</Text>
                        <Text>Store Address</Text>
                    </View>
                </View>
            </Card.Content>
        </Card>
      
    )
}

let styles = StyleSheet.create({
    image: {
        height: 5
    },  
    delivery_section: {
        paddingBottom: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
        
    },
    delivery_info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card: {
        margin: 15,
        padding: 10,
        paddingTop: 20
    },
    store_name: {
        fontSize: 20,
    },
    cost: {
        paddingTop: 20,
        fontSize: 40,
        fontWeight: 'bold'
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    }
})

export default OrderBox

