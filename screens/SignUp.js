
import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput,TouchableOpacity,Button,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from '../firebase/fire';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  
  
  
  const CreateProfile = async () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
        firebase.firestore().collection("baby")
            .doc(firebase.auth().currentUser.uid)
            .set({
                name:username,
                gender:'',
                weight:'',
                birthday:'',
                
            })
            navigation.replace('Profile')
          })
    .catch((error) => {
        console.log(error)
    })
}

  





  
  


const [show,setShow] =React.useState(false);
const [visible,setVisible] =React.useState(true);
  return (

        <ImageBackground source={require('../assets/images/nabnab.jpg')} style={styles.Backgroundcontainer}>
        <View style={styles.logocontainer}>
              <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
              <Text style={styles.logoText}>Sign Up</Text>
            </View>
      
            <View style={styles.inputcontainer}>
      <Icon name={'ios-person-outline'} size={28} color={'#CD5C5C'}
          style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder={'enter your username'}
          placeholderTextColor={'#7E867F'}
          underlineColorAndroid='transparent'
        />
      </View>
            
      
            <View style={styles.inputcontainer}>
              <Icon name={'ios-mail-outline'} size={28} color={'#CD5C5C'}
                style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                placeholder={'enter your Email'}
                placeholderTextColor={'#7E867F'}
                underlineColorAndroid='transparent'
      
              />
            </View>
      
            <View style={styles.inputcontainer}>
               <Icon name={'ios-key-outline'} size={28} color={'#CD5C5C'}
                style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder={'enter your password'}
                secureTextEntry={visible}
                placeholderTextColor={'#7E867F'}
                underlineColorAndroid='transparent'
      
              />
              
                 <TouchableOpacity style ={styles.btneye} onPress ={
                   () => {
                     setVisible(!visible),
                     setShow(!show)
                   }
                 }>
                  <Icon  
                  name={show === false ? 'eye' : 'eye-off'}
                  size={26}
                  color={'#F66260'} />
                 </TouchableOpacity>
                 
              
               
      
            </View>
            {
            error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
        }
            
            
            <View>
            <View style ={styles.btnlogin}>
          
        <Button   color='#045610' title="Register" 
        onPress={() => CreateProfile()}
        />
         </View>
              
            </View>
            
                 <View style={styles.signuptextcont}>
                   <Text style={styles.texti}>Already have an account? </Text>
                   <Button  color='green' fontWeight='bold' title="Sign In" onPress={() => navigation.replace('Login')}/>
                   
                 </View>
                
      
         
         
      
         
        </ImageBackground>
  )};



const styles = StyleSheet.create({
Backgroundcontainer: {
  flex: 1,
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  resizeMode: 'cover',
},
logo: {
  width: 90,
  height: 90,
  
},
logocontainer: {
  alignItems: 'center',
  marginBottom: 70,
},
inputcontainer: {
  marginTop: 12,
  borderWidth:3,
  borderColor:'#CD5C5C',
  borderRadius:50,

},
welcome:{
  color:'#CD5C5C',
  fontSize:35,
  fontWeight: 'bold',
},
logoText: {
  color: '#045610',
  fontSize: 30,
  fontWeight: 'bold',
  marginTop: 10,
  opacity: 0.8
  
},
input: {
  width: 250,
  height: 40,
  borderRadius: 50,
  fontSize: 17,
  paddingLeft: 50,
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  color: 'black',
  marginHorizontal: 20,
  
  
},
inputIcon: {
  position:'absolute',
  top: 8,
  left: 30,
  justifyContent:'center',
  alignItems:'center',
},

btnlogin:{
  alignItems:"center",
  backgroundColor:"#045610",
  marginHorizontal:15,
  borderRadius:25,
  paddingVertical:5,
  paddingHorizontal:25,
  top:15,
},
text:{
  color:'#fff',
  textAlign:'center',
  fontSize:18,
},
signuptextcont:{
  top:25,
  flexDirection:'row',
  
  
},
texti:{
 color:'#7E867F',
 top:9,
 fontSize:17
},
btneye:{
  position:'absolute',
  top:7,
  right:10
}

});
  export default SignUp;