import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const OrderItem = (props) => {

    renderUnit = () => {
        if(props.unit === 'pound'){
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
        <View style = {styles.section}>
            <Image style = {styles.image} source = {{uri: `${props.image}`}}></Image>
            <View style = {styles.itemInfo}>
                <Text style = {{fontSize: 25 ,fontWeight: 'bold'}}>{props.count} {this.renderUnit()}</Text>
                <Text style = {{fontSize: 20}}>{props.name}</Text>
                <Text style = {{fontSize: 20, color:'gray'}}>{capitalize(props.category)}</Text>
            </View>
            <Icon style = {styles.icon} name = "chevron-right" size = {40}/>
        </View>
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