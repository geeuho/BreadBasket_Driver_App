import React from 'react'
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import Header from '../header/Header'
import ShopBar from '../components/ShopBar'
import OrderItem from '../components/OrderItem'
import { updateOrderItems } from '../actions'

class OrderShopScreen extends React.Component {

    componentDidMount(){
        console.log(this.props.orderId, "ORDER_IDDDD")
        this.props.updateOrderItems(this.props.orderId)
    }

    constructor(props){
        super()
        this.state = {
            renderedItems: props.todoItems
        }
    }

    changeItems = (value) => {
        if(value === "todo") {
            this.setState({
                renderedItems: this.props.todoItems
            })
        } else if (value === "pending"){
            this.setState({
                renderedItems: this.props.reviewItems
            })
        } else if(value === "completed"){
            this.setState({
                renderedItems: this.props.completedItems
            })
        }
    }


//Need to create a tab bar for each of the item sections
//Tab bar triggers different list to render, not pages
//Any changes in list will be displayed 

    render(){

        return(
        <View>
            <Header icon = "menu" styles = {{'backgroundColor': '#98fb98'}} navigation={this.props.navigation} message = {true}/>
            <ShopBar changeItems = {this.changeItems} orderCount = {this.props.orderCount}/>
            <View style = {styles.categorySection}>
                <Text style = {styles.categoryText}> Section </Text>
            </View>
            <View style = {styles.screen}>
                <FlatList 
                    style = {styles.itemList}
                    data = {this.state.renderedItems} 
                    horizontal = {false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor = {item => item.id}
                    renderItem = {(current) => {    
                        let current_item = current.item.attributes.item
                        return (
                            <OrderItem key = {current.index} item = {current_item} order_item_id = {current.item.id} navigation = {this.props.navigation} count = {current.item.attributes.quantity_num}/>
                        )    
                    }}
                />
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        height: '74%'
    },
    categoryText: {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 20,
        marginLeft: 10
    },
    categorySection: {
        marginTop: -10,
        marginBottom: 10,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    itemList: {
        marginTop: -10
    }
})

let mapStateToProps = state => {
    return{
        orderId: state.orders.current_order.orderId,
        orderCount: state.orders.current_order.order_count,
        todoItems: state.orders.current_order.items,
        reviewItems: state.orders.current_order.review_items,
        completedItems: state.orders.current_order.completed_items
    }
}

export default connect(mapStateToProps, {updateOrderItems})(OrderShopScreen)