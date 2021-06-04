import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, ImageBackground, Text, View } from 'react-native';
const Vaccination = () =>{
  return (
    <ImageBackground 
    style={styles.Backgroundcontainer}
    source={require('../assets/background/3.png') }>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View >
            <Text style={styles.title}>Schedule of Public Health Vaccinations</Text>
          </View>
        <View style={styles.cartTitle}>
           <Text style={styles.titleText}>First year</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>During the first 24h from birth</Text>
           <Text>An oral Hepatitis B vaccine</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>First month</Text>
           <Text>Tuberculosis (BCG)</Text>
           <Text>An oral Poliomyelitis vaccine</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Second month</Text>
           <Text>Diphtheria</Text>
           <Text>Tetanus</Text>
           <Text>whooping cough disease</Text>
           <Text>Haemophilus influenzae disease</Text>
           <Text>Hepatitis B disease</Text>
           <Text>An oral Poliomyelitis vaccine</Text>
           <Text>Rotavirus</Text>
           <Text>Pneumococcal bacteria</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Third Month</Text>
           <Text>Diphtheria</Text>
           <Text>Tetanus</Text>
           <Text>whooping cough disease</Text>
           <Text>Haemophilus influenzae disease</Text>
           <Text>Hepatitis B disease</Text>
           <Text>An oral Poliomyelitis vaccine</Text>
           <Text>Rotavirus</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Fourth month</Text>
           <Text>Diphtheria</Text>
           <Text>Tetanus</Text>
           <Text>whooping cough disease</Text>
           <Text>Haemophilus influenzae disease</Text>
           <Text>An oral Poliomyelitis vaccine</Text>
           <Text>Pneumococcal bacteria</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>12 months</Text>
           <Text>Measles</Text>
           <Text>Hepatitis B disease</Text>
           <Text>Pneumococcal bacteria</Text>
         </View>
         <View style={styles.cartTitle}>
           <Text style={styles.titleText}>Remainder vaccines</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>18 months</Text>
           <Text>Diphtheria</Text>
           <Text>Tetanus</Text>
           <Text>whooping cough disease</Text>
           <Text>An oral Poliomyelitis vaccine(reminder1)</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>5 years</Text>
           <Text>Diphtheria</Text>
           <Text>Tetanus</Text>
           <Text>whooping cough disease</Text>
           <Text>An oral Poliomyelitis vaccine(reminder2)</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>6 years</Text>
           <Text>Measles</Text>
           <Text>or</Text>
           <Text>Measles+ Rubella</Text>
           <Text>or</Text>
           <Text> Measles + Rubella + Mumps</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Each 10 years</Text>
           <Text>diphtheria</Text>
           <Text>Tetanus</Text>
           <Text>An oral Poliomyelitis vaccine</Text>
         </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
   
    marginHorizontal: 20,
  },
  Backgroundcontainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  title:{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    padding: 15,
    fontWeight: "bold",
    color:'#95BA8F',
  },
  cartTitle: {
    padding: 15,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: '#95BA8F',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',  
    fontSize: 30,
    fontWeight: "bold"
  },
  titleText: {
    fontSize:15,
    fontWeight: "bold"
  },
  cartCard: {
    padding: 15,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: '#BCD8BD',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Vaccination;