import React from 'react'
import {Text, View, ScrollView, StyleSheet} from 'react-native'
import Header from '../header/Header'

const PaymentCardScreen = props => {
    return(
        <View>
            <Header icon = "arrow-left-thick" navigation={this.props.navigation}  title = {"Payment Card"}/>
            <ScrollView>
                <Text style = {styles.header}>
                    Payment Card Screen
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

export default PaymentCardScreen