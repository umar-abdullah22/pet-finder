import { StyleSheet, Text, View,ScrollView, Image,TouchableOpacity, Button,Dimensions } from 'react-native'
import React,{useContext} from 'react'
import { CartContext } from '../../Context/CartContext';
import { ListContext } from '../../Context/ListContext';
import { myColors } from '../../Config/Color';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

const Cart = () => {
  const [list,setList] = useContext(CartContext);
  const [Users,setUsers,desc,setDesc] = useContext(ListContext);

  const removeElem = (id) =>{
    const updatedList = list.filter(obj=>obj.id != id);
    setList(updatedList);
  }

  return (
    <View style={styles.Cart}>
      <View>
        <Text style={{fontSize:25,margin:20,opacity:0.8}}>Wishlist Cart</Text>
        <View style={{width:"90%",height:2,backgroundColor:'grey',opacity:0.4,alignSelf:"center"}}></View>
      </View>
      <View style={{flex:1}}>
      <View style={{marginHorizontal:20,marginTop:12,width:60,borderRadius:5,height:30,backgroundColor:myColors.tertiary,padding:6}}>
        <Text style={{color:myColors.primary}}>Items : {list.length}</Text>
      </View>
      <ScrollView style={{paddingTop:20}}>
        {(list)?.map((item)=>{
          return(
            <View style={styles.items} key={item.id}>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Image style={styles.Img} source={{uri:`https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/${item.id}/1/?bust=1680411270`}}/>
              </View>
              <View style={{flex:1}}>
                <View>                  
                  <Text style={{fontSize:25}}>{item.name}</Text>
                  <Text style={{fontSize:15,opacity:0.4}}>{item.breeds.primary}</Text>
                  <Text style={{fontSize:15,opacity:0.4}}>{item.breeds.secondary}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize:15,color:myColors.primary}}>Proceed</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button2} onPress={()=>removeElem(item.id)}>
                    <Text style={{fontSize:15,color:myColors.secondary}}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )
        })}
      </ScrollView>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  Cart:{
    maxHeight:ScreenHeight,
    flex:1,
    backgroundColor:myColors.primary,
    marginTop:15
  },
  items:{
    height:150,
    width:"90%",
    alignSelf:'center',
    flexDirection:'row',
    margin:8,
    alignItems:'center',
    justifyContent:'space-around',
    backgroundColor: myColors.primary,
    borderRadius: 8,
    shadowColor: myColors.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  Img:{
    height:100,
    width:100,
    borderRadius:20
  },
  button:{
    height:35,
    marginTop:12,
    alignItems:'center',
    justifyContent:'center',
    width:"40%",
    backgroundColor:myColors.tertiary,
    borderRadius:5,
    marginRight:12,
  },
  button2:{
    height:35,
    marginTop:12,
    alignItems:'center',
    justifyContent:'center',
    width:"40%",
    backgroundColor:myColors.primary,
    borderColor:myColors.tertiary,
    borderWidth:1,
    borderRadius:5,
  },
})