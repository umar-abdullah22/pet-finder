import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View,StatusBar,Button, TextInput,Dimensions,TouchableOpacity,TouchableWithoutFeedback,Keyboard, Alert } from 'react-native'
import { myColors } from '../../Config/Color'
import { Formik} from 'formik';
import * as Yup from 'yup';
import { ListContext } from '../../Context/ListContext';
import LogIcon from '../../assets/LogIcon.svg';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;


export default function Login({navigation}){

  const [Users,setUsers] = useContext(ListContext);

  //Validation
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  useEffect(()=>{
    console.log(Users);
  })
  return (
    //keyboard dismiss on outside click
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}} >
    <View style={styles.Login}>
      <View style={styles.img}>
        <LogIcon height={300} width={300} fill={myColors.tertiary}/>
      </View>
      <View style={styles.form}>
        <Text style={styles.head}>Login</Text>

      {/* formik */}
      <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values,{resetForm}) => {
          resetForm({values:''});
          console.log(values);
          const found = Users.find(User => User.email == values.email && User.password == values.password);
          (found)?
          navigation.navigate('Home')
          :console.log("invalid entry");
          // console.log(Users);
      }}>
      {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
        <View>
          <View style={styles.field}>
            <TextInput
              value={values.email}
              style={styles.textInp} 
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder="Email"
            />
            {errors.email && touched.email && <Text style={styles.err}>{errors.email}</Text>}
          </View>
          <View style={styles.field}>
            <TextInput
              value={values.password}
              style={styles.textInp}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              placeholder="Password"
              secureTextEntry
            />
            {errors.password && touched.password && <Text style={styles.err}>{errors.password}</Text>}
          </View>
          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
              <Text style={styles.btnTxt}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
      </Formik>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    Login:{
        maxHeight:ScreenHeight+100,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:myColors.primary,
    },
    img:{
      flex:1,
      alignItems:'center',
      justifyContent:'flex-end'
    },
    form:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    head:{
      color:myColors.tertiary,
      borderColor:myColors.tertiary,
      borderBottomWidth:2,
      paddingBottom:10,
      padding:5,
      alignSelf:'center',
      width:300,
      fontSize:35,
      marginBottom:12
    },
    field:{
      padding:5,
      paddingVertical:5,
      margin:3,
    },  
    textInp:{
      borderColor:myColors.secondary,
      paddingHorizontal:2,
      paddingVertical:5,
      borderBottomWidth:2,
      width:300,
      fontSize:18
    },
    btn:{
      height:40,
      width:300,
      marginVertical:20,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:10,
      alignSelf:'center',
      backgroundColor:myColors.tertiary,
    },
    btnTxt:{
      fontSize:20,
      color:myColors.primary,
    },
    err:{
      color:'red',
      fontSize:12,
      paddingTop:5
    }

})




// <View style={styles.field}>
//           <TextInput 
//             style={styles.textInp} 
//             value={formik.values.email} 
//             onChange={formik.handleChange('email')}
//             placeholder={'ab***@gmail.com'} 
//             keyboardType={"default"}
//           />
//         </View>
//         <View style={styles.field}>
//           <TextInput 
//             style={styles.textInp} 
//             value={formik.values.password} 
//             onChange={formik.handleChange('password')}
//             placeholder={'Password'} 
//             secureTextEntry={true}
//           />
//         </View>
//         <TouchableOpacity style={styles.btn} onPress={handleLog}>
//           <Text style={styles.btnTxt}>Submit</Text>
//         </TouchableOpacity>