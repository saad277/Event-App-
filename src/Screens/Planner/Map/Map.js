import { Form } from 'native-base'
import React, { useState, useEffect, useRef } from 'react'

import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT, Marker } from 'react-native-maps'

import { View, Text, StyleSheet, Dimensions } from 'react-native'






const Map = ({ region, forwardedRef }) => {




    const [loading, setLoading] = useState(false)

    //console.log(region)

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_DEFAULT}
                initialRegion={region}
                mapType="satellite"
                ref={forwardedRef}
                onMapReady={() => console.log("map loaded")}
            >
                <Marker
                    coordinate={{ latitude: region.latitude, longitude: region.longitude }}
                // title={marker.title}
                // description={marker.description}
                />


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