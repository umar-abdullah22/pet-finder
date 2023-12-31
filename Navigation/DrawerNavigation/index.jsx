import React from 'react';
import { StyleSheet, Text,Alert,Image,Button, View,SafeAreaView,Platform } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideBar from './SideBar';
import BottomNavigation from '../BottomNavigation';
const Drawer = createDrawerNavigator();
import Home from '../../Screens/Home';
import MainPage from '../../Screens/Mainpage'


const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props=><SideBar {...props}/>}
      screenOptions={{
        headerShown:false
      }}
      initialRouteName={'Home'}
    >
      <Drawer.Screen name='Home' component={Home}/>
      <Drawer.Screen name='Dogs' component={MainPage}/>
      <Drawer.Screen name='Cats' component={MainPage}/>

    </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})