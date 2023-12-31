import React from "react";
import { useContext } from "react";
import { myColors } from "../../Config/Color";
import {View,Text,Image,StyleSheet} from 'react-native';
import { ListContext } from "../../Context/ListContext";
import Ionicons from '@expo/vector-icons/Ionicons';
import BoxContain from "./BoxContain";
import Detail from "./Detail";


const Description = () =>{
    const [Users,setUsers,desc,setDesc] = useContext(ListContext);
    console.log(desc.id);
    return(
        <View style={styles.container}>
            <View style={styles.imageContain}>
                <Image style={styles.Img} source={{uri:`https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/${desc.id}/1/?bust=1680411270`}}/>
            </View>
            <View style={styles.desc}>
                <View style={styles.headContain}> 
                <View>
                        <Text style={{color:myColors.tertiary,fontSize:40}}>{desc.name}</Text>
                        <Text style={{marginTop:5,fontSize:15,opacity:0.4}}>{desc.breeds.primary}</Text>
                        <Text style={{marginTop:5,fontSize:15,opacity:0.4}}>{desc.breeds.secondary}</Text>
                        <View style={{marginTop:15,flexDirection:'row'}}>
                            <Ionicons name="location-outline" size={18} color={myColors.tertiary}/>
                            <Text style={{fontSize:15,opacity:0.4,marginHorizontal:5}}>{desc.contact.address.country} - {desc.contact.address.address1}</Text>
                        </View>
                    </View>
                    <View>
                        {(desc.gender == 'Male'?
                        <Ionicons name="male-outline" size={25} color={myColors.tertiary} style={{margin:10}}/>:
                        <Ionicons name="female-outline" size={25} color={myColors.tertiary} style={{margin:10}}/>)}
                    </View>
                    
                </View>
                <BoxContain desc = {desc}/>
                <View style={{width:"90%",height:1,backgroundColor:'grey',alignSelf:'center'}}></View>
                <Detail desc = {desc}/>
            </View>
        </View>
    )
}

export default Description

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:myColors.tertiary,
    },
    imageContain:{
        flex:1,
    },  
    Img:{
        flex:1,
        marginTop:35,
        marginHorizontal:10,
        marginBottom:10,
        borderRadius:12,
        borderColor:myColors.tertiary,
        borderWidth:5,
    },
    headContain:{
        flexDirection:"row",
        flex:1,
        justifyContent:"space-between",
        padding:12,
    },
    desc:{
        flex:1,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor:'white',
    },

})