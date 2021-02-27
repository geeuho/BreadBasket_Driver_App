import React from 'react'
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import Header from '../header/Header'
import ShopBar from '../components/ShopBar'

class OrderShopScreen extends React.Component {

    componentDidMount(){
        console.log(this.props.navigation, this.props.currentOrder.screen)
    }

    constructor(){
        super()
        this.state = {
            renderedItems: []
        }
    }

    changeItems = (value) => {
        console.log(value)
    }

    renderItems = () => {
        return(
            <FlatList>

            </FlatList>
        ) 
    }

//Need to create a tab bar for each of the item sections
//Tab bar triggers different list to render, not pages
//Any changes in list will be displayed 

    render(){

        return(
        <View>
            <Header icon = "menu" styles = {{'backgroundColor': '#98fb98'}} navigation={this.props.navigation} />
            <ShopBar changeItems = {this.changeItems} orderCount = {this.props.currentOrder.order_count}/>
            {this.renderItems()}
        </View>
        )
    }
}

const styles = StyleSheet.create({
    
})

let mapStateToProps = state => {
    return{
        currentOrder: state.orders.current_order,
    }
}

export default connect(mapStateToProps)(OrderShopScreen)