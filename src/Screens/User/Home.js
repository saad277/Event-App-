


import React, { useEffect } from 'react'

import { View, Text, SafeAreaView, TextInput, StyleSheet, Platform, StatusBar, ScrollView, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'

import Ionicon from 'react-native-vector-icons/Ionicons'


import FeaturedItem from './Components/FeaturedItems'
import MoreItems from './Components/MoreItems'

import { connect } from 'react-redux'

import { fetchRandomEvents } from '../../Redux/Actions/Events/EventActions'

const Home = ({ fetchRandomEvents, random, navigation }) => {



    useEffect(() => {

        fetchRandomEvents()

    }, [])

    const heights = Platform.OS === "android" ? 100 + StatusBar.currentHeight : 80


    //console.log(random.length)

    let firstHalf = random.slice(0, 3)

    let secondHalf = random.slice(3, 6)


    return (

        <View style={{ flex: 1 }}>
            <View style={{ height: heights, backgroundColor: "white", borderBottomWidth: 1, borderBottomColor: "#dddddd" }}>
                <View style={styles.searchContainer}>
                    <Ionicon name="ios-search" size={20} color={"#009387"} style={{ marginRight: 10, marginTop: 12 }} />
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="gray"
                        style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
                    />
                </View>
            </View>
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

const styles = StyleSheet.create({


    searchContainer: {

        flexDirection: "row",
        padding: 10,
        backgroundColor: "white",
        marginHorizontal: 20,
        shadowColor: "#009387",
        shadowOffset: { width: 12, height: 12 },
        shadowOpacity: 0.8,
        elevation: 4,
        marginTop: Platform.OS === "android" ? 30 : null,
        borderRadius: 10,
    }

})

const dispatchState = (dispatch) => {


    return {


        fetchRandomEvents: () => dispatch(fetchRandomEvents())
    }

}


const mapState = (state) => {

    return {
        random: state.event.random
    }

}

export default connect(mapState, dispatchState)(Home);