import React from "react";
import { View,StyleSheet,ScrollView } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import { myColors } from "../../Config/Color";

const Footer = () =>{
    return(
        <View  style={Styles.Footer}>
        </View>
    )
}

const Styles = StyleSheet.create({
    Footer:{
        flex:1.8,
        backgroundColor:myColors.secondary,
    },

})

export default Footer;