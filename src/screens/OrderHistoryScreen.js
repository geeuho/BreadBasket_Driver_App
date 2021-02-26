import React from 'react'
import {Text, View, ScrollView, StyleSheet} from 'react-native'
import Header from '../header/Header'

const OrderHistoryScreen = props => {
    return(
        <View>
            <Header icon = "arrow-left-thick" navigation={this.props.navigation}  title = {"Order History"}/>
            <ScrollView>
                <Text style = {styles.header}>
                    Order History Screen
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 30
    }
})

export default OrderHistoryScreen