import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput,TouchableOpacity,Button,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from "firebase";


const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const Profile = async () => {
      try {
          const response = await firebase.auth().signInWithEmailAndPassword(email, password);
          navigation.replace('BabyProfile');
      } catch (err) {
          setError(err.message);
      }

  }
  const [show,setShow] =React.useState(false);
  const [visible,setVisible] =React.useState(true);
  return (
        <ImageBackground source={require('../assets/images/nabnab.jpg')} style={styles.Backgroundcontainer}>
        <View style={styles.logocontainer}>
        <Text style={styles.welcome}>WELCOME BACK</Text>
          <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
          <Text style={styles.logoText}>Login</Text>
        </View>
      
      
        <View style={styles.inputcontainer}>
        <Icon name={'ios-mail-outline'} size={28} color={'#CD5C5C'}
            style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder={'enter your email'}    
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
          <TouchableOpacity style ={styles.btneye}  onPress ={
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
        <Button color='#045610' title="Connect" onPress={() => Profile()}/>
         </View>
          
        </View>
        
             <View style={styles.signuptextcont}>
               <Text style={styles.texti}>Don't have an account ? </Text>
               <Button color='green' 
               fontWeight='bold' 
               title="Sign Up" 
               onPress={() => navigation.replace('SignUp')}/>
               
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
    fontSize:25,
    color:'#045610',
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
  export default Login;