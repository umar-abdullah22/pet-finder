import React from "react";
import { ListContext } from "../../../Context/ListContext";
import { useContext } from "react";
import { ScrollView,View,StyleSheet,Text,Image,TouchableOpacity } from "react-native";
import Dogs from '../../../JSON/Dogs.json'
import Cats from '../../../JSON/Cats.json'
import { myColors } from "../../../Config/Color";
import Ionicons from '@expo/vector-icons/Ionicons'
import {Dog1,Cat1} from '../../../assets';
import { TextInput } from "react-native-gesture-handler";
import { useRoute,useNavigation } from "@react-navigation/native";



const Body = () =>{
    const [Users,setUsers,desc,setDesc] = useContext(ListContext);
    const navigation = useNavigation();
    const route = useRoute();
    let Datas;
    if(route.name == 'Dogs'){
         Datas = Dogs;
    }
    else if(route.name == 'Cats'){
         Datas = Cats;
    }
    if(!Datas){
        return null;
    }
    return(
        <View style={Styles.Body}>
            <ScrollView>
                <View style={Styles.BodyHead}>
                    <View style={{alignItems:'flex-start',justifyContent:'center',padding:20}}>
                        <Text style={{fontSize:50,color:myColors.primary}}>Helloo ...!</Text>
                        <Text style={{fontSize:20,color:myColors.primary}}>I am ur Friend</Text>
                    </View>
                    <Image source={(route.name == 'Dogs')?Dog1:Cat1} style={{height:180,width:150}}/>
                </View>
                <View style={{flexDirection:'row',marginHorizontal:8}}>
                    <TextInput 
                    style={Styles.searchBar}
                    placeholder='eg: German Shepherd Dog'
                    />
                    <TouchableOpacity style={Styles.searchIcon}>
                        <Ionicons name="search-outline" size={20} color={myColors.primary}/>
                    </TouchableOpacity>
                </View>
                <View style={Styles.BodyContain}>
                    {
                        Datas.animals?.map((item,index)=>{
                            return(
                            <View style={Styles.BodyBox} key={index}>
                                <TouchableOpacity onPress={()=>{
                                    setDesc(item);
                                    navigation.navigate('Description');    
                                }}>
                                <Image style={Styles.image} source={{uri:`https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/${item.id}/1/?bust=1680411270`}}/>
                                <View style={Styles.Desc}>
                                       <View style={Styles.DescHead}>
                                            <Text style={{fontSize:20,color:myColors.tertiary,fontWeight:900}}>{item.name}</Text>
                                            {(item.gender == 'Male'?
                                            <Ionicons name="male-outline" size={15} color={myColors.tertiary}/>:
                                            <Ionicons name="female-outline" size={15} color={myColors.tertiary}/>)}
                                        </View> 
                                        <Text style={{fontSize:15,opacity:0.5,color:myColors.secondary}}>{item.breeds.primary}</Text>
                                        <Text style={{fontSize:12,opacity:0.3,color:myColors.secondary}}>{item.age}</Text>
                                        <View style={{flexDirection:'row',justifyContent:'space-between'}} >
                                            {(item.status == 'adoptable')?<Text style={{color:"green"}}>Available</Text>:<Text>Adopted</Text>}
                                            <Ionicons name="heart-outline" size={15}/>
                                        </View>
                                </View>
                                </TouchableOpacity>
                            </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}


const Styles = StyleSheet.create({
    Body:{
        flex:20,
        backgroundColor:myColors.primary,
    },
    searchIcon:{
        marginVertical:10,
        flexDirection:'row',
        padding:12,
        backgroundColor:myColors.tertiary,
        borderRadius:10,
    },
    searchBar:{
        padding:12,
        marginHorizontal:15,
        height:45,
        marginVertical:10,
        borderRadius:5,
        borderColor:myColors.tertiary,
        fontSize:20,
        borderWidth:1,
    },
    BodyHead:{
        height:180,
        borderRadius:10,
        alignSelf:'center',
        aspectRatio:2/1,
        backgroundColor:myColors.tertiary,
        flexDirection:'row',
        justifyContent:'space-evenly',
        margin:12
    },
    BodyContain:{
        marginHorizontal:15,
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'center',
    },
    BodyBox:{
        margin:8,
        height:"auto",
        borderRadius:12,
        padding:5,
        flexBasis:150,
        flexGrow:1,
        backgroundColor:myColors.primary,
        shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity:  0.20,
          shadowRadius: 5.62,
          elevation: 5
    },
    image:{
        width:"100%",
        height:150,
        marginBottom:5,
        borderRadius:12,
    },
    Desc:{
        flexDirection:'column',
        padding:3
    },
    DescHead:{
        flexDirection:'row',
        justifyContent:'space-between',
    }
})

export default Body;