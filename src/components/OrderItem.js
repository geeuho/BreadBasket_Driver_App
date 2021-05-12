import React, {useEffect}  from 'react'
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
    
    renderItemView = (status) => {
        console.log(status)
        let section_style
        let image_style
        let text_style
        let element
        if(status === 'pending'){
            section_style = styles.pending_section
            image_style = styles.pending_image
            item_info_style = styles.pending_info
            element = <TouchableOpacity onPress = {() => props.navigation.push('ItemScan', {
                item: props.item,
                category: capitalize(props.item.category),
                count: props.count,
                order_item_id: props.order_item_id
            })}>
                <View style = {section_style}>
                    <Image style = {image_style} source = {{uri: `${props.item.image}`}}></Image>
                    <View style = {item_info_style}>
                        <Text style = {{fontSize: 25 ,fontWeight: 'bold'}}>{props.count} {this.renderUnit()}</Text>
                        <Text style = {{fontSize: 20}}>{props.item.name}</Text>
                        <Text style = {{fontSize: 20, color:'gray'}}>{capitalize(props.item.category)}</Text>
                    </View>
                    <Icon style = {styles.icon} name = "chevron-right" size = {40}/>
                </View>
            </TouchableOpacity>
        } else if(status === 'found'){
            section_style = styles.found_section
            image_style = styles.completed_image
            item_info_style = styles.completed_info
            element = <TouchableOpacity onPress = {() => props.navigation.push('ItemScan', {
                item: props.item,
                category: capitalize(props.item.category),
                count: props.count,
                order_item_id: props.order_item_id
            })}>
                <View style = {section_style}>
                    <Image style = {image_style} source = {{uri: `${props.item.image}`}}></Image>
                    <View style = {styles.item_info_column}>
                        <Text style = {{marginRight: 10, fontSize: 15 ,fontWeight: 'bold'}}>Found</Text>
                        <View style = {item_info_style}>
                            <Text style = {{marginRight: 5, fontSize: 20 ,fontWeight: 'bold'}}>{props.count} {this.renderUnit()}</Text>
                            <Text style = {{marginRight: 5, fontSize: 20}}>{props.item.name}</Text>
                            <Text style = {{fontSize: 20, color:'gray'}}>{capitalize(props.item.category)}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        } else if (status === 'refund_pending' || status === 'refunded'){
            section_style = styles.refunded_section
            image_style = styles.completed_image
            item_info_style = styles.completed_info
            element = <TouchableOpacity onPress = {() => props.navigation.push('ItemScan', {
                item: props.item,
                category: capitalize(props.item.category),
                count: props.count,
                order_item_id: props.order_item_id
            })}>
                <View style = {section_style}>
                    <Image style = {image_style} source = {{uri: `${props.item.image}`}}></Image>
                    <View style = {item_info_style}>
                        <Text style = {{marginRight: 5, fontSize: 20 ,fontWeight: 'bold'}}>{props.count} {this.renderUnit()}</Text>
                        <Text style = {{marginRight: 5, fontSize: 20}}>{props.item.name}</Text>
                        <Text style = {{fontSize: 20, color:'gray'}}>{capitalize(props.item.category)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        } else if (status === 'replacement_pending' || status === 'replaced'){
            image_style = styles.completed_image
            section_style = styles.replaced_section
            item_info_style = styles.completed_info
            element = <TouchableOpacity onPress = {() => props.navigation.push('ItemScan', {
                item: props.item,
                category: capitalize(props.item.category),
                count: props.count,
                order_item_id: props.order_item_id
            })}>
                <View style = {section_style}>
                    <Image style = {image_style} source = {{uri: `${props.item.image}`}}></Image>
                    <View style = {item_info_style}>
                        <Text style = {{marginRight: 5, fontSize: 20 ,fontWeight: 'bold'}}>{props.count} {this.renderUnit()}</Text>
                        <Text style = {{marginRight: 5, fontSize: 20}}>{props.item.name}</Text>
                        <Text style = {{fontSize: 20, color:'gray'}}>{capitalize(props.item.category)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        }
        return element
    }

    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        renderItemView(props.status)
    )
}

const styles = StyleSheet.create({
    found_section: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderLeftColor: 'green',
        padding: 20,
        borderLeftWidth: 5
    },
    refunded_section: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderLeftColor: 'red',
        padding: 20,
        borderLeftWidth: 5
    },
    replaced_section: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderLeftColor: 'gold',
        padding: 20,
        borderLeftWidth: 5
    },
    pending_section: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        padding: 20,
    },
    pending_image: {
        height: 150, 
        width: 150, 
        borderRadius: 10,
    },
    completed_image:{
        height: 70,
        width: 70,
        borderRadius: 10
    },
    pendingInfo: {
        marginLeft: 35,
        margin: 20
    },
    completed_info: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: 35,
        marginTop: 5
    },
    item_info_column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    icon: {
        marginLeft: 50,
        marginTop: 50
    }
})

export default OrderItem