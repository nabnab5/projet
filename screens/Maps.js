import React, { Component,useEffect, useRef  } from 'react';
import {  Text, View, StyleSheet, ToastAndroid,Image,Button,Linking, TextInput } from 'react-native';
import MapView from 'react-native-maps';



export default class Maps extends Component{
  constructor(props){
  super(props);
  this.state ={
    region:{
      latitude:30.839284,
      longitude:-8.064181,
      latitudeDelta:0.0122,
      longitudeDelta:2
      
    },
    marginBottom:1
  }
}

   componentDidMount(){
      this.handleUserLocation();
      setTimeout(()=>this.setState({marginBottom:0}),100)
  }
  handleUserLocation=()=>{
    navigator.geolocation.getCurrentPosition(pos =>{
     // alert(JSON.stringify(pos))
     this.map.animateToRegion({
       ...this.state.region,
       latitude:pos.coords.latitude,
       longitude:pos.coords.longitude
     })
     this.setState({
      ...this.state.region,
      latitude : pos.coords.latitude,
      longitude : pos.coords.longitude
     })
     
    },
    err => {
      console.log(err);
      alert("something went wrong!Please seect location manually.")
    }
     )
  }

   onChangeValue =region =>{
     ToastAndroid.show(JSON.stringify(region),ToastAndroid.SHORT)
     this.setState({
       region
     }) 
   }
  
   

  
  render(props){
    return(
  <View style={{flex:1}}>
  <View style={{flexDirection:'row'}}>
  <View style={{
                       alignItems:"center",
                       backgroundColor:"#83A399",
                       marginHorizontal:10,
                       borderRadius:25,
                       flexDirection:'row',
                       paddingVertical:5,
                       paddingHorizontal:10
                   }}>
                       <Image
                        source={require('../assets/images/cross.png')}
                        style={{height:40,width:40}}
                       />
                       <Button  color='#83A399' fontWeight='bold' title="Pharmacies" onPress={() => Linking.openURL('https://www.google.com/maps/search/pharmacy/@33.2264659,-8.4952236,15z/data=!3m1!4b1')}/>
                   </View>
                    <Text></Text>
                   <View style={{
                       alignItems:"center",
                       backgroundColor:"#83A399",
                       marginHorizontal:15,
                       flexDirection:'row',
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../assets/images/hospital.png')}
                        style={{height:40,width:40}}
                       />
                      <Button  color='#83A399' fontWeight='bold' title="Hopitaux" onPress={() => Linking.openURL('https://www.google.com/maps/search/hospital/@33.2295994,-8.5096725,13.75z')}/>
                   </View>
                   </View>
   <View style={{flex:1}}>
     
   
      <MapView
       style={{flex:1,marginBottom:this.state.marginBottom}}
       showsUserLocation={true}
       showsMyLocationButton ={true}
       zoomControlEnabled ={true}
       initialRegion ={this.state.region}
       onRegionChangeComplete ={this.onChangeValue}
       ref ={ref => this.map = ref}
     />
     
      
   </View>
   </View>
    );
  }
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  mapContainer:{
    height:'50%',
    width:'100%',
    justifyContent:'flex-end',
    alignItems:'center'
  },
  fullMapContainer:{
    flex:1
  },
  map:{
    ...StyleSheet.absoluteFillObject,
    height:'100%',
    width:'100%',
    justifyContent:'flex-end',
    alignItems:'center',
  },
  
});
