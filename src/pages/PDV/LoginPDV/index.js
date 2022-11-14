import React, { useState } from 'react';
import { TextInput, StyleSheet, View, StatusBar, Text, TouchableOpacity, SafeAreaView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '~/assets/Logo.svg';
import * as RootNavigation from '~/routes/rootNavigation';

const LoginPDV = () => {

    return (
        <View style={styles.container}>

            <View style={styles.imageLogo}>
                {/*  <Logo height={70} width={304} /> */}
                <Text style={{
                    fontSize: 55,
                    fontWeight: 'bold',
                }}>
                    Comanda
                </Text>
            </View>

            <View style={styles.containerForm}>
                <View style={styles.formTela}>
                    <Text style={styles.textForm}> Entrar </Text>

                    <TextInput
                        style={styles.inputLogin}
                        placeholder="Login"
                        placeholderTextColor="#272424"
                        autoCapitalize="none"
                        />
                    <TextInput
                        style={styles.inputSenha}
                        placeholder="Senha"
                        placeholderTextColor="#272424"
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />

                    <TouchableOpacity
                        style={styles.btnEntrar}
                        onPress={() => RootNavigation.navigate('DashboardPDV')}
                    >
                        <Text style={styles.textEntrar}> Entrar </Text>
                    </TouchableOpacity>


                    <View style={styles.contentBtn}>
                        <TouchableOpacity
                            onPress={() => RootNavigation.navigate("PageConfig")}
                            style={styles.buttonConfig}

                        >
                            <Text style={styles.textConfig}> Configurar </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View >
    );
}
export default LoginPDV;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F3F3"
    },
    containerForm: {
        flex: 1,
        justifyContent: 'flex-end'

    },
    imageLogo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formTela: {
        height: 391,
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
        backgroundColor: "#FFFFFF",
        elevation: 6,
        shadowColor: "#000",
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 0,
        }
    },
    textForm: {
        fontSize: 32,
        fontFamily: 'Lato-Bold',
        color: "#132C48",
        marginTop: 36,
        marginLeft: 29
    },
    inputLogin: {
        height: 45,
        borderWidth: 1,
        borderColor: "#707070",
        backgroundColor: "#FFF",
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 5,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 14,
        fontSize: 14,
        color: "#272424",
        fontFamily: "Lato-Regular",
    },
    inputSenha: {
        height: 45,
        borderWidth: 1,
        borderColor: "#707070",
        backgroundColor: "#FFF",
        marginTop: 20,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 5,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 14,
        fontSize: 14,
        color: "#272424",
        fontFamily: "Lato-Regular",
    },
    btnEntrar: {
        alignSelf: 'center',
        marginTop: 40,
        backgroundColor: "#132C48",
        height: 60,
        width: 163,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textEntrar: {
        color: "#FFFFFF",
        fontFamily: "Lato-Regular",
        fontSize: 18
    },
    contentBtn: {
        alignItems: 'center',
    },
    buttonConfig: {
        marginTop: 34
    },
    textConfig: {
        fontFamily: "Lato-Regular",
        fontSize: 18,
        color: "#132C48"
    }
});