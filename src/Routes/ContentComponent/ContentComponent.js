
import React from 'react'


import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image } from 'react-native'


import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'

import { connect } from 'react-redux'




const CustomDrawerContentComponent = (props) => {


    //console.log(props.auth)






    //console.log(email)


    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }} >
                    <View style={styles.drawerHeader}>
                        <Image
                            style={styles.drawerImage}
                            source={{ uri: props.auth.picture }} />
                        <Text style={styles.drawerHeaderText}>{props.auth.name}</Text>
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
        
        backgroundColor:"lightgray",
        height: 180,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "column"
    },
    drawerHeaderText: {
        color: "#009387",
        fontSize: 20,
        fontWeight: "bold"
    },
    drawerImage: {
        margin: 10,
        width: 100,
        height: 100,
        borderRadius:50
    }
})

const mapStateToProps = (state) => {

    return {

        auth: state.auth
    }

}


export default connect(mapStateToProps)(CustomDrawerContentComponent);
