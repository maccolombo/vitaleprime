import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
//import GFontes from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import IconInput from '~/components/PDV/input';


export default function Produtos() {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
       <View style={styles.contentHeader}>
           <TouchableOpacity
               style={styles.buttonBack}
               onPress={() => navigation.goBack()}
           >
              {/*  <GFontes
                   name="keyboard-return"
                   size={30}
                   color="#FFF"
               /> */}
           </TouchableOpacity>
               <Text style={styles.textHeader}> Produtos </Text>
       </View>
       <IconInput/>
   </View>
);
};

const styles = StyleSheet.create({
container: {
   flex: 1,
   backgroundColor: "#F3F3F3"
},
buttonBack: {
   height: 46,
   width: 46,
   backgroundColor: "#132C48",
   borderRadius: 5,
   marginLeft: 16,
   marginTop: 4,
   alignItems: 'center',
   justifyContent: 'center',
   position: 'absolute',
   left: 0,
},
contentHeader: {
   flexDirection: 'row',
   justifyContent: 'center'
}, 
textHeader: {
   fontFamily: "Lato-Bold",
   color: "#132C48",
   fontSize: 20,
   marginTop: 15,
   alignSelf: 'center'
},
pesquisaInput: {
   height: 50,
   width: 343,
   marginTop: 34,
   marginLeft: 16,
   marginRight: 16,
   borderRadius: 5,
   backgroundColor: "#FFF",
   alignSelf: 'center',
   color:"#757575"
},
iconGFonts: {
   padding: 16,
}
});