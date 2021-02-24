import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import { Card } from 'react-native-paper'

const OrderBox = props => {
    return(
        <TouchableOpacity onPress={() => 
            this.props.navigation.navigate('Order')
        }>
            <Card style = {styles.card}>
                <Card.Title titleStyle = {styles.cost} title={props.title}></Card.Title>
                <Card.Content>
                    <View style = {styles.delivery_info}>
                        <View>
                            <Image></Image>
                            <Text>8.1 miles</Text>
                        </View>
                        <View>
                            <Text>7 Items/8 Units</Text>    
                        </View>
                    </View>
                    <View style = {styles.border}></View>
                    <View style = {styles.store_info}>
                        <View>

                        </View>
                        <View>
                            <Text style = {styles.store_name}>Store City</Text>
                            <Text>Store Address</Text>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        </TouchableOpacity>
    )
}

let styles = StyleSheet.create({
    store_info: {
        display: 'flex',
        flexDirection: 'row'
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

