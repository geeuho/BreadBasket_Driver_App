import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import Header from '../header/Header'
import { connect } from 'react-redux'

class ItemScanScreen extends React.Component {
    componentDidMount(){
        console.log(this.props.route.params.item)
    }
    render(){
        return(
            <View style = {styles.screen}>

                <Header icon = "menu"/>
                <View>
                    <Image>

                    </Image>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        height: "100%"
    }
})

export default connect(null, {})(ItemScanScreen)