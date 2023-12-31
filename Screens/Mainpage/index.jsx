import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import React from 'react'

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Body/>
      {/* <Footer/> */}
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection:"column",
    paddingTop:Platform.OS === "android" ? 35 : 0 
  },
})