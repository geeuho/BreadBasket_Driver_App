import React  from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const OrderItem = (props) => {

    renderUnit = () => {
        if(props.item.quantity_unit === 'pound'){
            if(props.count > 1){
                return 'pounds'
            } else {
                return 'pound'
            }
        } else {
            return 'x'
        }
    }

    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <TouchableOpacity onPress = {() => props.navigation.push('ItemScan', {
            item: props.item,
            category: capitalize(props.item.category),
            count: props.count,
            order_item_id: props.order_item_id
        })}>
            <View style = {styles.section}>
                <Image style = {styles.image} source = {{uri: `${props.item.image}`}}></Image>
                <View style = {styles.itemInfo}>
                    <Text style = {{fontSize: 25 ,fontWeight: 'bold'}}>{props.count} {this.renderUnit()}</Text>
                    <Text style = {{fontSize: 20}}>{props.item.name}</Text>
                    <Text style = {{fontSize: 20, color:'gray'}}>{capitalize(props.item.category)}</Text>
                </View>
                <Icon style = {styles.icon} name = "chevron-right" size = {40}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    section: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'gray',
        padding: 20
    },
    image: {
        height: 150, 
        width: 150, 
        borderRadius: 10,
    },
    itemInfo: {
        marginLeft: 35,
        margin: 20
    },
    icon: {
        marginLeft: 50,
        marginTop: 50
    }
})

export default OrderItem