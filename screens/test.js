import React,{useEffect, useState} from 'react';
import { StyleSheet, Text,TextInput, View,ScrollView,Dimensions,Image,ListItem,List, Button,ImageBackground} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  LineChart,

} from "react-native-chart-kit";
import Icon from '@expo/vector-icons/Ionicons';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBKV2y0J7L2bxpGQkOD_ZeMg_a0U2QqDv0",
  authDomain: "nabnab-67f3a.firebaseapp.com",
  projectId: "nabnab-67f3a",
  storageBucket: "nabnab-67f3a.appspot.com",
  messagingSenderId: "470512071095",
  appId: "1:470512071095:web:dd689e6382e1bac21db832",
  measurementId: "G-CKNBWYJ4BN"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}


  class test extends React.Component {
    state={
      mylist:[]
    }
    writeUserData(number,labels){
      firebase.database().ref('temperature').push(
          {
              number:Math.floor(Math.random() * 100) + 1,
              labels:new Date().getHours()+':'+new Date().getMinutes()
          }
      ).then((data) => {
          console.log('data',data);
      }).catch((error) => {
          console.log('error',error);
      });
  
  }
  componentDidMount(){
    const myitems = firebase.database().ref('temperature').limitToLast(12)
    .on('value',datasnap=>{
      //console.log(Object.values(datasnap.val()))
      this.setState({mylist:Object.values(datasnap.val())})
    });
  }
  
  render(item){
    console.log(this.state)
    
  return(
        
    <View style={{flex:1 ,justifyContent :'center',alignItems:'center'}}>
             
             <View style={{backgroundColor:"#FFF",elevation:2,width:40,height:40,borderRadius:20,alignItems:'center',justifyContent:"center",marginLeft:50}}>
                            <Icon name="md-refresh" size={24} color="red"
                              onPress = {()=> this.writeUserData()}
                            />
                        </View>
                        <View>
                       <Text> {item.number}</Text> 
                         </View>
    </View>
    
    
           
               
  )}}
  

        export default test;