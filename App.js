

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import MainNavigator from './src/Routes/MainNavigator'


import { connect } from 'react-redux'

const App = (props) => {

  return (

    <MainNavigator />
  )


}



const mapStateToProps = (state) => {

  return {

    auth: state
  }

}


export default (App);
