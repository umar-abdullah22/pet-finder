import React from 'react';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './Navigation/AuthNavigation';
import { ListProvider } from './Context/ListContext';
import DrawerNavigation from './Navigation/DrawerNavigation';
import { CartProvider } from './Context/CartContext';

export default function App() {
  return (
    <>
    <ListProvider>    
      <CartProvider>
    <NavigationContainer>
      <AuthNavigation/>
      {/* <DrawerNavigation/> */}
    </NavigationContainer>
    </CartProvider>
    </ListProvider>
    </>
  );
}

