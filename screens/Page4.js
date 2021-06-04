import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput,TouchableOpacity,Button,} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

    const Page4 = ({navigation}) =>(
        
        <View style={styles.container}>
        
          <Text style={styles.Text}>Page4</Text>
          <View style={styles.nexttextcont}>
               
               <Button color='gray' fontWeight='bold' title="Done" onPress={() => navigation.navigate('SignUp')}/>
               
             </View>
             
             <View style={styles.inputIcon}>
             <MaterialCommunityIcons name={'checkbox-blank-circle-outline'} size={28} color={'#CD5C5C'}/>
             <Text> </Text>
             <MaterialCommunityIcons name={'checkbox-blank-circle-outline'} size={28} color={'#CD5C5C'}/>
             <Text> </Text>
             <MaterialCommunityIcons name={'checkbox-blank-circle-outline'} size={28} color={'#CD5C5C'}/>
             <Text> </Text>
             <MaterialCommunityIcons name={'circle'} size={28} color={'#CD5C5C'}/>
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


        export default Page4;