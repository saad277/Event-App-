import React from 'react'


import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image } from 'react-native'


import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'

import MyEvents from '../Screens/Planner/MyEvents'
import Income from '../Screens/Planner/Income'
import Settings from '../Screens/Planner/Settings'

import Icon from 'react-native-vector-icons/FontAwesome';



import { MyEventStack, IncomeStack, SettingsStack } from './StackNavigators'


const customDrawerContentComponent = (props) => {

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



const PlannerTabNavigator = createDrawerNavigator({


    MyEvents: {
        screen: MyEventStack,
        navigationOptions: () => {

            return {
                drawerLabel: "My Events",
                tintColor:"#009387",
                drawerIcon: ({ tintColor }) => {



                    return <Icon name="calendar" size={26} color="black" />

                }
            }

        }
    },
    Income: {
        screen: IncomeStack,
        navigationOptions: () => {

            return {

                drawerIcon: ({ tintColor }) => {

                    return <Icon name="line-chart" size={26} color="black" />

                }
            }

        }
    },

    Settings: {

        screen: SettingsStack,
        navigationOptions: () => {

            return {

                drawerIcon: ({ tintColor }) => {

                    return <Icon name="cog" size={26} color="black" />

                },
                
            }

        }

    }



}, {
    contentComponent: customDrawerContentComponent,
    
})


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


export default PlannerTabNavigator