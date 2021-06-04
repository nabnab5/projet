import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import {
    useTheme,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    Header
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';





export function DrawerContent(props) {

    

   

    return(
        <View style={{flex:1}}>
       
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{marginTop: 15}}>
                        <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
                            
                        </View>

                        
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require('../assets/images/baby.png')} style={styles.icon} />
                            )}
                            label="BabyProfile"
                            onPress={() => {props.navigation.navigate('BabyProfile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require('../assets/images/hot.png')} style={styles.icon} />
                            )}
                            label="Temperature"
                            onPress={() => {props.navigation.navigate('Graphs1')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require('../assets/images/heartbeat.png')} style={styles.icon} />
                            )}
                            label="HeartBeat"
                            onPress={() => {props.navigation.navigate('Graphs2')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require('../assets/images/baby-weight.png')} style={styles.icon} />
                            )}
                            label="weight"
                            onPress={() => {props.navigation.navigate('Graphs3')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require('../assets/images/height.png')} style={styles.icon} />
                            )}
                            label="Size"
                            onPress={() => {props.navigation.navigate('Graphs4')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require('../assets/background/baby-mobile.png')} style={styles.icon} />
                            )}
                            label="Sleep"
                            onPress={() => {props.navigation.navigate('Graphs5')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require('../assets/background/support.png')} style={styles.icon} />
                            )}
                            label="body masse update"
                            onPress={() => {props.navigation.navigate('testt')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require('../assets/images/map.png')} style={styles.icon} />
                            )}
                            label="Maps"
                            onPress={() => {props.navigation.navigate('Maps')}}
                        />
                        
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require('../assets/images/doctor.png')} style={styles.icon} />
                            )}
                            label="Conseils"
                            onPress={() => {props.navigation.navigate('conseils')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require('../assets/images/information.png')} style={styles.icon} />
                            )}
                            label="AboutUs"
                            onPress={() => {props.navigation.navigate('AboutUs')}}
                        />
                    </Drawer.Section>
                   
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Image source={require('../assets/images/exit.png')} style={styles.icon} />
                    )}
                    label="Sign Out"
                    onPress={() => {props.navigation.replace('Login')}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    logo: {
        width: 90,
        height: 90,
        left:60
      },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    icon:{
        width: 40,
        height: 40,
    }
  });