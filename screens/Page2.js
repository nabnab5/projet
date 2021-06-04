import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView,ImageBackground,Button, Text,Image, Dimensions , View, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

const Page2 = () =>{
  return (
       <ImageBackground source={require('../assets/picc.jpg')} style={styles.image}>
         <SafeAreaView
           style={styles.container}>  
           <View>
           <Image
             style={styles.welcomeIcone}
              source={require('../assets/welcome.png')} />
      </View> 
 
      <View> 
     <Text style= {styles.textStyle}>Baby tracker where you can keep an eye on your child's health from your phone </Text>
     </View> 
     <View> 
     </View>
             <View style={styles.inputIcon}>
             <Icon.Button
             
             name={'circle'} size={28} color={'#245739'} 
               >
  
  </Icon.Button>
             <MaterialCommunityIcons name={'circle'} size={28} color={'#245739'}/>
             <MaterialCommunityIcons name={'checkbox-blank-circle-outline'} size={28} color={'#245739'}/>
             <MaterialCommunityIcons name={'checkbox-blank-circle-outline'} size={28} color={'#245739'}/>
             <MaterialCommunityIcons name={'checkbox-blank-circle-outline'} size={28} color={'#245739'}/>
                </View>
   
                    
     </SafeAreaView>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {   
    flex: 1,
    //justifyContent:  "space-between",   
    
  },
  welcomeIcone: {        
    alignSelf: 'center',
    resizeMode: "center",
    marginTop: 130,
    width: 200,
    height: 200,
  },
  textStyle: {
    marginTop: 100,
    fontSize: 35,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    marginBottom: 180,
    //marginVertical: 8,
  },

  image: {
    flex:1,
    resizeMode: "cover",
    justifyContent: "center",
   
  },
  inputIcon: {
   // position:'absolute',
    bottom: 70,
    marginTop: 10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },

});
export default Page2;