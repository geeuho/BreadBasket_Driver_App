import React from 'react'
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import Header from '../header/Header'

class OrderShopScreen extends React.Component {

    componentDidMount(){
        console.log(this.props.navigation, this.props.currentOrder.screen)
    }

    constructor(){
        super()
        this.state = {
            selected: null
        }
    }

    renderTabStyle(value){
        if(value === this.state.selected){
            return {
                color: 'green'
            }
        } else {
            return {
                color: 'gray'
            }
        }
    }

    pressTab(value){
        this.setState({
            selected: value
        })
    }

//Need to create a tab bar for each of the item sections
//Tab bar triggers different list to render, not pages
//Any changes in list will be displayed 

    render(){

        return(
        <View>
            <Header icon = "menu" styles = {{'backgroundColor': '#98fb98'}} navigation={this.props.navigation} />
            <View style = {styles.tabsView}>
                <TouchableOpacity onPress = {() => this.pressTab('todo')}>
                    <View style = {styles.tab}>
                        <Text style = {this.renderTabStyle('todo')}>
                            To-do
                        </Text>    
                    </View>
                </TouchableOpacity> 
                <TouchableOpacity onPress = {() => this.pressTab('pending')}>
                    <View style = {styles.tab}>
                        <Text style = {this.renderTabStyle('pending')}>
                            Pending
                        </Text>    
                    </View> 
                </TouchableOpacity> 
                <TouchableOpacity onPress = {() => this.pressTab('completed')}>
                    <View style = {styles.tab}>
                        <Text style = {this.renderTabStyle('completed')}>
                            Completed
                        </Text>    
                    </View>   
                </TouchableOpacity> 
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 30
    },
    tabsView: {
        display: "flex",
        flexDirection: "row",

    },
    tab: {
        width: 150,
        
    },
    tabText: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 20
    }
})

let mapStateToProps = state => {
    return{
        currentOrder: state.orders.current_order,
    }
}

export default connect(mapStateToProps)(OrderShopScreen)