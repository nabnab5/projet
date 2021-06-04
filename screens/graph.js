import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions,Image, Button,ImageBackground,ListItem,List} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  LineChart,

} from "react-native-chart-kit";
import Icon from '@expo/vector-icons/Ionicons';
import firebase from '../firebase/fire';



const graph = () =>{
  const [array, setArray] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
   async function getData () {
    setIsLoading(true);
    try {
        const response = await fetch('https://baby-tracker-310016-default-rtdb.europe-west1.firebasedatabase.app/temperature.json');
        const data =await response.json();
        const getData=[];
        for (const key in data){
            getData.push({
                id:key,
                temperature:data[key].temperature,
                time:data[key].time,
            })
            
        }
        const array = getData.reverse().slice(0,7);
        setArray(array);
        setIsLoading(false)
        console.log(array)
    } catch(err) {
        console.log(err)
    }
}
   
    useEffect(() => {
         
        const interval = setInterval(() => {
    
        firebase.database().ref('temperature').push({
            temperature:Math.floor(Math.random() * 10) + 30,
            time:new Date().getHours()+':'+new Date().getMinutes(),
        }).then((data)=>{
            console.log('data',data)
        }).catch((error)=>{
            console.log('error',error)
        })
        
}, 60000);
getData()

return () => clearInterval(interval);

}, []);



  return (
    <ImageBackground source={require('../assets/background/3.png')} style={styles.Backgroundcontainer}>
    <View style={{alignItems: 'center',marginBottom: 55}}>
      <Image source={require('../assets/images/hot.png')} style={{width: 70,height: 70,}}  />
      <Text style={{color:'#568778',fontSize: 25,fontWeight: 'bold',marginTop: 10,opacity: 0.8}} >Temperature</Text>
    </View>
    <ScrollView horizontal={true}  >
    
               <View style={{
                   alignItems:"center",
                   backgroundColor:"#568778",
                   marginHorizontal:15,
                   borderRadius:25,
                   paddingVertical:5,
                   paddingHorizontal:15
               }}>
                   <Image
                    source={require('../assets/images/hot.png')}
                    style={{height:40,width:40}}
                   />
                   <Button  color='#568778' fontWeight='bold' title="temperature" onPress={() => props.navigation.navigate('Graphs1')}/>
               </View>

               <View style={{
                   alignItems:"center",
                   backgroundColor:"#9CCBBD",
                   marginHorizontal:15,
                   borderRadius:25,
                   paddingVertical:5,
                   paddingHorizontal:15
               }}>
                   <Image
                    source={require('../assets/images/heartbeat.png')}
                    style={{height:40,width:40}}
                   />
                  <Button  color='#9CCBBD' fontWeight='bold' title="Heartbeat" onPress={() => props.navigation.navigate('Graphs2')}/>
               </View>
               <View style={{
                   alignItems:"center",
                   backgroundColor:"#9CCBBD",
                   marginHorizontal:15,
                   borderRadius:25,
                   paddingVertical:5,
                   paddingHorizontal:15
               }}>
                   <Image
                    source={require('../assets/images/baby-weight.png')}
                    style={{height:40,width:40}}
                   />
                  <Button  color='#9CCBBD' fontWeight='bold' title="     weight   " onPress={() => props.navigation.navigate('Graphs3')}/>
               </View>
               <View style={{
                   alignItems:"center",
                   backgroundColor:"#9CCBBD",
                   marginHorizontal:15,
                   borderRadius:25,
                   paddingVertical:5,
                   paddingHorizontal:15
               }}>
                   <Image
                    source={require('../assets/images/height.png')}
                    style={{height:40,width:40}}
                   />
                  <Button   color='#9CCBBD' fontWeight='bold' title="         Size         " onPress={() => props.navigation.navigate('Graphs4')}/>
               </View>
               </ScrollView>
          
            <View >
            <View style={{flexDirection:'row' ,paddingHorizontal:30,marginTop:40,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:"bold",fontSize:20,color:"#9BACAE"}}>DAY        </Text>
                    <Text style={{fontWeight:"bold",fontSize:20,color:"#9BACAE"}}>WEEK       </Text>
                    <View style={{backgroundColor:"#9BACAE",elevation:2,width:40,height:40,borderRadius:20,alignItems:'center',justifyContent:"center",marginLeft:50}}>
                        <Icon name="md-refresh" size={24} color="#fff"
                          onPress = {()=> handleGraph()}
                        />
                    </View>
                    </View>
              <View>
             
                  
            <View style={{
  marginHorizontal: 20,
  marginTop: 40
}}>


  <LineChart
data={{
labels: [array[0].time,array[1].time,array[2].time,array[3].time,array[4].time,array[5].time,array[6].time,],
datasets:[
  {
    data: [array[0].temperature,array[1].temperature,array[2].temperature,array[3].temperature,array[4].temperature,array[5].temperature,array[6].temperature,],
  color: (opacity = 0.4) => `grey`, 
  strokeWidth: 2 
  }
]
}}

width={Dimensions.get("window").width}
height={220}

yAxisSuffix="°"
yAxisInterval={1} 
chartConfig={{
  backgroundColor: "#fff",
  backgroundGradientFrom: "#fff",
  backgroundGradientTo: "#97C4B0",
  decimalPlaces: 2 , 
  color: (opacity = 0) => `rgba(55, 47, 49, ${opacity})`,
  labelColor: (opacity = 1) =>  `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "white"
  }
}}
  bezier
style={{
  marginVertical: 8,
  borderRadius: 16
}}
/>
</View>

         </View>
         </View>
       
            </ImageBackground>
   
      
                  
             
    
             
             
           
                
  );

}
    const styles = StyleSheet.create({
      Backgroundcontainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
      },
        container: {
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          resizeMode: 'cover',
        },  
          day:{
            top:35,
            left:50,
            fontSize: 15,
            fontWeight: 'bold',
            color:'#568778',
          }
        });
    

        export default graph;