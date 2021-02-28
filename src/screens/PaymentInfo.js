import React from 'react'
import {Text, View, ScrollView, StyleSheet} from 'react-native'
import Header from '../header/Header'

const PaymentInfoScreen = props => {
    return(
        <View>
            <Header icon = "chevron-left" navigation={props.navigation}  title = {"Payoment Info"}/>
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

export default PaymentInfoScreen