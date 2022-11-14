import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import GFonts from 'react-native-vector-icons/MaterialIcons';


export default function Pedidos() {
  const navigation = useNavigation();
  const [Pedidos, statePedidos] = useState(true);




  const open = {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    color: "#132C48"
  }

  const close = {
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    color: "#132C48"
  }
  function state(item) {
    if (Pedidos == true) {
      open
      return (item)
    } else {
      return (close)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => navigation.goBack()}
        >
       {/*    <GFonts
            name="keyboard-return"
            size={30}
            color="#FFF"
          /> */}
        </TouchableOpacity>
        <Text style={styles.textPedido}>Pedidos</Text>

        <View style={styles.areaButtons}>
          <TouchableOpacity
            style={styles.areaBtnOpen}
            onPress={state}
          >
            <Text style={open}>Em Aberto</Text>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={}
            style={styles.areaBtnClose}
          >
            <Text style={close}>Fechado</Text>
          </TouchableOpacity>
        </View>
      </View>






    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.btnNewPedido}
        onPress={() => navigation.navigate('')}
      >
        <Text style={styles.textButton} > Criar Pedido </Text>
      </TouchableOpacity>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
  },
  buttonBack: {
    height: 46,
    width: 46,
    backgroundColor: "#132C48",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 16,
    marginTop: 17,
    position: 'absolute'

  },
  textPedido: {
    alignSelf: 'center',
    fontFamily: 'Lato-Bold',
    marginTop: 28,
    color: "#132C48",
    fontSize: 20
  },
  areaButtons: {
    marginTop: 38,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  areaBtnOpen: {

  },
  areaBtnClose: {
    marginLeft: 87
  },
  footer: {
   height: 80,
   backgroundColor: "#FFFFFF",
   justifyContent: 'center',
   alignItems: 'center',
   shadowColor: "#00000029",
   shadowOffset: {
     height: 10,
     width: 7,
   },
   shadowOpacity: 0.3,
   elevation: 5
  },
  btnNewPedido: {
    height: 48,
    width: 343,
    backgroundColor: "#132C48",
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'

  },
  textButton: {
    fontFamily: "Lato-Regular",
    fontSize: 18,
    color: "#FFFFFF"
  }

});
