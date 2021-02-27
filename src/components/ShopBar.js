import React from 'react'
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native'

class ShopBar extends React.Component {

    constructor(){
        super()
        this.state = {
            selected: 'todo'
        }
    }

    pressTab(value){
        this.setState({
            selected: value
        })
        this.props.changeItems(value)
    }
    renderTabText(value){
        if(value === this.state.selected){
            return {
                fontSize: 20,
                color: 'green'
            }
        } else {
            return {
                fontSize: 20,
                color: 'gray'
            }
        }
    }

    renderTabStyle(value){
        if(value === this.state.selected){
            return {
                width: 139,
                borderBottomWidth: 2,
                borderColor: 'green',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 12
            }
        } 
    }

    render(){
        return (
            <View style = {styles.tabsView}>
                    <TouchableOpacity onPress = {() => this.pressTab('todo')}>
                        <View style = {styles.tab}>
                            <View style = {this.renderTabStyle('todo')}>
                                <Text style = {this.renderTabText('todo')}>
                                    {this.props.orderCount} To-do
                                </Text>    
                            </View>
                        </View>
                    </TouchableOpacity> 
                    <TouchableOpacity onPress = {() => this.pressTab('pending')}>
                        <View style = {styles.tab}> 
                            <View style = {this.renderTabStyle('pending')}>
                                <Text style = {this.renderTabText('pending')}>
                                    Pending
                                </Text>    
                            </View> 
                        </View>  
                    </TouchableOpacity> 
                    <TouchableOpacity onPress = {() => this.pressTab('completed')}>
                        <View style = {styles.tab}>
                            <View style = {this.renderTabStyle('completed')}>
                                <Text style = {this.renderTabText('completed')}>
                                    Completed
                                </Text>    
                            </View>   
                        </View>
                    </TouchableOpacity> 
                </View>
        )

    }
}

let styles = StyleSheet.create({
    tab: {
        width: 138,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
        
    },
    tabText: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 20
    },
    tabsView: {
        display: "flex",
        flexDirection: "row",

    },
})

export default ShopBar