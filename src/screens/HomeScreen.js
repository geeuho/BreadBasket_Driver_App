import React from 'react'
import Header from '../header/Header'
import Section from '../components/Section'
import Box from '../components/Box'
import GreenButton from '../components/GreenButton'
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
        let hello
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
                                <Text style={{fontSize: 30, marginLeft: 10 }}>{this.state.active_orders_length > 0 ? `${this.state.active_orders_length} Orders Available` : 'No Active Orders'}</Text>
                            </View>
                            <Text style= {{marginTop: 10}}>{this.state.active_orders_length > 0 ? "View Orders" : "We'll notify you when orders are available"}</Text>
                        </Section>
                    </TouchableOpacity>
                    
                    <Box>
                        <View style = {styles.section}>
                            <View style = {{height: 150, width: 225, marginBottom: 30, marginTop: 30}}>
                                <Image style = {styles.header_image} source = {require('../images/Home_about.jpeg')}></Image>
                            </View>
                            <View>
                                <Text style = {{fontSize: 20}}>Welcome to BreadBasket Driver!</Text>
                            </View>
                            <View>
                                <Text style = {{fontSize: 15, marginTop: 10, marginBottom: 15, color: 'gray', textAlign: 'center'}}>If this is your first time driving with us, here's some important information.</Text>
                            </View>
                        </View>
                        <GreenButton text = "About Page"/> 
                    </Box>

                    <Box>
                        <View style = {styles.section}>
                            <View style = {{height: 100, width: 100, marginBottom: 30, marginTop: 30, top: 0}}>
                                <Image style = {styles.header_image} source = {require('../images/Home_earnings.png')}></Image>
                            </View>
                            <View>
                                <Text style = {{fontSize: 20}}>Stripe Payout System</Text>
                            </View>
                            <View>
                                <Text style = {{fontSize: 15, marginTop: 10, marginBottom: 15, color: 'gray', textAlign: 'center'}}>Learn about our Stripe Payout System, and how earnings are calculated</Text>
                            </View>
                        </View>
                        <GreenButton text = "How you earn"/> 
                    </Box>
                    <Box>
                        <View style = {styles.section}>
                            <View style = {{height: 140, width: 120, marginBottom: 30, marginTop: 30, top: 0}}>
                                <Image style = {styles.header_image} source = {require('../images/Home_shopping.png')}></Image>
                            </View>
                            <View>
                                <Text style = {{fontSize: 20}}>Complete Orders</Text>
                            </View>
                            <View>
                                <Text style = {{fontSize: 15, marginTop: 10, marginBottom: 15, color: 'gray', textAlign: 'center'}}>A step-by-step guide on how to complete BreadBasket orders</Text>
                            </View>
                        </View>
                        <GreenButton text = "Order Tutorial"/> 
                    </Box>
                    
                    
                </ScrollView>
            </View>
        )

    }

}

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        paddingBottom: 50
    },
    header: {
        display: 'flex',
        justifyContent: 'center'
    },
    header_image: {
        height: '100%',
        width: '100%',
        borderRadius: 10
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