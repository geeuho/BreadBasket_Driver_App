import React from 'react'
import {View, Text} from 'react-native'
import Header from '../header/Header'
import { connect } from 'react-redux'

class CantFindScreen extends React.Component {

    render(){
        return(
            <View>
                <Header navigation = {this.props.navigation}styles = {{'backgroundColor': '#98fb98'}} icon = "chevron-left" message = {true}/>
                <Text> Can't Find Item</Text>
            </View>
        )
    }

}

export default CantFindScreen