import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
//import GFonts from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function CriarPedido() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <View style={styles.contentHeader}>
                <TouchableOpacity
                    style={styles.btnBack}
                    onPress={() => navigation.goBack()}
                >
                   {/*  <GFonts
                        name="keyboard-return"
                        size={30}
                        color="#FFF"
                    /> */}
                </TouchableOpacity>
                <Text style={styles.textHeader}> Novo Pedido </Text>
            </View>
            <View style={styles.contentInput}>
                <Text style={styles.textComanda}> Comanda </Text>
                <TextInput
                    style={styles.nmrComanda}
                    placeholder="Numero da Mesa"
                    placeholderTextColor="#757575"
                />
            </View>
            <View>
                <TextInput
                    style={styles.nomeCliente}
                    placeholder="Nome do Cliente"
                    placeholderTextColor="#757575"
                />
                <View
                    style={{
                        width: '100%',
                        height: 3,
                        backgroundColor: "#132C48",
                        marginTop: 20
                    }}
                />
            </View>

            <TouchableOpacity
                style={styles.buttonAdd}
            >
                <Text
                    style={{
                        fontFamily: 'Lato-Bold',
                        fontSize: 19,
                        color: "#132C48"

                    }}>
                    Adicionar itens</Text>
            </TouchableOpacity>
            <View style={styles.footerContent}>
                <View style={styles.elementPage}>
                <Text style={styles.tetxTotal}> Total: </Text>
                <Text style={styles.textValor}> R$ 0,00 </Text>
                    <TouchableOpacity
                        style={styles.buttonContinuar}
                    >
                        <Text style={styles.textContinuar}> Continuar </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F3F3"
    },
    btnBack: {
        height: 46,
        width: 46,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4,
        marginLeft: 16,
        borderRadius: 5,
        backgroundColor: "#132C48",
        position: 'absolute',
        left: 0
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    contentInput: {
        flexDirection: 'row'
    },
    textHeader: {
        fontSize: 20,
        fontFamily: "Lato-Bold",
        color: "#132C48",
        marginTop: 15
    },
    textComanda: {
        marginTop: 37,
        fontFamily: "Lato-Bold",
        color: "#132C48",
        fontSize: 20,
        marginLeft: 16,
        marginRight: 24
    },
    nmrComanda: {
        marginTop: 34,
        backgroundColor: "#FFF",
        borderRadius: 5,
        height: 50,
        width: 234,
        paddingLeft: 18,
        fontSize: 16,
        fontFamily: "Lato-Regular",
        color: "#757575"
    },
    nomeCliente: {
        height: 50,
        width: 343,
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: "#FFF",
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 10,
        padding: 16,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: "#757575"
    },
    buttonAdd: {
        height: 48,
        width: 343,
        marginTop: 20,
        backgroundColor: "#FFF",
        borderRadius: 5,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerContent: {
        flex: 1,
        justifyContent: 'flex-end'

    },
    elementPage: {
        height: 80,
        backgroundColor: "#FFF",
        elevation: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.2
    },
    buttonContinuar: {
        height: 48,
        width: 219,
        backgroundColor: "#132C48",
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginBottom: 16,
        marginTop: 16,
        marginRight: 16,
        position: 'relative'
    },
    textContinuar: {
        fontFamily: "Lato-Regular",
        fontSize: 18,
        color: '#FFFFFF',
    },
    tetxTotal: {
        fontFamily: "Lato-Bold",
        fontSize: 16,
        color: "#132C48",
        marginLeft: 16,
        marginTop: 16,
        position: 'absolute'
    },
    textValor: {
        fontFamily: "Lato-Bold",
        fontSize: 20,
        position: 'absolute',
        color: '#6A7A8B',
        top: 30,
        marginLeft: 16,
        marginTop: 5
    }
});