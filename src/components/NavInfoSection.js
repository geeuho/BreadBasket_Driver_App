import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const NavInfoSection = ({letter, name, order_count, unit_count}) => {
    // {current_order.order_count} items • {current_order.unit_count} units Allen Shin
    return (
        <View style = {styles.order_info}>
            <View style = {styles.row}>
                <View style = {styles.order_letter}>
                    <Text style = {{fontWeight: 'bold', color: "white"}}>{letter}</Text>
                </View>
                <View>
                    <Text style = {styles.shopper_name}>{name}</Text>
                    <Text style = {styles.order_count}>{order_count} items • {unit_count} units</Text>
                </View>
            </View>
            <Icon name = "chevron-right" size = {30}></Icon>
        </View>

    )
}
const styles = StyleSheet.create({
    shopper_name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    order_count: {
        color: 'gray',
        marginTop: 5
    },
    order_info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginLeft: 20
    },
    order_letter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 5,
        right: 7,
        borderRadius: 10,
        width: 20,
        height: 20,
        backgroundColor: '#3cb371'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
})

export default NavInfoSection