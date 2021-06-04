import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  ImageBackground,
  ScrollView,
  Image,
  SafeAreaView,
  Button,
} from 'react-native';
import Constants from 'expo-constants';

import Speedometer from 'react-native-cool-speedometer';
import firebase from '../firebase/fire';


let number=30;
let time = new Date().getDate()+'/'+(new Date().getMonth()+1) ;
const testt = () =>{
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(false);

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
  
  const handleGraphWeight = () => {
    firebase
      .firestore()
      .collection('Graph')
      .doc(firebase.auth().currentUser.uid)
      .update({
        Wone: userData ? userData.Wone : '',
        Wtwo: userData ? userData.Wtwo : '',
        Wthree: userData ? userData.Wthree : '',
        Wfour: userData ? userData.Wfour : '',
        Wfive: userData ? userData.Wfive : '',
        Wsix: userData ? userData.Wsix : '',
        Wseven: userData ? userData.Wseven : '',
        Weight: userData.Weight,

        Hone: userData ? userData.Hone : '',
        Htwo: userData ? userData.Htwo : '',
        Hthree: userData ? userData.Hthree : '',
        Hfour: userData ? userData.Hfour : '',
        Hfive: userData ? userData.Hfive : '',
        Hsix: userData ? userData.Hsix : '',
        Hseven: userData ? userData.Hseven : '',
        Height: userData.Height,

        Sone: userData ? userData.Sone : '',
        Stwo: userData ? userData.Stwo : '',
        Sthree: userData ? userData.Sthree : '',
        Sfour: userData ? userData.Sfour : '',
        Sfive: userData ? userData.Sfive : '',
        Ssix: userData ? userData.Ssix : '',
        Sseven: userData ? userData.Sseven : '',
        Seight: userData.Seight,

        Tone: userData ? userData.Ttwo :"",
        Ttwo: userData ? userData.Tthree :"",
        Tthree: userData ? userData.Tfour :"",
        Tfour: userData ? userData.Tfive :"",
        Tfive: userData ? userData.Tsix :"",
        Tsix: userData ? userData.Tseven :"",
        Tseven: userData ? userData.Teight:"",
        Teight: time,
      })
      .then(() => {
        change();
        setLoading(true);
      }, [loading]);
  };
  
 
  const change = () => {
    userData.Wone = userData ? userData.Wtwo : '';
    userData.Wtwo = userData ? userData.Wthree : '';
    userData.Wthree = userData ? userData.Wfour : '';
    userData.Wfour = userData ? userData.Wfive : '';
    userData.Wfive = userData ? userData.Wsix : '';
    userData.Wsix = userData ? userData.Wseven : '';
    userData.Wseven = userData ? userData.Weight : '',
    userData.Weight = userData.Weight,

    userData.Hone = userData ? userData.Htwo : '';
    userData.Htwo = userData ? userData.Hthree : '';
    userData.Hthree = userData ? userData.Hfour : '';
    userData.Hfour = userData ? userData.Hfive : '';
    userData.Hfive = userData ? userData.Hsix : '';
    userData.Hsix = userData ? userData.Hseven : '';
    userData.Hseven = userData ? userData.Height : '',
    userData.Height = userData.Height,

    userData.Sone = userData ? userData.Stwo : '';
    userData.Stwo = userData ? userData.Sthree : '';
    userData.Sthree = userData ? userData.Sfour : '';
    userData.Sfour = userData ? userData.Sfive : '';
    userData.Sfive = userData ? userData.Ssix : '';
    userData.Ssix = userData ? userData.Sseven : '';
    userData.Sseven = userData ? userData.Seight : '',
    userData.Seight = userData.Seight,

    userData.Tone= userData ? userData.Ttwo :"",
    userData.Ttwo= userData ? userData.Tthree :"",
    userData.Tthree= userData ? userData.Tfour :"",
    userData.Tfour= userData ? userData.Tfive :"",
    userData.Tfive= userData ? userData.Tsix :"",
    userData.Tsix= userData ? userData.Tseven :"",
    userData.Tseven= userData ? userData.Teight:"",
    userData.Teight= time
  };
  
 
  
    let weight = userData.Weight;
    let heightInM = userData.Height*0.01;
    let height = heightInM*heightInM;
    let result = weight/height;
   

 const graph = () => {
  handleGraphWeight()
 
 }
 
  return (
    <ScrollView>
    <ImageBackground
      source={{
        uri:
          'https://i.pinimg.com/236x/d2/18/9c/d2189cadb9df3a60b79c15ecbb83febe.jpg',
      }}
      style={styles.Backgroundcontainer}>
      <SafeAreaView style={styles.container}>
        
          <View style={styles.viewInput} >
            <View style={styles.viewInput1}>
              <Image
                source={require('../assets/images/weight.png')}
                style={styles.imageSize}
              />
              <Text style={styles.textCenter}>weight</Text>
              <Text style={styles.inputText}>update weight</Text>
              <View>
                <TextInput
                  style={styles.input}
                  //change here
                  onChangeText={(txt) => setUserData({ ...userData, Weight: txt })}
                  value={userData ? userData.Weight : ''}
                  placeholder="weight with kg"
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={styles.viewInput2}>
              <Image
                source={require('../assets/images/baby-height.png')}
                style={styles.imageSize}
              />
              <Text style={styles.textCenter}>height</Text>
              <Text style={styles.inputText}>update height</Text>
              <View>
                <TextInput
                  //change here
                  style={styles.input}
                  onChangeText={(txt) => setUserData({ ...userData, Height: txt })}
                  value={userData ? userData.Height : ''}
                  placeholder="height with cm"
                  keyboardType="numeric"
                />

               
              </View>
              
            </View>
          </View>
          <View style={styles.viewInput1}>
              <Image
                source={require('../assets/background/baby-mobile.png')}
                style={styles.imageSize}
              />
              <Text style={styles.textCenter}>Sleep</Text>
              <Text style={styles.inputText}>Update Sleep</Text>
              <View>
                <TextInput
                  style={styles.input}
                  //change here
                  onChangeText={(txt) => setUserData({ ...userData, Seight: txt })}
                  value={userData ? userData.Seight : ''}
                  placeholder="sleep by hours"
                  keyboardType="numeric"
                />
              </View>
            </View>
          <View style={styles.buttonView}>
          <Button
            color="#66CDAA"
            fontWeight="bold"
            title="add"
            shadowColor="rgba(0,0,0,0.1)"
            shadowOpacity="0.8"
            //change here
            onPress={graph}
          />
        </View>
          <View>
         
            <Speedometer
              style={styles.speedometerStyle}
              primaryArcWidth={5}
              secondaryArcWidth={4}
              //put the BMI result in the value
              value={result}
              max={40}
              angle={170}
              accentColor={'green'}
              dangerZone
              dangerZoneAngle={60}
              backgroundAngle={180}
              indicatorStyle={{
                bottom: 55,
                fontSize: 30,
                color: '#555',
              }}
              needle={{
                color: 'white',
                circleColor: '#f0f5d8',
                baseWidth: 10,
                baseOffset: 0,
              }}
              fontFamily="squada-one"
              indicatorSuffix="BMI"
              backgroundColor="#f3f2e7"
            />
          </View>
       
      </SafeAreaView>
    </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    display:'flex',
    alignItems:'center',
  },
  Backgroundcontainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  viewInput:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  margin:30,
  },

  imageSize: {
    height: 60,
    width: 60,
    alignSelf: 'center',
    margin:4,
    
  },
  textCenter: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    margin:4,
  },
  inputText: {
    alignSelf: 'center',
    fontSize: 15,
    margin:4,
  },
  input: {
    borderRadius: 16,
    width: 150,
    height: 40,
    backgroundColor: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    margin:4,
  },
  viewInput1: {
 margin:6,
 padding:4,
 display:'flex',
 justifyContent:'space-between'
  },
  viewInput2: {
 margin:6,
 padding:4,
 display:'flex',
 justifyContent:'space-between'
  },
  buttonView: {
    margin:10,
  },
  speedometerStyle: {
    alignSelf: 'center',
    margin:6,
  },
});
export default testt;