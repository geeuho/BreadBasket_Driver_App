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
                <View style = {styles.store_info}>
                    <View>
                        <Image style = {styles.image} source = {{uri: `${props.store_img}`}}></Image>
                    </View>
                    <View style = {{marginLeft: 5}}>
                        <Text style = {styles.store_name} >{props.name}</Text>
                        <Text style = {styles.store_address}>Store Address</Text>
                    </View>
                </View>
            </Card.Content>
        </Card>
      
    )
}

let styles = StyleSheet.create({
    image: {
        height: 40,
        width: 40
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
    store_info: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    card: {
        margin: 15,
        paddingTop: 20
    },
    store_name: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    store_address: {
        fontSize: 15
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

