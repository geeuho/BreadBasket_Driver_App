import React from 'react'
import {Text, View, ScrollView, StyleSheet} from 'react-native'
import Header from '../header/Header'

const EarningsScreen = props => {
    return(
        <View>
            <Header icon = "arrow-left-thick" navigation={props.navigation}  title = {"Earnings"}/>
            <ScrollView>
                <Text style = {styles.header}>
                    Earnings Screen
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

export default EarningsScreen