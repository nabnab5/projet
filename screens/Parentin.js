import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, ImageBackground, Text, View } from 'react-native';

const Parentin = () =>(
  
    <ImageBackground source={require('../assets/background/BGFO.jpg')} style={styles.Backgroundcontainer}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          
        <View style={styles.cartTitle}>
           <Text>Parenting Tips</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Live in the now</Text>
           <Text>You hereby have permission to stop worrying about your checklist and learn to be present with your baby. Enjoy your precious moments together.</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Chill out about toddler meals</Text>
           <Text>Expect odd food habits. Offer a variety. Don’t push, don’t panic. They’ll eat when they’re hungry. </Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Stick to an early bedtime</Text>
           <Text>Your child will get the sleep he needs, and you’ll get to recharge your batteries.</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Say NO</Text>
           <Text>The better you get at turning down requests that aren’t in your child’s best interest, the fewer times you’ll need to do so. You can say no once in the supermarket when your child asks to buy a carton of ice cream, or you can say it every night once that carton is sitting in your freezer at home. </Text>
           
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Create mini traditions</Text>
           <Text>Hang balloons around the kitchen table the night before your child’s birthday so she wakes up to a special day. Make a funny noise when it’s just you and your kids in an elevator. Create a handshake that only they know</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Be ready for sick days</Text>
           <Text>Stock up on rehydration drinks like Pedialyte, Gatorade, or Vitamin Water so you don’t have to run to the store in the middle of the night when your little one is vomiting.</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Let your partner take over</Text>
           <Text>He’s all in, so encourage him to be in charge of bathing, reading, or tummy time (or all three). They’re great bonding activities—and an opportunity for you to take a breather.</Text>
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Give yourself time-outs</Text>
           <Text>When you’re feeling angry, you’re less likely to respond to your child in a helpful way. You don’t have to react instantly. Taking a brief break helps you settle down and think things through. </Text>
           
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Put down your phone</Text>
           <Text>When you’re with your kids, that call/text/e-mail can wait. They know when you’re not paying attention.</Text>
           
         </View>
         <View style={styles.cartCard}>
           <Text style={styles. titleText}>Act silly</Text>
           <Text>Life can be too serious. Let your kids see you laugh, make funny faces, and chase them around the house saying, “I’m gonna get you!”</Text>
         
         </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
  
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: '#fff',
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
  cartTitle: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: '#EFE6DB',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',  
    fontSize: 20,
    fontWeight: "bold"
  },
  titleText: {
    fontSize:15,
    fontWeight: "bold"
  },
  cartCard: {
    
    elevation: 15,
    borderRadius: 10,
    backgroundColor: '#E8F4EB',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Parentin;