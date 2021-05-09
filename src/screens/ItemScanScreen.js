import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import Header from '../header/Header'
import BigButton from '../components/BigButton'
import { changeOrderItemStatus } from '../actions'

class ItemScanScreen extends React.Component {
    
    componentDidMount(){
        console.log(this.props.route.params, "PARAMS")
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

    gotoScan = () => {
        let order_item_id = this.props.route.params.order_item_id
        this.props.changeOrderItemStatus(order_item_id, 'found')
        // this.props.navigation.push("FoundItem", {
        //     item: this.props.route.params.item,
        //     item_count: this.props.route.params.count,
        //     order_item_id: this.props.route.params.order_item_id
        // })
    }

    gotoCantFind = () => {this.props.navigation.push("CantFind", {
        item: this.props.route.params.item,
        item_count: this.props.route.params.count,
        order_item_id: this.props.route.params.order_item_id
    })}

    render(){
        let params = this.props.route.params
        return(
            <View style = {styles.screen}>

                <Header navigation = {this.props.navigation}styles = {{'backgroundColor': '#98fb98'}} icon = "chevron-left" message = {true}/>
                <View style = {styles.imageView}>
                    <Image style = {styles.image} source = {{uri: `${params.item.image}`}}></Image>
                </View>
                <View style = {styles.itemInfoView}>
                    <Text style = {{fontSize: 27, fontWeight: 'bold', marginBottom: 3}}>
                        {params.count} {this.renderUnit()} {params.item.name}
                    </Text>
                    <Text style = {{fontSize: 20, color: 'gray'}}>
                        {params.category}
                    </Text>
                </View>
                <BigButton color = "green" text = "Found Item" onPressAction = {() => this.gotoScan()}/>
                <View style = {styles.bottomView}>
                    <View style = {styles.bottomItemInfo}>
                        <Text style = {styles.bottomText}>
                            Price
                        </Text>
            
                        <Text style = {styles.bottomText}>
                            ${(params.item.price * .01).toFixed(2)}
                        </Text>
                    
                    </View>
                    <View style = {styles.border}>
                    </View>
                </View>
                    <View style = {styles.bottomView}>
                        <View style = {styles.bottomItemInfo}>
                        

                            <Text style = {styles.bottomText}>
                                Location
                            </Text>
                            <Text style = {styles.bottomText}>
                                {params.category}
                            </Text>
                        </View>
                        <View style = {styles.border}>
                        </View>
                        
                    </View>
                    <View style = {styles.bottomView}>
                        <View style = {styles.bottomItemInfo}>
                            <TouchableOpacity onPress = {() => this.gotoCantFind()} >
                                <Text style = {{color: 'green', fontWeight: 'bold', fontSize: 20}}>
                                    Can't Find Item
                                </Text>
                            </TouchableOpacity>
                            
                        </View>
                    <View style = {styles.border}>
                    </View>
                    
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
        justifyContent: 'center',
        marginLeft: 20,
        marginBottom: 20
    },
    bottomItemInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '93%',
        marginTop: 22,
        marginBottom: 22,

    },
    bottomView: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    bottomText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    border: {
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        width: '93%'
    }
})

export default connect(null, { changeOrderItemStatus })(ItemScanScreen)