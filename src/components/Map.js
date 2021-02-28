import React from 'react'
import MapView from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import { StyleSheet, Dimensions, View } from 'react-native'

class Map extends React.Component {

    constructor(){
        super()
        this.state = {
            location: null
        }
    }

    componentDidMount(){
        Geolocation.getCurrentPosition(
            position => {
                this.setState({location: position})
            },
            error => Alert.alert(error.message),
            {enableHighAccuracy:true, timeout: 20000, maximumAge: 1000}
        )
    }

    componentDidUpdate(prevState){
        if(prevState.location !== this.state.location){
            console.log(this.state.location.coords.latitude, this.state.location.coords.longitude)
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                <MapView
                    style = {styles.map}
                    initialRegion = {{
                        latitude : 37.785834,
                        longitude : -122.406417,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    showsUserLocation = {true}
                    followsUserLocation = {true}
                />

            </View> 
        )
    }
}

let styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        borderRadius: 10
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
})

export default Map