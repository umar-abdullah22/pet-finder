import React from "react";
import { DrawerActions } from "@react-navigation/native";
import { View,Text,StyleSheet,TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { myColors } from "../../Config/Color";
import {Ionicons} from "@expo/vector-icons"


const Header = () =>{
    const navigation = useNavigation();
    return(
        <View style={Styles.Header}>
            {/* <Ionicons name="menu-outline" size={32} color={myColors.primary} 
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            /> */}
        </View>
    )
}

const Styles = StyleSheet.create({
    Header:{
        flex:0,
        // margin:2,
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:myColors.tertiary,
        // padding:12
    }
})

export default Header;