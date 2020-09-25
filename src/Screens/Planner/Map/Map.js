import { Form } from 'native-base'
import React, { useState, useEffect } from 'react'

import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT, Marker } from 'react-native-maps'

import { View, Text, StyleSheet, Dimensions } from 'react-native'






const Map = () => {


    const [loading, setLoading] = useState(false)

    const [region, setRegion] = useState({
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
    })

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={region}
                mapType="satellite"
                onMapReady={() => console.log("map loaded")}
            >



            </MapView>
        </View>
    )


}


const styles = StyleSheet.create({

    container: {

        display: "flex",
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,



    },

    map: {
        flex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

    },
})


export default Map;