import React from 'react'
import Header from "../navigation/Header"
import OrderBox from '../components/OrderBox'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

class OrderScreen extends React.Component {

    

    render(){
        return(
            <View>
                <Header navigation={this.props.navigation} title = {"Active Orders"}/>
                <OrderBox title = "$13.85"/> 
                <OrderBox title = "$24.35"/>
                <Text style = {styles.textStyle}>Orders</Text>
                <TouchableOpacity onPress={() => 
                    this.props.navigation.navigate('Home')
                }>
                    <Text>Back To Home</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30
    }
})
export default OrderScreen