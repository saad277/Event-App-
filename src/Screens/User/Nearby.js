import React, { useState, useEffect, useRef } from 'react'

import { View, Text, StyleSheet, Image, Dimensions, Platform, Alert } from 'react-native'



import Geolocation from '@react-native-community/geolocation';

import { request, PERMISSIONS } from 'react-native-permissions'

import MapView, { PROVIDER_GOOGLE, Marker, Callout, } from 'react-native-maps'


import { connect } from 'react-redux'

import { fetchNearby } from '../../Redux/Actions/Events/EventActions'

import Carousel from 'react-native-snap-carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Nearby = ({ fetchNearby, nearby, navigation }) => {


    const mapRef = useRef(null)
    const carousel = useRef(null)

    const [markers, setMarkers] = useState([])

    const [initialPosition, setPostion] = useState({ "latitude": 24.953973333333337, "latitudeDelta": 0.09, "longitude": 67.05755666666667, "longitudeDelta": 0.035 })

    const locateCurrentPosition = () => {

        Geolocation.getCurrentPosition(
            (position) => {
                const location = JSON.stringify(position);

                // console.log(location)

                let initialPos = {

                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.035,
                }



                setPostion(initialPos)


                console.log("......")
                console.log(initialPos)


                fetchNearby(initialPos.latitude, initialPos.longitude)

                mapRef.current.animateCamera({
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitude
                })
            },
            (error) => Alert.alert("Enable Location & Restart App"),

            { enableHighAccuracy: true, timeout: 90000, maximumAge: 1000 }
        );

    }



    const requestLocationPermission = async () => {

        if (Platform.OS === "android") {

            var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)

            console.log("android : " + response);

            if (response === "granted") {

                locateCurrentPosition();

            }

        } else {

            var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)

            console.log("ios : " + response);

            if (response === "granted") {

                locateCurrentPosition();
            }
        }

    }


    useEffect(() => {


        requestLocationPermission();


    }, [])

    const renderCarouselItem = ({ item }) =>
        <TouchableOpacity onPress={() => navigation.navigate("EventDetailsUser", { item })}>
            <View style={styles.cardContainer}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Image style={styles.cardImage} source={{ uri: item.picture }} />
            </View>
        </TouchableOpacity>



    const onCarouselItemChange = (index) => {

        let x = nearby[index]




        console.log(x)

        mapRef.current.animateToRegion({
            latitude: x.location.coordinates[0],
            longitude: x.location.coordinates[1],
            latitudeDelta: 0.09,
            longitudeDelta: 0.035
        })

        markers[index].showCallout()
    }


    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                ref={mapRef}
                initialRegion={initialPosition}
                showsUserLocation={true}
            >







                {nearby &&
                    nearby.map((x, index) => {
                        return (
                            <Marker
                                key={x.name}
                                coordinate={{ latitude: x.location.coordinates[0], longitude: x.location.coordinates[1] }}
                                ref={ref => markers[index] = ref}
                            >
                                <Callout >

                                    <Text style={{ textTransform: "capitalize" }}>{x.name}</Text>
                                </Callout>

                            </Marker>
                        )
                    })
                }

            </MapView>
            <Carousel
                ref={carousel}
                data={nearby}
                containerCustomStyle={styles.carousel}
                renderItem={renderCarouselItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={300}
                removeClippedSubviews={false}
                onSnapToItem={(index) => onCarouselItemChange(index)}
            />
        </View>
    )




}


const styles = StyleSheet.create({


    container: {
        ...StyleSheet.absoluteFillObject
    },

    map: {
        ...StyleSheet.absoluteFillObject
    },
    carousel: {
        position: "absolute",
        bottom: 0,
        marginBottom: 48,
    },
    cardContainer: {

        backgroundColor: "rgba(0,0,0,0.6)",
        height: 200,
        width: 300,
        padding: 24,
        borderRadius: 24,
    },
    cardImage: {
        height: 120,
        width: 300,
        bottom: 0,
        position: "absolute",
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    cardTitle: {

        color: "white",
        fontSize: 22,
        alignSelf: "center",
        textTransform: "capitalize"
    }


})


const dispatchState = (dispatch) => {


    return {

        fetchNearby: (latitude, longitude) => dispatch(fetchNearby(latitude, longitude))
    }


}



const mapState = (state) => {


    return {

        nearby: state.event.nearby
    }

}



export default connect(mapState, dispatchState)(Nearby);