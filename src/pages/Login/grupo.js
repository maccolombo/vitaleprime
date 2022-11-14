import React, { useEffect, useState } from 'react';
import { ImageBackground, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '~/components/Button';
import Input from '~/components/Input';
import services from '~/services';
import * as RootNavigation from '~/routes/rootNavigation'
import LogovitalePrime from '../../assets/vitale-prime-white.svg'
import Spinner from "react-native-loading-spinner-overlay";
import Notify from '~/components/Notify';
import { useAuth } from '~/contexts/auth';

const Grupo = () => {
    const [loading, setLoading] = useState(false)
    const [grupo, setGrupo] = useState(" ");
    const { logar } = useAuth();

    // useEffect(() => {
    //     async function getGrupo() {
    //         const grupo = await services.asyncStorage.getGrupo();
    //         setGrupo(grupo)
    //     }
    //     getGrupo();
    // }, []);


    const handleButton = async () => {
        await logar()
        // if (grupo === "bredas") {
        //     await services.asyncStorage.setEnvironment("stage")
        //     await services.authentication.isGroup(grupo)
        // }else{
        //     await services.asyncStorage.setEnvironment("production")
        // }
        // try {
        //     await services.authentication.isGroup(grupo)
        //     RootNavigation.navigate("Login", grupo)
        //     await services.asyncStorage.setGrupo(grupo)
        // } catch (error) {
        //     Keyboard.dismiss()
        //     error.map(item => {
        //         Notify(item.errorMessage, "error")
        //     })
        // }
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/vitale.png')}
                resizeMode="cover"
                style={styles.imageBG}>

                <Spinner
                    visible={loading}
                    textContent={'Carregando...'}
                    textStyle={{ color: '#FFF' }}
                />

                <KeyboardAvoidingView
                    behavior='padding'
                    keyboardVerticalOffset={64}
                >
                    <View
                        style={styles.logo}
                    >
                        <LogovitalePrime
                            height={80}
                            width={250}
                        />
                    </View>

                    {/* <Input
                        onChangeText={(text) => setGrupo(text.trim().toLowerCase())}
                        placeholder="Grupo"
                        autoCapitalize="none"
                        value={grupo}

                    /> */}
                    <Button
                        label="Profissional da saúde"
                        onPress={handleButton}
                        width={"100%"}
                    />
                    <Button
                        label="Entrar como paciente"
                        onPress={handleButton}
                        width={"100%"}
                    />

                    <View style={styles.lembrar}>
                        <Text style={styles.lembrarText}>
                            Esqueceu a senha?
                        </Text>
                        <TouchableOpacity onPress={() => RootNavigation.navigate("Recuperar")}>
                            <Text style={styles.click}>
                                Clique aqui
                            </Text>
                        </TouchableOpacity>
                    </View>

                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBG: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    logo: {
        alignItems: 'center',
        marginBottom: 20
    },
    lembrar: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    lembrarText: {
        color: "#FFF",
        marginRight: 5
    },
    click: {
        color: "#FFF",
        fontWeight: 'bold'
    }
})
export default Grupo;
