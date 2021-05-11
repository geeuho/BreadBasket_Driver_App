import React, {useEffect}  from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const OrderItem = (props) => {
    console.log(props.status, "PROPS FOR ORDER ITEM IDDDDDDDDD")

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
    
    renderItemView = (status) => {
        console.log(status)
        let section_style
        if(status === 'found'){
            section_style = styles.found_section
        } else if (status === 'refund_pending' || status === 'refunded'){
            section_style = styles.refunded_section
        } else if (status === 'replacement_pending' || status === 'replaced'){
            section_style = styles.replaced_section
        }

        return (
            <View style = {section_style}>
                <Image style = {styles.image} source = {{uri: `${props.item.image}`}}></Image>
                <View style = {styles.itemInfo}>
                    <Text style = {{fontSize: 25 ,fontWeight: 'bold'}}>{props.count} {this.renderUnit()}</Text>
                    <Text style = {{fontSize: 20}}>{props.item.name}</Text>
                    <Text style = {{fontSize: 20, color:'gray'}}>{capitalize(props.item.category)}</Text>
                </View>
                <Icon style = {styles.icon} name = "chevron-right" size = {40}/>
            </View>
        )
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
            {renderItemView(props.status)}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    found_section: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderLeftColor: 'green',
        padding: 20,
        borderLeftWidth: 10
    },
    refunded_section: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderLeftColor: 'red',
        padding: 20,
        borderLeftWidth: 10
    },
    replaced_section: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderLeftColor: 'gold',
        padding: 20,
        borderLeftWidth: 10
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