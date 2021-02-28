import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import Header from '../header/Header'
import { connect } from 'react-redux'

class ItemScanScreen extends React.Component {
    componentDidMount(){
        console.log(this.props.route.params.item)
    }

    renderUnit = () => {
        if(this.props.route.params.item.quantity_unit === 'pound'){
            if(this.props.count > 1){
                return 'pounds'
            } else {
                return 'pound'
            }
        } else {
            return 'x'
        }
    }

    render(){
        let params = this.props.route.params
        return(
            <View style = {styles.screen}>

                <Header navigation = {this.props.navigation}styles = {{'backgroundColor': '#98fb98'}} icon = "chevron-left" message = {true}/>
                <View style = {styles.imageView}>
                    <Image style = {styles.image} source = {{uri: `${params.item.image}`}}></Image>
                </View>
                <View style = {styles.itemInfoView}>
                    <Text style = {{fontSize: 30, fontWeight: 'bold'}}>
                        {params.count} {this.renderUnit()} {params.item.name}
                    </Text>
                    <Text style = {{fontSize: 20, color: 'gray'}}>
                        {params.category}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        height: "100%"
    }, 
    image: {
        height: 300, 
        width: 300, 
        borderRadius: 10,
    },
    imageView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    itemInfoView: {
        display: 'flex',
        justifyContent: 'center'
    }
})

export default connect(null, {})(ItemScanScreen)