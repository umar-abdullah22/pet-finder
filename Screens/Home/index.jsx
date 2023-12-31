import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { myColors } from '../../Config/Color';
import MainIcon from '../../assets/MainIcon.svg'

const Home = ({navigation}) => {
  let [FontsLoaded] = useFonts({
    'Dancing':require('../../assets/Fonts/Dancing_Script/DancingScript-VariableFont_wght.ttf')
  })

  if(!FontsLoaded){
    return <AppLoading/>
  }

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <MainIcon height={300} width={200}/>
        <Text style={styles.headTxt}>Pet Finder</Text>
      </View>
      <View style={styles.option}>
          <TouchableOpacity style={styles.catgy} onPress={()=>navigation.navigate('BottomRoot',{screen:'Dogs'})}>
            <Image source={require('../../assets/Front.png')} style={{height:120,width:120,left:10}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.catgy} onPress={()=>navigation.navigate('BottomRoot',{screen:'Cats'})}>
            <Image source={require('../../assets/Cat.png')} style={{height:120,width:100,}}/>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:myColors.primary
  },
  head:{
    flex:3,
    alignItems:'center',
    justifyContent:'center'
  },
  option:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  catgy:{
    height:150,
    width:150,
    borderRadius:12,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:myColors.tertiary,
  },
  headTxt:{
    fontSize:70,
    color:myColors.tertiary,
    fontFamily:'Dancing'
  }
})