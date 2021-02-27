import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import Header from '../header/Header'
import BigButton from '../components/BigButton'

class OrderNavScreen extends React.Component {

componentDidMount(){
    // console.log(this.props.currentOrder)
}

// Need to get order info to check address and order details
// Need to get map and navigate button to get app to maps for navigation from current to location
// Need to get current location to check whether its right location 
// Need start shopping order button when current location is near store 

    render(){
        let current_order= this.props.currentOrder
        return(
            <View>
                <Header icon = "menu" styles = {{'backgroundColor': '#98fb98'}} navigation={this.props.navigation} />
                <View style = {styles.view}>
                  
                    <Text style = {styles.header}>
                        Head to Store
                    </Text>

                    <View style = {styles.map}>
                    </View>

                    <Text style = {styles.store_name}>
                        {current_order.attributes.store.name}
                    </Text>
                    <Text style = {styles.store_address}>
                        {`${current_order.address.street + ' ' + current_order.address.city + ', ' + current_order.address.state}`}
                    </Text>
                    
                    <BigButton color = "gray" text = "Navigate"/> 
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
    view: {
        padding: 15
    },
    map: {
        backgroundColor: 'blue',
        width: '100%',
        height: 200,
        marginTop: 20,
        borderRadius: 10
        
    },
    store_name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 20
    },
    store_address: {
        color: 'gray',
        marginTop: 5
    }
})

let mapStateToProps = state => {
    return{
        currentOrder: state.orders.current_order
    }
}

export default connect(mapStateToProps)(OrderNavScreen)