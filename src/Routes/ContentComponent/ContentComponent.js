
import React from 'react'


import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image } from 'react-native'


import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'

import { connect } from 'react-redux'



import asyncStorage from '@react-native-community/async-storage'

const CustomDrawerContentComponent = (props) => {

    console.log("contttttttttt")
    console.log(props.auth)






    //console.log(email)


    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }} >
                    <View style={styles.drawerHeader}>
                        <Image
                            style={styles.drawerImage}
                            source={{ uri: "https://f1.pngfuel.com/png/74/8/847/circle-silhouette-user-logo-user-profile-avatar-head-line-art-oval-png-clip-art.png" }} />
                        <Text style={styles.drawerHeaderText}>abc@gmail.com</Text>
                    </View>

                    <DrawerItems {...props} />



                </SafeAreaView>
            </ScrollView>
        </View>
    )


}




const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: "lightblue",
        height: 180,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "column"
    },
    drawerHeaderText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold"
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 80,
    }
})

const mapStateToProps = (state) => {

    return {

        auth: state
    }

}


export default connect(mapStateToProps)(CustomDrawerContentComponent);
