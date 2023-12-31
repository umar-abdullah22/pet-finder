import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { myColors } from '../../Config/Color'

const BoxContain = ({desc}) => {
  return (
    <View style={styles.BoxContain}>
        <View style={styles.Box}>
            <Text style={{fontSize:25,opacity:0.8}}>{desc.type}</Text>
            <Text style={{opacity:0.5}}>Type</Text>
        </View>
        <View style={styles.Box}>
            <Text style={{fontSize:25,opacity:0.8}}>{desc.size}</Text>
            <Text style={{opacity:0.5}}>Size</Text>
        </View>
        <View style={styles.Box}>
            <Text style={{fontSize:25,opacity:0.8}}>{desc.coat}</Text>
            <Text style={{opacity:0.5}}>Coat</Text>
        </View>
        <View style={styles.Box}>
            <Text style={{fontSize:25,opacity:0.8}}>{desc.age}</Text>
            <Text style={{opacity:0.5}}>Age</Text>
        </View>
    </View>
  )
}


export default BoxContain

const styles = StyleSheet.create({
    BoxContain:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    Box:{
        height:80,
        width:80,
        margin:8,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: myColors.primary,
        borderRadius: 8,
        shadowColor: myColors.tertiary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    }
})