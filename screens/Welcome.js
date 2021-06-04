import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ImageBackground,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const Welcome = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    navigation.replace('Login');
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <ImageBackground source={require('../assets/BACKGROUD.jpg')} style={styles.image}>
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>

         <Text style={styles.introTitleStyle}>{item.title}</Text>
         <Image style={styles.introImageStyle} source={item.image} />
         <Text style={styles.introTextStyle}>{item.text}</Text>
         </View>
        </ImageBackground>
    
     
    );
  };

  return (
    

        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      
    
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  image: {
    flex:1,
    resizeMode: "cover",
    justifyContent: "center",  
  },
  titleStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    paddingVertical: 30,
    fontFamily: 'sans-serif-thin',
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: "Baby tracker where you can keep an eye on your child's health from your phone",
    title: 'welcome',
    image:    
      require('../assets/welcome.png'),
  },
  {
    key: 's2',
    title: 'Temperature',
    text: 'keeping updated about his temperature',
    image: 
    require('../assets/temperature.png'),
  },
  {
    key: 's3',
    title: 'heartbeats',
    text: 'if you are worried .. check the heartbeats',
    image: 
    require('../assets/heartbeat.png'),
  },
  {
    key: 's4',
    title: 'graphs',
    text: 'we give you a daily, weekly graphs to help   you and your baby doctor',
    image:  
    require('../assets/time.png'),
  },
  {
    key: 's5',
    title: 'maps',
    text: 'in case of emergency we make it easier for you to find a pharmacy or hospital',
    image: 
    require('../assets/map.png'),
  },
  {
    key: 's6',
    title: 'doctor in your pocket ',
    text: 'we gave you many advices to take care of your baby health',
    image: 
    require('../assets/doctor.png'),
  },
];