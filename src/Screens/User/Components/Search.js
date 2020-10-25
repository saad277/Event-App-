import React from 'react'
import { View, Text, SafeAreaView, TextInput, StyleSheet, Platform, StatusBar, ScrollView, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'


import Ionicon from 'react-native-vector-icons/Ionicons'
import SearchableDropdown from 'react-native-searchable-dropdown';


var items = [
    {
        id: 1,
        name: 'JavaScript',
    },
    {
        id: 2,
        name: 'Java',
    },
    {
        id: 3,
        name: 'Ruby',
    },
    {
        id: 4,
        name: 'React Native',
    },
    {
        id: 5,
        name: 'PHP',
    },
    {
        id: 6,
        name: 'Python',
    },
    {
        id: 7,
        name: 'Go',
    },
    {
        id: 8,
        name: 'Swift',
    },
];





const Search = () => {

    const heights = Platform.OS === "android" ? 100 + StatusBar.currentHeight : 80

    return (
        <View style={{ height: heights, backgroundColor: "white", borderBottomWidth: 1, borderBottomColor: "#dddddd" }}>
            <View style={styles.searchContainer}>
                <Ionicon name="ios-search" size={20} color={"#009387"} style={{ marginRight: 10, marginTop: 12 }} />
              
      
            </View>
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

export default Search;