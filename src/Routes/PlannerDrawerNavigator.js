import React from 'react'


import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image } from 'react-native'


import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'



import Icon from 'react-native-vector-icons/FontAwesome';



import { MyEventStack, IncomeStack, SettingsStack } from './StackNavigators'


import CustomDrawerContentComponent from './ContentComponent/ContentComponent'



const PlannerTabNavigator = createDrawerNavigator({


    MyEvents: {
        screen: MyEventStack,
        navigationOptions: () => {

            return {
                drawerLabel: "My Events",
                
                drawerIcon: ({ tintColor }) => {



                    return <Icon name="calendar" size={26} color="#009387" />

                }
            }

        }
    },
    Income: {
        screen: IncomeStack,
        navigationOptions: () => {

            return {

                drawerIcon: ({ tintColor }) => {

                    return <Icon name="line-chart" size={26} color="#009387" />

                }
            }

        }
    },

    Settings: {

        screen: SettingsStack,
        navigationOptions: () => {

            return {

                
                drawerIcon: ({ tintColor }) => {

                    
                    return <Icon name="cog" size={26} color="#009387" />

                },
              

            }

        }

    }



}, {
    contentComponent: (props) => <CustomDrawerContentComponent {...props} />,
    contentOptions:{
        activeTintColor:"#009387"
    }

})



export default (PlannerTabNavigator)