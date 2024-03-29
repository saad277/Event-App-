import React, { Component } from 'react'
import { Card, Icon, Button } from 'react-native-elements'
import {

    Image,
    ImageBackground,

    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage';

import { connect } from 'react-redux'
import { logOut } from '../../Redux/Actions/Auth/AuthActions'

import Email from './components/Email'
import Seperator from './components/Seperator'


import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Settings = ({ navigation, logOut, auth }) => {

    const logout = async () => {


        await AsyncStorage.clear()

        logOut();

        navigation.navigate("Loading")


    }

    return (

        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <Card containerStyle={styles.cardContainer}>

                    <View style={styles.headerContainer}>
                        <ImageBackground
                            style={styles.headerBackgroundImage}
                            blurRadius={10}
                            source={{ uri: "https://cdn.wallpapersafari.com/67/52/mlSgCO.jpg" }}
                        >
                            <View style={styles.headerColumn}>
                                <Image
                                    style={styles.userImage}
                                    source={{ uri: auth.picture }}
                                />
                                <Text style={styles.userNameText}>{auth.name}</Text>
                                <View style={styles.userAddressRow}>
                                    <View>
                                        <Icon
                                            name="place"
                                            underlayColor="transparent"
                                            iconStyle={styles.placeIcon}

                                        />
                                    </View>
                                    <View style={styles.userCityRow}>
                                        <Text style={styles.userCityText}>
                                            {auth.organization}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>

                    <Seperator />
                    <Email
                        key={`0`}
                        index={0}

                        email={auth.email}

                    />
                    <Seperator />

                    <View style={{ width: "30%", alignSelf: "center", color: "green", marginTop: 50 }}>
                        <Button
                            icon={{
                                name: "arrow-right",
                                size: 15,
                                color: "white"
                            }}
                            title="Logout"
                            onPress={() => logout()}

                        />
                    </View>

                </Card>
            </View>
        </ScrollView>
    )


}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center"
    },
    cardContainer: {
        backgroundColor: '#FFF',
        borderWidth: 0,
        flex: 1,
        margin: 0,
        padding: 0,
    },
    container: {
        flex: 1,
    },
    emailContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
    },
    headerBackgroundImage: {
        paddingBottom: 20,
        paddingTop: 45,
    },
    headerContainer: {},
    headerColumn: {
        backgroundColor: 'transparent',
        ...Platform.select({
            ios: {
                alignItems: 'center',
                elevation: 1,
                marginTop: -1,
            },
            android: {
                alignItems: 'center',
            },
        }),
    },
    placeIcon: {
        color: 'white',
        fontSize: 26,
    },
    scroll: {
        backgroundColor: '#FFF',
    },
    telContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
    },
    userAddressRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    userCityRow: {
        backgroundColor: 'transparent',
    },
    userCityText: {
        color: '#A5A5A5',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
    },
    userImage: {
        borderColor: '#FFF',
        borderRadius: 85,
        borderWidth: 3,
        height: 170,
        marginBottom: 15,
        width: 170,
    },
    userNameText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
    },
})




const dispatchToProps = (dispatch) => {

    return {

        logOut: () => dispatch(logOut())

    }

}

const mapStateToProps = (state) => {

    return {

        auth: state.auth
    }

}


export default connect(mapStateToProps, dispatchToProps)(Settings);