import React from 'react'
import {Text, View, ScrollView, StyleSheet} from 'react-native'
import Header from '../header/Header'

const PaymentMethodScreen = props => {
    return(
        <View>
            <Header icon = "arrow-left-thick" navigation={props.navigation}  title = {"Payment Method"}/>
            <ScrollView>
                <Text style = {styles.header}>
                    Payment Method Screen
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

export default PaymentMethodScreen