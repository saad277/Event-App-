import React, { useEffect, useRef } from 'react'
import { View, Text, SafeAreaView, TextInput, StyleSheet, Platform, StatusBar, ScrollView, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'


import Ionicon from 'react-native-vector-icons/Ionicons'



import { Autocomplete, withKeyboardAwareScrollView } from "react-native-dropdown-autocomplete";

import { connect } from 'react-redux'


const Search = ({ all, navigation }) => {


    const inputRef = useRef(null)


    const handleSelectItem = (item, index) => {



        console.log(item)

        navigation.navigate("EventDetailsUser", { item: item })

    }


    console.log(all)

    return (




        <View style={styles.autocompletesContainer}>


            <Autocomplete

                ref={inputRef}
                style={styles.inputContainer}
                placeholder="Search"

                data={all}

                inputStyle={{
                    width: "100%", shadowColor: "#009387",
                    shadowOffset: { width: 12, height: 12 },
                    shadowOpacity: 0.8,
                    elevation: 2,
                    borderColor: "white",
                    height: 50,
                    paddingLeft: 60,
                    paddingTop: 12

                }}
                handleSelectItem={handleSelectItem}
                inputContainerStyle={{

                    borderColor: "white"
                }}

                minimumCharactersCount={1}
                highlightText
                valueExtractor={item => item.name}
                renderIcon={() => (
                    <Ionicon name="ios-search" size={20} color={"#009387"} style={styles.plus} />
                )}

                rightTextExtractor={item => item.properties}
            />

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
    },
    autocompletesContainer: {
        paddingTop: 0,
        zIndex: 1,
        width: "100%",
        paddingHorizontal: 8,
        backgroundColor: "white",
        marginVertical: 10


    },

    input: {
        maxHeight: 50,
        width: 250,
        flex: 1,

    },

    inputContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,


        width: "100%",
        backgroundColor: "white",
        shadowColor: "#009387",
        shadowOffset: { width: 12, height: 12 },
        shadowOpacity: 0.8,
        elevation: 4,

    },
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    plus: {
        position: "absolute",
        left: 15,
        top: 15,
    },

})

const mapState = (state) => {


    return {

        all: state.event.all
    }

}

export default connect(mapState)(Search);