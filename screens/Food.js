import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, ImageBackground, Text, View } from 'react-native';


const Food = () =>(
  <ImageBackground 
  style={styles.Backgroundcontainer}
  source={{uri:'https://i.pinimg.com/736x/ba/c2/9b/bac29b6cada22c863d142924a42321ad.jpg'} }>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.cartTitle}>
          <Text style={styles. titleText}>A few things to keep in mind</Text>
         <View style={styles.paragraph}>
          <Text>A few things to keep in mind when thinking about baby food:</Text>
          <Text>New eaters only need about 1 to 2 tablespoons of a food, so keep portions small.</Text>
          <Text>Be on the lookout for allergies, especially when feeding your child foods that contain common allergens. Common allergens include eggs, peanut, wheat, soy, fish, and shellfish.</Text>
          <Text>The newest evidence shows there is no benefit in delaying introducing these foods beyond 6 months or to introducing foods in any particular order.</Text>
          <Text>Most of all, don’t forget to have fun!</Text>
          </View>
        </View>


        
       <View style={styles.cartTitle}>
         <Text style={styles. titleText}>4 to 6 months old</Text>
         
         <View style={styles.paragraph}>
           <Text>When your baby is 4 to 6 months old, you’ll want to use simple, single-ingredient purées.</Text>
         <Text>This can help you to spot and identify a food allergy or sensitivity. Once you have proven your child’s tolerance to individual foods, you can try combinations to enhance flavor and likeability.</Text>
       </View>

       </View>
       <View style={styles.cartCard}>
         <Text style={styles. titleText}>Green Peas</Text>
         <Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/564x/bf/55/5e/bf555e65f375ce8d3df79530b270df11.jpg'
}}
/>
         <Text>Peas are a small yet mighty source of nutrition, packing vitamins A and C, iron, protein, and calcium.</Text>
       </View>
       <View style={styles.cartCard}>
         <Text style={styles. titleText}>Banana purée</Text>
         <Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/564x/22/00/ce/2200cee61cac56015ae6778021c99ec9.jpg'
}}
/>
         <Text>Often called a “perfect” food, bananas are rich in potassium and fiber.</Text>
         <Text>Bananas are also known as one of nature’s own antacids and are very gentle on the stomach. Although bananas are one of the best first foods for babies, be careful not to overdo it. Too much banana can cause constipation.</Text>
       </View>
       <View style={styles.cartCard}>
         <Text style={styles. titleText}>Baby brown rice cereal</Text>
         <Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/d8/c6/3d/d8c63d6f7f6aa659375fd1d314c09402.jpg'
}}
/>
         <Text>Rice cereal is one of the most common foods to introduce because it’s less allergenic and easily digested.</Text>
         <Text>Mixing it to a fairly thin texture can help babies make the transition from an all-liquid diet to a more solid one. This same process can be applied to steel-cut oats.</Text>
       </View>
       <View style={styles.cartCard}>
         <Text style={styles. titleText}>Avocado purée</Text>
         <Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/a7/03/73/a703737d53e16fd2defe23a8f31430b9.jpg'
}}
/>
         <Text>This buttery treat is a wonderful “good fats” food for baby’s brain and physical development. Plus, the creamy texture of perfectly ripe avocado is one that babies seem to love.</Text>
         <Text>To help prevent browning, put the avocado pit in the puree when refrigerating.</Text>
       </View>
       <View style={styles.cartCard}>
         <Text style={styles. titleText}>Baked sweet potato purée</Text>
         <Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/564x/41/4f/33/414f33d3a9d75dd0afcea44d9a63310b.jpg'
}}
/>
         <Text>In-the-know adults eat sweet potatoes for their health benefits. Sweet potatoes are loaded with vitamins, antioxidants, and fiber, so it makes sense that your baby can benefit from this delicious tuber, too.</Text>
         <Text>A simple purée with a touch of water or your baby’s milk makes for a yummy and nutritious first food.</Text>
         </View>
       <View style={styles.cartCard}>
         <Text style={styles. titleText}>First carrots purée</Text>
         <Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/d6/c1/71/d6c171bdba2524cbed63d733a56cf39d.jpg'
}}
/>
         <Text>Carrots are a wonderful introduction to solids because of their naturally sweet taste and pleasant texture.</Text>
         <Text>This simple preparation of carrots provides a rich supply of the antioxidant beta carotene and vitamin A.</Text>
       </View>
       <View style={styles.cartTitle}>
         <Text style={styles. titleText}>7 to 9 months old</Text>
         <View style={styles.paragraph}>
           <Text>For a 7- to 9-month-old baby, you can make thicker purées with multiple ingredients.</Text>
         <Text>Remember to introduce one new ingredient at a time and combine foods that you know they aren’t allergic to. You can also add meat and other proteins at this stage, or even earlier if your pediatrician gives the OK.</Text>
       </View>

       </View>
       
       <View style={styles.cartCard}>
         <Text style={styles. titleText}>Pumpkin thyme purée</Text>
         <Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/58/9e/77/589e774aa64d835dd33542cff8d69536.jpg'
}}
/>
         <Text>This easy and elegant seasonal recipe is full of beta carotene, potassium, and iron. Make a big batch and freeze it in ice cube trays for single-portion servings for later!</Text>          
       </View>
       <View style={styles.cartCard}>
         <Text style={styles. titleText}>First spinach with white yams</Text>
         <View style={styles.avatarFood}>
         <Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/2b/d6/85/2bd685182ae35fe1a5b93371b4de67a6.jpg'
}}
/>
<Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/af/c6/b1/afc6b14bc1a285b057e1de88c52e6ce5.jpg'
}}
/>
</View>
         <Text>This simple combination of spinach and yams adds a healthy dose of calcium, iron, vitamin A, and folate to your baby’s diet. The yams add a touch of sweetness to create a pleasant introduction to greens.</Text>        
       </View>
       <View style={styles.cartCard}>
         <Text style={styles. titleText}>Beets and blueberry mash</Text>
         <View style={styles.avatarFood}>
         <Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/92/0d/e3/920de30fd80088aa6effe9356f9d9544.jpg'
}}
/>
<Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/29/f4/17/29f417156eca007a06597f7ea283cc93.jpg'
}}
/>
</View>
         <Text>Not only is this blend a beautiful shade of magenta, it’s also a nutritious combination of antioxidants, vitamins, and fiber.</Text>
         <Text>You can also mix this purée with a little cereal for a delicious breakfast for baby.</Text>          
       </View>
       <View style={styles.cartCard}>
         <Text style={styles. titleText}>Avocado and banana baby food</Text>
         <View style={styles.avatarFood}>
         <Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/a7/03/73/a703737d53e16fd2defe23a8f31430b9.jpg'
}}
/>
<Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/564x/22/00/ce/2200cee61cac56015ae6778021c99ec9.jpg'
}}
/>
</View>
         <Text>This is a pairing of two wonderful foods: avocados (good fats and fiber) and bananas (potassium and vitamin C).</Text>          
         <Text>The banana also adds a bit of sweetness and lightens up the usually dense avocado purée. Nix the sugar, and stick with the natural sweetness of the ingredients themselves for young babies.</Text>
       </View>
       <View style={styles.cartCard}>
         <Text style={styles. titleText}>Veggies and sole purée</Text>
         <View style={styles.avatarFood}>
         <Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/bb/49/34/bb4934bff570fc1d1b7512069e6acc28.jpg'
}}
/>
<Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/e1/7b/e7/e17be7f14e54772560cf99bd1978baad.jpg'
}}
/>
         <Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/564x/bf/55/5e/bf555e65f375ce8d3df79530b270df11.jpg'
}}
/>
<Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/90/ab/cb/90abcb3c64d016118cb6e1b316672823.jpg'
}}
/>
</View>
         <Text>Potatoes, carrots, peas, and fish make for a delicious combination that’s ready to eat in under 8 minutes.</Text> 
         <Text>Vegit is a seasoning ingredient in this recipe that can also be subbed for Mrs. Dash, another low-sodium seasoning. This is a great, simple introduction to fish for your baby.</Text>          
       </View>
       <View style={styles.cartCard}>
         <Text style={styles. titleText}> Butternut squash and pear purée</Text>
         <View style={styles.avatarFood}>
         <Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/a2/a2/98/a2a298fc6df2d89e8c974c366d51d6e1.jpg'
}}
/>
<Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/54/b3/ce/54b3cee3c81969b441be32f1ff661c95.jpg'
}}
/>
</View>
         <Text>Butternut squash is a great ingredient because it rarely causes allergies. Pear adds an additional touch of sweetness to this recipe.</Text>
               
       </View>
       <View style={styles.cartTitle}>
         <Text style={styles. titleText}>9 to 12 months old</Text>
         <View style={styles.paragraph}>
           <Text>At 9 to 12 months old, your baby can enjoy chunkier purées and mashes. You can also add dairy, such as cheese or yogurt, to their foods.</Text>
         <Text>At this stage, many babies can even advance to adult food and complex combinations, finely minced or softened.</Text>
       </View>

       </View>
       <View style={styles.cartCard}>
         <Text style={styles. titleText}>White fish, carrot, and leek purée</Text>
         <View style={styles.avatarFood}>
         <Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/2f/0f/da/2f0fda2a20275c188083c4cf6e6a3ec3.jpg'
}}
/>
<Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/e1/7b/e7/e17be7f14e54772560cf99bd1978baad.jpg'
}}
/>
<Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/89/5a/ab/895aabe38d1f5b4a9b60efecd32617db.jpg'
}}
/>

</View>
         <Text>This purée combination is a savory, brain-boosting powerhouse.</Text>
         <Text>White fish contains omega-3 fatty acids and may help boost development of baby’s central nervous system. Leeks are thought by some to provide cardiovascular support and carrots are loaded with antioxidants.</Text>           
       </View>
       <View style={styles.cartCard}>
         <Text style={styles. titleText}>Raw baby purée of blueberries, mango, avocado, and mild chilies</Text>
         <View style={styles.avatarFood}>
         <Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/b5/ac/eb/b5aceb5ed08466ed1a3898aeef8aa634.jpg'
}}
/>
<Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/d1/77/4a/d1774a71260e299d79e43026970024b4.jpg'
}}
/>
         <Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/7a/7c/e1/7a7ce19a89e75067502770d27f7fde4e.jpg'
}}
/>
<Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/69/2d/27/692d272200c9aa18a7b6032ac5f547cc.jpg'
}}
/>
</View>
         <Text>Another nutrient-dense combination, this recipe combines creamy avocado, tangy mango, blueberries, and the interesting addition of mild green chilies!</Text>          
       </View>
       <View style={styles.cartCard}>
         <Text style={styles. titleText}>Creamy Provencal chicken</Text>
         <View style={styles.avatarFood}>
         <Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/fa/24/5a/fa245af9428fbce1ccd823bc481e8474.jpg'
}}
/>
<Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/61/e0/ec/61e0ec4cc8f94a7257bb2848d64111b7.jpg'
}}
/>
</View>
         <Text>This dish incorporates Herbes de Provence, a mild blend of spices that can help introduce your child to more exciting flavors, without the addition of salt.</Text>
                   
       </View>
       <View style={styles.cartCard}>
         <Text style={styles. titleText}>Cherry and mint Greek yogurt baby food purée</Text>
         <View style={styles.avatarFood}>
         <Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/10/19/6f/10196f6b06e204b7c365aef9f6ba463a.jpg'
}}
/>
<Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/62/8d/fd/628dfdc5c96269e016cee15781b9de48.jpg'
}}
/>
<Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/9d/13/2c/9d132ca643ec9a7038549ca759bf4cee.jpg'
}}
/>
</View>
         <Text>This homemade cherry purée is a delicious topping for the yogurt base. Make sure to use full-fat yogurt!</Text>
                  
       </View>
       <View style={styles.cartCard}>
         <Text style={styles. titleText}>Apricot and banana food with cinnamon</Text>
         <View style={styles.avatarFood}>
         <Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/59/73/cf/5973cf9a994c7d051b5300b6219de584.jpg'
}}
/>
<Avatar
size="small"
rounded
source={{
  uri:
    'https://i.pinimg.com/236x/55/69/37/556937069c339cbfea8ad91ac54c0570.jpg'
}}
/>
</View>
         <Text>Spice things up in baby’s diet with a dash of cinnamon.</Text>
         <Text>For a great breakfast, try adding this purée to a bit of cereal or cooked oatmeal, which can also make a great breakfast.</Text>           
       </View>
       <View style={styles.cartTitle}>
         <Text style={styles. titleText}>Easy as 1-2-3</Text>
         <View style={styles.paragraph}>
           <Text>There you have it! All you need are wholesome ingredients, some basic cooking supplies, and a blender </Text>
         </View>
       </View>
      </ScrollView>
    </SafeAreaView>
  </ImageBackground>
);




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
cartTitle: {
 
  elevation: 15,
  borderRadius: 10,
  backgroundColor: '#D7B3A9',
  marginVertical: 10,
  marginHorizontal: 20,
  padding: 15,
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
paragraph: {
  fontSize:10,

},
cartCard: {
  padding: 15,
  elevation: 15,
  borderRadius: 10,
  backgroundColor: '#E6D3CD',
  marginVertical: 10,
  marginHorizontal: 20,
  paddingHorizontal: 10,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
},
avatarFood: {
  flexDirection:'row',
  alignItems: 'center',
  justifyContent:'center'

}
});

export default Food;