import React from 'react'
import {View, ScrollView, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Header from '../header/Header'
import BigButton from '../components/BigButton'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux'
import {changeOrderItemStatus} from '../actions'


class CantFindScreen extends React.Component {
    componentDidMount(){
        console.log(this.props.route.params)
    }

    renderUnit = () => {
        if(this.props.route.params.item.quantity_unit === 'pound'){
            if(this.props.count > 1){
                return 'pounds'
            } else {
                return 'pound'
            }
        } else {
            return 'x'
        }
    }

    replaceItem = () => {
        this.props.changeOrderItemStatus(order_item_id, 'replacement_pending')

    }

    refundItem = () => {
        this.props.changeOrderItemStatus(order_item_id, 'refund_pending')

    }
    
    render(){
        let item = this.props.route.params.item
        return(
            <View>
                <Header navigation = {this.props.navigation}styles = {{'backgroundColor': '#98fb98'}} icon = "chevron-left" message = {true}/>
                <ScrollView>
                    
                
                <View style = {styles.topSection}>
                    <Image style = {styles.image} source = {{uri: `${item.image}`}}></Image>
                    
                    <View style = {styles.itemSection}>
                        <Text style = {{fontSize: 20, fontWeight: 'bold', marginBottom: 3}}>
                            {this.props.route.params.item_count} {this.renderUnit()} {item.name}
                        </Text>
                        <Text>
                            ${(item.price /100).toFixed(2)}
                        </Text>
                    </View>
                    

                </View>

                <View style = {styles.border}>
                </View>
                <View style = {styles.centerSection}>
                    <Text style = {styles.header}>Suggest a Replacement</Text>
                    <View style = {styles.section}>
                        <View style = {{marginBottom: 10}}>
                            <Text style = {styles.intro}>Look for something with:</Text>
                        </View>
                        <View style = {styles.textRow}>
                            <Icon name = "shopping" size = {25}/> 
                            <Text style = {{marginLeft: 10, fontSize: 20}}>Similar brand name</Text>
                        </View>
                        <View style = {styles.textRow}>
                            <Icon name = "arrow-left-right" size = {25}/>
                            <Text style = {{marginLeft: 10, fontSize: 20}}>Different flavor or size</Text>
                        </View>
                        <View style = {styles.textRow}>
                            <Icon name = "cash" size = {25}/>
                            <Text style = {{marginLeft: 10, fontSize: 20}}>Cheaper than ${(item.price /100).toFixed(2)} per unit</Text>
                        </View>

                    </View>
                    <View style = {{marginTop: 10, marginBottom: 10}}>
                        <BigButton color = 'green' text = "Select a Replacement" onPressAction = {() => this.replaceItem()}/> 
                    </View>
                    <TouchableOpacity>
                        <Text style = {{marginBottom: 10, color: 'green', fontSize: 15}}>
                            Message Customer
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style = {{color: 'green', fontSize: 15}}>
                            Share a Photo
                        </Text>
                    </TouchableOpacity>
                </View>
                    <View style = {styles.border}>
                    </View> 
                    <View style = {styles.bottomSection}>
                        <Text style = {styles.header}>Refund Item</Text> 
                        <View style = {styles.section}>
                            <View style = {{marginBottom: 20}}>
                                <Text style = {styles.intro}>If you can't find a proper replacement: </Text>
                            </View>
                        </View>
                        <BigButton color = 'green' text = "Refund Item" onPressAction = {() => this.refundItem()}/>
                    </View>
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    intro: {
        fontSize: 15
    },
    header: {
        fontWeight: 'bold',
        fontSize: 30
    },
    section: {
        marginTop: 20,
        marginBottom: 20
    },
    itemSection: {
        display: 'flex',
        margin: 10
    },
    textRow: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    topSection: {
        padding: '3%',
        display: 'flex',
        flexDirection: 'row'
    },  
    centerSection: {
        padding: '3%',
        margin: '2%'
    },
    bottomSection: {
        padding: '3%',
        margin: '2%'
    },
    border: {
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        width: '93%'
    },
    image: {
        height: 150, 
        width: 150, 
        borderRadius: 10,
    },
})

export default connect(null, {changeOrderItemStatus})(CantFindScreen)