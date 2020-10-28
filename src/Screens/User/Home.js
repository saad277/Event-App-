


import React, { useEffect } from 'react'

import { View, Text, SafeAreaView, TextInput, StyleSheet, Platform, StatusBar, ScrollView, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'

import Ionicon from 'react-native-vector-icons/Ionicons'


import FeaturedItem from './Components/FeaturedItems'
import MoreItems from './Components/MoreItems'

import { connect } from 'react-redux'

import { fetchRandomEvents, fetchAllEvents } from '../../Redux/Actions/Events/EventActions'

import Search from './Components/Search'

const Home = ({ fetchRandomEvents, fetchAllEvents, random, navigation }) => {



    useEffect(() => {


        fetchAllEvents()
        fetchRandomEvents()

    }, [])




    //console.log(random.length)

    let firstHalf = random.slice(0, 3)

    let secondHalf = random.slice(3, 6)


    return (

        <View style={{ flex: 1, backgroundColor: "white" }}>

            <Search navigation={navigation} />

            <ScrollView
                scrollEventThrottle={16}

            >
                <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
                    <Text style={{ fontSize: 28, fontWeight: "700", color: "#009387" }}>Featured Events</Text>
                </View>

                <View style={{ height: 130, marginTop: 20 }}>

                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >

                        {firstHalf.map((x, i) => {

                            return <FeaturedItem item={x} key={i} navigation={navigation} />
                        })}


                    </ScrollView>


                </View>

                <View style={{ marginTop: 40, paddingHorizontal: 20 }}>

                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1, }}>
                            <Text style={{ fontSize: 24, fontWeight: "700", color: "#009387" }}>More Events</Text>
                            <Text style={{ fontWeight: "100", marginTop: 10 }}>More Events Satisfying Your Interest</Text>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate("AllEvents")} style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>




                            <Text style={{ fontSize: 24, fontWeight: "700", color: "#009387", }}>View All</Text>
                            <Ionicon name={'arrow-forward'} size={25} color={"#009387"} style={{ marginTop: 5 }} />


                        </TouchableOpacity>

                    </View>




                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >

                        {secondHalf.map((x, i) => {

                            return <MoreItems key={i} item={x} navigation={navigation} />
                        })}
                    </ScrollView>


                </View>


            </ScrollView>
        </View>

    )


}



const dispatchState = (dispatch) => {


    return {


        fetchRandomEvents: () => dispatch(fetchRandomEvents()),
        fetchAllEvents: () => dispatch(fetchAllEvents()),
    }

}


const mapState = (state) => {

    return {
        random: state.event.random
    }

}

export default connect(mapState, dispatchState)(Home);