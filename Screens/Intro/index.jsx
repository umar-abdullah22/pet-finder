import { StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { myColors } from '../../Config/Color'
import MyImg from '../../assets/Front.svg'
import React from 'react'

export default Intro = ({navigation}) => {
  return (
    <View style={styles.Intro}>
      <View style={styles.imgContain}>
        <MyImg height={300} width={300}/>
      </View>
      <View style={styles.desc}>
        <Text style={styles.descTxt}>Find out your companion on pet shelter</Text>
        <Text style={styles.descPara}>Find your new furry friend at our pet shop! We have a wide selection of pets to choose from, and our knowledgeable staff is here to help you make the perfect match.</Text>
      </View>
      <View style={styles.btnContain}>
        <TouchableOpacity style={styles.introBtn} onPress={()=>navigation.navigate('Sign')}>
            <Text style={styles.btnName}>SignUp</Text>
            <AntDesign name="lock" size={24} color={myColors.tertiary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.introBtn} onPress={()=>navigation.navigate('Home')}>
            <Text style={styles.btnName}>Demo User</Text>
            <AntDesign name="user" size={24} color={myColors.tertiary} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Intro:{
      flex:1,
      backgroundColor:myColors.tertiary,
      padding:5,
      alignItems:"center",
      justifyContent:"space-around",
      flexDirection:'column'
    },
    imgContain:{
      flex:2,
      alignItems:"center",
      justifyContent:"center",
    },  
    desc:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      paddingHorizontal:30,
    },
    descTxt:{
      lineHeight:40,
      fontWeight:'400',
      color:myColors.primary,
      textAlign:'center',
      fontSize:30,
    },
    descPara:{
      color:myColors.primary,
      marginTop:30,
      padding:12,
      textAlign:'center'
    },
    btnContain:{
      flex:0.5,
      width:350,
      alignItems:"center",
      flexDirection:"row",
    },  
    btnName:{
      color:myColors.tertiary,
      fontSize:20
    },  
    introBtn:{
      height:50,
      width:150,
      backgroundColor:myColors.primary,
      alignItems:"center",
      justifyContent:"space-around",
      flexDirection:"row",
      marginTop:12,
      marginHorizontal:12,
      borderRadius:12,    
    },
})