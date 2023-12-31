import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import MainPage from '../../Screens/Mainpage';
import Home from '../../Screens/Home';
import Login from '../../Auth/Login';
import { myColors } from '../../Config/Color';
import DrawerNavigation from '../DrawerNavigation';
import Cart from '../../Screens/Cart';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator 
    screenOptions={({route})=>({
      headerShown:false,
      tabBarStyle:{
        height:60,
        position:'absolute',
        bottom:16,
        right:16,
        left:16,
        borderRadius:12,
        overflow:'hidden',
      },
      tabBarShowLabel:false,
      tabBarIcon:({color,size,focused})=>{
        let iconName;
        if(route.name == 'Dogs'){
          iconName = focused?'dog':'dog';
        }
        else if(route.name == 'Cats'){
          iconName = focused?'cat':'cat';
        }
        else if(route.name == 'Home'){
          iconName = focused?'home':'home';
        }
        else if(route.name == 'Cart'){
          iconName = focused?'shopping-cart':'shopping-cart';
        }
        return <FontAwesome5 name={iconName} size={22} color={myColors.primary}/>
      },
      tabBarActiveTintColor:myColors.primary,
      tabBarActiveBackgroundColor:myColors.tertiary,
      tabBarInactiveBackgroundColor:myColors.tertiary,
      tabBarInactiveTintColor:myColors.primary,
    })}
    
    >
        <Tab.Screen name='Home' component={Home} options={{tabBarStyle:{display:"none"}}}/>
        <Tab.Screen name='Dogs' component={MainPage}/>
        <Tab.Screen name='Cats' component={MainPage}/>
        <Tab.Screen name='Cart' component={Cart}/>
    </Tab.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})