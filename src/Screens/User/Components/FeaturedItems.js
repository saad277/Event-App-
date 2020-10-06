import React from 'react'

import { View, Text, SafeAreaView, TextInput, StyleSheet, Platform, StatusBar, ScrollView, Image } from 'react-native'








const FeaturedItems = ({ name, picture }) => {


    return (

        <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5 }}>
            <View style={{ flex: 2 }}>
                <Image
                    source={{ uri: picture }}
                    style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
                />
            </View>

            <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                <Text style={{ fontWeight: "bold",textTransform:"capitalize" }}>{name}</Text>
            </View>
        </View>)


}


export default FeaturedItems;