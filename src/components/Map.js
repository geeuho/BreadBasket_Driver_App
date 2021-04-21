import React, {useState} from 'react'
import MapView, {Marker} from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import axios from 'axios'
import { connect } from 'react-redux'
import {storeLocation} from '../actions'
import { View, StyleSheet } from 'react-native'

class Map extends React.Component {

    constructor(props){
        super()
        this.state = {
            rounded: props.rounded? 10: 0 
        }
    }

    componentDidMount(){
        console.log(this.props)
    }

    rounded =() => {
        if(this.props.rounded === true){
            return {
                ...StyleSheet.absoluteFillObject,
                borderRadius: 10
            }
        } else {
            return {...StyleSheet.absoluteFillObject}
        }
    }

    render(){
        return(
            <View style = {this.props.containerStyles}>
                <MapView
                    style = {this.rounded()}
                    initialRegion = {{
                        latitude : this.props.coords.lat,
                        longitude : this.props.coords.lng,
                        latitudeDelta: 0.0222,
                        longitudeDelta: 0.0221,
                    }}
                    showsUserLocation = {true}
                    followsUserLocation = {true}
                >
                    <Marker 
                        // image = {require("../images/Home_earnings.png")}
                        coordinate = {{latitude: this.props.coords.lat, longitude: this.props.coords.lng}}
                        title = {this.props.store_name}
                        description = "Store Location"
                    />
                </MapView>

            </View> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        coords: state.stores.store_location
    }
}

export default connect(mapStateToProps, {storeLocation})(Map)