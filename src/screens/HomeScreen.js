import React from 'react'
import Header from '../header/Header'
import Section from '../components/Section'
import Box from '../components/Box'
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image} from 'react-native'
import {connect} from 'react-redux'
import {getStores, getActiveOrders} from '../actions'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



class HomeScreen extends React.Component {
    constructor(props){
        super()
        this.state = {
            active_orders_length: props.active_orders.length
        }
    }
    
    componentDidMount(){
        this.props.getStores()
        this.props.getActiveOrders()
        console.log(this.props.active_orders)
    } 

    componentDidUpdate(prevState){
        if(this.props.active_orders !== prevState.active_orders){
            this.setState({
                active_orders_length: this.props.active_orders.length
            })
        }
    }
    

    render(){
        return (
            <View style = {styles.screen}>
                <Header icon = "menu" navigation = {this.props.navigation} title = {'Home'}/>
                <ScrollView>
                    
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Orders')
                    }}>
                        <Section navigation = {this.props.navigation} title = "Current Orders">
                            <View style = {styles.orders}>
                                <Icon name = "cart" size = {30}></Icon>
                                <Text style={{fontSize: 30 }}>{this.state.active_orders_length > 0 ? `${this.state.active_orders_length} Orders Available` : 'No Active Orders'}</Text>
                            </View>
                            <Text style= {{marginTop: 5}}>{this.state.active_orders_length > 0 ? "View Orders" : "We'll notify you when orders are available"}</Text>
                        </Section>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('About')
                    }}>
                        <Box>
                            <View style = {styles.section}>
                                <Text>Welcome to BreadBasket Driver</Text>
                            </View>
                        </Box>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Orders')
                    }}>
                        <Box>
                            <View style = {styles.section}>
                                <View>
                                    <Text style = {{fontSize: 20}}>Welcome to BreadBasket Driver!</Text>
                                </View>
                                    <Text style = {{fontSize: 15, marginTop: 10, color: 'gray', textAlign: 'center'}}>If this is your first time driving with us, here's some important information.</Text>
                                <View>
                                </View>
                            </View>
                        </Box>
                    </TouchableOpacity>
                    
                </ScrollView>
            </View>
        )

    }

}

const styles = StyleSheet.create({
    screen: {
        height: '100%'
    },
    header: {
        display: 'flex',
        justifyContent: 'center'
    },
    orders: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    margin: {
        marginVertical: 50
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

let mapStateToProps = state => {
    return({
        stores: state.stores,
        active_orders: state.orders.active_orders
    })
}

export default connect(mapStateToProps, {getStores, getActiveOrders})(HomeScreen)