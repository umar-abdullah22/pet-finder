import { StyleSheet, SafeAreaView,Text, View } from 'react-native'
import { DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer'
import { myColors } from '../../../Config/Color'
import React from 'react'

const SideBar = (props) => {
    // console.log(props);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.headTxt}>My App</Text>
      </View>
      <View style={styles.body}>
        <DrawerContentScrollView  {...props}>
            <DrawerItemList {...props} style={styles.tabs}>
                <DrawerItem {...props} style={styles.tabs}/>
            </DrawerItemList>
            {/* <Text style={styles.tabs}>Tabs</Text> */}
        </DrawerContentScrollView>
      </View>
    </SafeAreaView>
  )
}

export default SideBar

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:myColors.primary,
        paddingTop:Platform.OS === "android" ? 35 : 0, 
        padding:10,
    },
    head:{
        flex:1,
        backgroundColor:myColors.tertiary,
        borderRadius:10,
        padding:12
    },
    headTxt:{
        color:myColors.primary,
        fontSize:20
    },
    body:{
        flex:4,
        backgroundColor:myColors.primary
    },
    tabs:{
        padding:12,
        // backgroundColor:'green',
        marginTop:12,
        borderRadius:10,
        borderColor:myColors.tertiary,
        color:myColors.primary,
        backgroundColor:myColors.tertiary,
        borderWidth:2,
    }
})