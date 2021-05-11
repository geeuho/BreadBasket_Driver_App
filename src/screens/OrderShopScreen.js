import React from 'react'
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import Header from '../header/Header'
import ShopBar from '../components/ShopBar'
import OrderItem from '../components/OrderItem'
import { updateOrderItems } from '../actions'

class OrderShopScreen extends React.Component {

    async componentDidMount(){
        console.log(this.props.orderId, "ORDER_IDDDD")
        await this.props.updateOrderItems(this.props.orderId)
        this.changeItems('todo')
    }

    componentDidUpdate(prevState){
        if(prevState.renderedItems !== this.state.renderedItems){
            console.log(this.state.currentList)
        }
    }

    constructor(props){
        super()
        this.state = {
            todoItems: [],
            renderedItems: [],
            currentList: null
        }
    }

    changeItems = (value) => {
        if(value === "todo") {
            this.setState({
                renderedItems: this.props.todoItems,
                currentList: 'todo'
            })
        } else if (value === "pending"){
            this.setState({
                renderedItems: this.props.reviewItems,
                currentList: 'pending'
            })
        } else if(value === "completed"){
            this.setState({
                renderedItems: this.props.completedItems,
                currentList: 'completed'
            })
        }
        this.setState({
            todoItems: this.props.todoItems
        })
    }

    renderEmptyList = () => {
        let text
        if(this.state.currentList === 'todo'){
            text = "Order Complete"
        } else if(this.state.currentList === 'pending'){
            text = "No Pending Items"
        } else if(this.state.currentList === 'completed'){
            text = "No Completed Items"
        }
        return <Text style = {styles.emptyText}>{text}</Text>
    }


//Need to create a tab bar for each of the item sections
//Tab bar triggers different list to render, not pages
//Any changes in list will be displayed 

    render(){

        return(
        <View>
            <Header icon = "menu" styles = {{'backgroundColor': '#98fb98'}} navigation={this.props.navigation} message = {true}/>
            <ShopBar changeItems = {this.changeItems} todoCount = {this.props.todoItems? this.props.todoItems.length: 0} reviewCount = {this.props.reviewItems? this.props.reviewItems.length: 0} completeCount = {this.props.completedItems ? this.props.completedItems.length : 0}/>
            <View style = {styles.categorySection}>
                <Text style = {styles.categoryText}> Section </Text>
            </View>
            <View style = {styles.screen}>
                {this.state.renderedItems.length > 0 ? 
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
                    :
                    <View style = {styles.emptyList}>
                        {this.renderEmptyList()}
                    </View>
                }
                {this.state.todoItems.length > 0 ? 
                    null
                    :
                    <TouchableOpacity style = {styles.reviewButton}>
                        <Text style = {styles.reviewText}>Review Order</Text>
                    </TouchableOpacity>
                }
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
    emptyText: {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 25
    },
    emptyList: {
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '83.2%'
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
    },
    reviewButton: {
        marginBottom: 15,
        padding: 20,
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3cb371'
    },
    reviewText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
})

let mapStateToProps = state => {
    return{
        orderId: state.orders.current_order.orderId,
        orderCount: state.orders.current_order.order_count,
        todoItems: state.orders.current_order.todo_items,
        reviewItems: state.orders.current_order.review_items,
        completedItems: state.orders.current_order.completed_items
    }
}

export default connect(mapStateToProps, {updateOrderItems})(OrderShopScreen)