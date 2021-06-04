import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Linking,TouchableOpacity,Button} from 'react-native';



    const conseils = (props) =>(
      
        <ImageBackground source={require('../assets/background/gra.png')} style={styles.Backgroundcontainer}>
        <View style={styles.logocontainer}>
          <Image source={require('../assets/images/doctor.png')} style={styles.logo} />
          <Text style={styles.logoText}>conseils</Text>
        </View>
       
        <TouchableOpacity>
        <View style={{
                       alignItems:"center",
                       backgroundColor:"grey",
                       
                       borderRadius:25,
                       paddingVertical:10,
                       paddingHorizontal:15
                   }}>
                       
                       <Button  color='grey' fontWeight='bold' title="                  Baby Food                   " onPress={() => props.navigation.navigate('Food')}/>
                   </View>
          
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity>
        <View style={{
                       alignItems:"center",
                       backgroundColor:"grey",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:10,
                       paddingHorizontal:15
                   }}>
                       
                       <Button  color='grey' fontWeight='bold'  title="            Parenting Tips            " onPress={() => props.navigation.navigate('Parentin')}/>
                   </View>
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{
                       alignItems:"center",
                       backgroundColor:"grey",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:10,
                       paddingHorizontal:15
                   }}>
                       
                       <Button  color='grey' fontWeight='bold' title="Schedule of vaccinations" onPress={() => props.navigation.navigate('Vaccination')}/>
                   </View>
          
        </TouchableOpacity>
        
        </ImageBackground>
        
    );

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
          button:{
            width:230,
            height:50,
            borderRadius:15
          },
          text:{
           bottom:35,
           left:30,
           fontWeight:'bold',
           fontSize:16
           
          },
          logocontainer: {
            alignItems: 'center',
            marginBottom: 70,
          },
          logoText: {
            color: '#758b9c',
            fontSize: 40,
            fontWeight: 'bold',
            marginTop: 20,
            opacity: 0.8
          },
          para:{
              alignItems:'center',
              fontSize:35,
              bottom:30,
              fontWeight: 'bold',
              color:'yellow'
          }
        });


        export default conseils;