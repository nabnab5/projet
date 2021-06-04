import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Linking,ScrollView,TouchableOpacity,} from 'react-native';





    const AboutUs = () =>(
      
        <ImageBackground source={require('../assets/images/aboutUs.jpg')} style={styles.Backgroundcontainer}>
        <ScrollView>
        <View style={styles.logocontainer}>
          <Image source={require('../assets/images/information.png')} style={styles.logo} />
          <Text style={styles.logoText}>AboutUs</Text>
        </View>
        <Text style={styles.para}>Meet the team :</Text>
        <Text>            </Text>
    <View style={styles.Us}>
    <View style={styles.contact}  >
        <Image source={require('../assets/images/mahdi.jpg')} style={styles.Image}/>
        
        <View style={styles.Text}>
        <View style={styles.Name}>
             <Text style={{fontSize:20,right:5}}>Naboulsi El Mahdi</Text>
        </View>
              <Text>Etudiant de l'informatique</Text>
              <Text>âgée de 19 ans .</Text>
              <Text>J'apprécie particulièrement </Text>
              <Text>la découverte et la maîtrise des</Text>
              <Text>nouvelles technologies .</Text>
              <Text>Je suis le front-end développer</Text>
              <Text>de l'équipe .</Text>
        </View>
        
        </View>
        <Text>                                                               </Text>
        <ScrollView horizontal={true}>
        <Text>                               </Text>
        <TouchableOpacity 
          onPress={() => Linking.openURL('https://www.instagram.com/')}>
          <Image source={require('../assets/images/insta.png')} style={{width:25,height:25}}></Image>
          </TouchableOpacity>
          <Text>           </Text>
          <TouchableOpacity 
          onPress={() => Linking.openURL('https://www.facebook.com/')}>
          <Image source={require('../assets/images/lin.png')} style={{width:25,height:25}}></Image>
          </TouchableOpacity>
          <Text>            </Text>
          <TouchableOpacity 
          onPress={() => Linking.openURL('https://www.instagram.com/')}>
          <Image source={require('../assets/images/gmail.png')} style={{width:25,height:25}}></Image>
          </TouchableOpacity>
        </ScrollView>
        <Text></Text>
        <Text>---------------------------------------------------------------------------</Text>
        <Text></Text>
    </View>
    <View style={styles.Us}>
    <View style={styles.contact}  >
        <Image source={require('../assets/images/ouma.jpg')} style={styles.Image}/>
        
        <View style={styles.Text}>
        <View style={styles.Name}>
             <Text style={{fontSize:20}}>Mouniri Oumaima</Text>
        </View>
              <Text>une jeune fille âgée de</Text>
              <Text>20 ans , passionné de </Text>
              <Text>technologie et tous qui </Text>
              <Text>est de développement informatique.</Text>
              <Text>Oumaima travail sur la partie </Text>
              <Text>front-end , et elle est toujours</Text>
              <Text>innovante quand on travaille sur </Text>
              <Text>le design.</Text>
        </View>
        
        </View>
        <Text>                                                               </Text>
        <ScrollView horizontal={true}>
        <Text>                               </Text>
        <TouchableOpacity 
          onPress={() => Linking.openURL('https://www.instagram.com/')}>
          <Image source={require('../assets/images/insta.png')} style={{width:25,height:25}}></Image>
          </TouchableOpacity>
          <Text>           </Text>
          <TouchableOpacity 
          onPress={() => Linking.openURL('https://www.facebook.com/')}>
          <Image source={require('../assets/images/lin.png')} style={{width:25,height:25}}></Image>
          </TouchableOpacity>
          <Text>            </Text>
          <TouchableOpacity 
          onPress={() => Linking.openURL('https://mail.google.com/')}>
          <Image source={require('../assets/images/gmail.png')} style={{width:25,height:25}}></Image>
          </TouchableOpacity>
        </ScrollView>
        <Text></Text>
        <Text>---------------------------------------------------------------------------</Text>
        <Text></Text>
    </View>
    <View style={styles.Us}>
    
    <View style={styles.contact}  >
        <Image source={require('../assets/images/achraf.jpg')} style={styles.Image}/>
        
        <View style={styles.Text}>
        <View style={styles.Name}>
             <Text style={{fontSize:20}}>Birhrissen Achraf</Text>
        </View>
              <Text>Achraf Birhrissen âgée de 20 </Text>
              <Text>ans est un jeune passionné des </Text>
              <Text>nouvelles technologique et tous </Text>
              <Text>qui en relation avec le  </Text>
              <Text>développement des sites web et  </Text>
              <Text>les applications mobiles.</Text>
              <Text>Achraf est dans l'équipe autant</Text>
              <Text>que back-end développer.</Text>
        </View>
        
        </View>
        <Text>                                                               </Text>
        <ScrollView horizontal={true}>
        <Text>                               </Text>
        <TouchableOpacity 
          onPress={() => Linking.openURL('https://www.instagram.com/')}>
          <Image source={require('../assets/images/insta.png')} style={{width:25,height:25}}></Image>
          </TouchableOpacity>
          <Text>           </Text>
          <TouchableOpacity 
          onPress={() => Linking.openURL('https://www.facebook.com/')}>
          <Image source={require('../assets/images/lin.png')} style={{width:25,height:25}}></Image>
          </TouchableOpacity>
          <Text>            </Text>
          <TouchableOpacity 
          onPress={() => Linking.openURL('https://mail.google.com/')}>
          <Image source={require('../assets/images/gmail.png')} style={{width:25,height:25}}></Image>
          </TouchableOpacity>
        </ScrollView>
    </View>
         
    </ScrollView>
          
        
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
          contact:{
            flexDirection:'row',
            height:150,
            alignItems: 'center',
            justifyContent: 'center',
          },
          logocontainer: {
            alignItems: 'center',
            marginBottom: 70,
          },
          Us:{
               paddingHorizontal:30,
          },
          logoText: {
            color: '#646D7A',
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 10,
            opacity: 0.8
          },
          para:{
            alignItems:'center',
            fontSize:25,
            justifyContent:'center',
            fontWeight: 'bold',
            left:100
        },
         
          Name:{
            fontSize:20,
            fontWeight: "bold",
            left:20
          },
          Text:{
           left:10
          },
          Image:{
            width: 100,
            height: 100,
            borderRadius: 100,
            overflow: "hidden",
            top:10,
            right:20
          },
          Icon:{
            width: 35,
            height: 35,
          }
        });


        export default AboutUs;