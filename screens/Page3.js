import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput,TouchableOpacity,Button,} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

    const Page3 = ({navigation}) =>(
        
        <View style={styles.container}>
        <View style={styles.skiptextcont}>
               
               <Button color='gray' fontWeight='bold' title="skip" onPress={() => navigation.navigate('SignUp')}/>
               
             </View>
          <Text style={styles.Text}>Page3</Text>
          <View style={styles.nexttextcont}>
               
               <Button color='gray' fontWeight='bold' title="next" onPress={() => navigation.navigate('Page4')}/>
               
             </View>
             
             <View style={styles.inputIcon}>
             <MaterialCommunityIcons name={'checkbox-blank-circle-outline'} size={28} color={'#CD5C5C'}/>
             <Text> </Text>
             <MaterialCommunityIcons name={'checkbox-blank-circle-outline'} size={28} color={'#CD5C5C'}/>
             <Text> </Text>
             <MaterialCommunityIcons name={'circle'} size={28} color={'#CD5C5C'}/>
             <Text> </Text>
             <MaterialCommunityIcons name={'checkbox-blank-circle-outline'} size={28} color={'#CD5C5C'}/>
                </View>
        </View>
    );

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          width: '100%',
          height: '100%',
           alignItems: 'center',
          justifyContent: 'center',
          resizeMode: 'cover',
        },  
         Text: {
            color: '#045610',
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 10,
            opacity: 0.8
          },
          skiptextcont:{
            bottom:90,
            left:90
          },
          nexttextcont:{
            top:90,
            left:90
          },
          inputIcon: {
            position:'absolute',
            bottom: 70,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
          }
        });


        export default Page3;