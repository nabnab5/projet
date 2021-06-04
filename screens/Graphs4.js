import React,{useEffect,useState} from 'react';
import { StyleSheet, Text,Image, View,Dimensions,ImageBackground,ScrollView,Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  LineChart
} from "react-native-chart-kit";
import Icon from '@expo/vector-icons/Ionicons';
import firebase from '../firebase/fire';



    const Graphs4 = ({navigation}) =>{
      const [userData, setUserData] = useState(null);
      const getGraph = async () => {
        await firebase
          .firestore()
          .collection('Graph')
          .doc(firebase.auth().currentUser.uid)
          .get()
          .then((documentSnapshot) => {
            if (documentSnapshot.exists) {
              console.log('User Data', documentSnapshot.data());
              setUserData(documentSnapshot.data());
            }
          });
      };
    
      useEffect(() => {
        getGraph();
      }, [userData]);
      
            return(
              
      <ImageBackground source={require('../assets/background/3.png')} style={styles.Backgroundcontainer}>
      <View style={{alignItems: 'center',marginBottom: 70}}>
          <Image source={require('../assets/images/height.png')} style={{width: 70,height: 70,}} />
          <Text style={{color:'#568778',fontSize: 25,fontWeight: 'bold',marginTop: 10,opacity: 0.8}} >Size</Text>
        </View>
        <ScrollView horizontal={true}  >
        
                   <View style={{
                       alignItems:"center",
                       backgroundColor:"#9CCBBD",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../assets/images/hot.png')}
                        style={{height:40,width:40}}
                       />
                       <Button  color='#9CCBBD' fontWeight='bold' title="temperature" onPress={() => navigation.navigate('Graphs1')}/>
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
                      <Button  color='#9CCBBD' fontWeight='bold' title="Heartbeat" onPress={() => navigation.navigate('Graphs2')}/>
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
                      <Button  color='#9CCBBD' fontWeight='bold' title="     weight   " onPress={() => navigation.navigate('Graphs3')}/>
                   </View>
                   <View style={{
                       alignItems:"center",
                       backgroundColor:"#568778",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../assets/images/height.png')}
                        style={{height:40,width:40}}
                       />
                      <Button  color='#568778' fontWeight='bold' title="         Size         " onPress={() => navigation.navigate('Graphs4')}/>
                   </View>
                   </ScrollView>
                 
                      
               
    
             
             <View style={{
      marginHorizontal: 20,
      marginTop: 40
    }}>
    <View style={{flexDirection:'row' ,paddingHorizontal:30,marginTop:40,alignItems:'center',justifyContent:'center'}}>
     <Text style={{fontWeight:"bold",fontSize:20,color:"#9BACAE"}}>DAY        </Text>
     <View style={{backgroundColor:"#9BACAE",elevation:2,width:40,height:40,borderRadius:20,alignItems:'center',justifyContent:"center",marginLeft:50}}>
                            <Icon name="md-refresh" size={24} color="#fff" />
                        </View>
     </View>
     <LineChart
  data={{
    labels: [userData ? userData.Tone : "5",userData ? userData.Ttwo : "8", userData ? userData.Tthree : "7", userData ? userData.Tfour : "8",userData ? userData.Tfive : "8",userData ? userData.Tsix : "8",userData ? userData.Tseven : "8",userData ? userData.Teight : "8"],
    datasets:[
      {
        data: [userData ? userData.Hone : "5",userData ? userData.Htwo : "8", userData ? userData.Hthree : "7", userData ? userData.Hfour : "8",userData ? userData.Hfive : "8",userData ? userData.Hsix : "8",userData ? userData.Hseven : "8",userData ? userData.Height : "8"],
      color: (opacity = 1) => `grey`, 
      }
    ]
  }}
  
  width={Dimensions.get("window").width}
  height={220}
 
    yAxisSuffix="cm"
    yAxisInterval={1} 
    chartConfig={{
      backgroundColor: "#FFF",
      backgroundGradientFrom: "#FFF",
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
            
       
        </ImageBackground>
        
        )
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
          skiptextcont:{
            top:80,
            flexDirection:'row',
          },
          
          inputIcon: {
            position:'absolute',
            bottom: 70,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
          },
          logo: {
            width: 120,
            height: 200,
          }
        });


        export default Graphs4;