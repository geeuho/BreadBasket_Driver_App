import React from 'react'
import Header from "../header/Header"
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native'
import Box from '../components/Box'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SettingsScreen = props => {
    return (
        <View style = {styles.screen}>

        <Header title = "Settings" icon = "chevron-left" navigation={props.navigation} />
        <ScrollView>
            
            
            <Box>
                <Text style = {styles.header}>
                    Preferences
                </Text>

                <TouchableOpacity onPress={() => {
                    props.navigation.push('Orders')
                }}>
                    <View style = {styles.row}>
                        <Text style={{fontSize: 20}}>Preferred Map</Text>
                        <Icon name = "chevron-right" size = {30}></Icon>
                    </View>
                </TouchableOpacity>
                <View style = {styles.border}></View>
                <TouchableOpacity onPress={() => {
                    props.navigation.push('Orders')
                }}>
                    <View style = {styles.row}>
                        <Text style={{fontSize: 20}}>Update Location</Text>
                        <Icon name = "chevron-right" size = {30}></Icon>
                    </View>
                </TouchableOpacity>
                <View style = {styles.border}></View>
                <TouchableOpacity onPress={() => {
                    props.navigation.push('Orders')
                }}>
                    <View style = {styles.row}>
                        <Text style={{fontSize: 20}}>Notifications</Text>
                        <Icon name = "chevron-right" size = {30}></Icon>
                    </View>
                </TouchableOpacity>
            </Box>
            <Box>
                <Text style = {styles.header}>
                    App
                </Text>
                <TouchableOpacity onPress={() => {
                    props.navigation.push('Orders')
                }}>
                    <View style = {styles.row}>
                        <Text style={{fontSize: 20}}>Report an issue</Text>
                        <Icon name = "chevron-right" size = {30}></Icon>
                    </View>
                </TouchableOpacity>
                <View style = {styles.border}></View>
                <TouchableOpacity onPress={() => {
                    props.navigation.push('Orders')
                }}>
                    <View style = {styles.row}>
                        <Text style={{fontSize: 20, color: 'red'}}>Logout</Text>
                        <Icon name = "chevron-right" size = {30}></Icon>
                    </View>
                </TouchableOpacity>
            </Box>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        height: '100%'
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginTop: 10
    },
    textStyle: {
        fontSize: 30
    },
    margin: {
        marginVertical: 50
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    }

})
export default SettingsScreen