import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Button from '~/components/Button';
import Input from '~/components/Input';
import services from '~/services';
import * as RootNavigation from '~/routes/rootNavigation'
import { useAuth } from '~/contexts/auth';
import LogovitalePrime from '../../assets/vitale-prime-white.svg'
import Spinner from "react-native-loading-spinner-overlay";
import Notify from '~/components/Notify';
import CheckBox from '@react-native-community/checkbox';

const Login = ({ route }) => {
    const [isSelected, setSelection] = useState(true);
    const [loading, setLoading] = useState(false);
    const { logar } = useAuth();

    const [dominio, setDominio] = useState({
        grupo: route.params,
        login: "",
        senha: "",
    });

    useEffect(() => {
        async function getLogin() {
            const login = await services.asyncStorage.getLogin();
            const senha = await services.asyncStorage.getSenha();
            setDominio({
                ...dominio,
                login: login,
                senha: senha
            })
        }
        getLogin();
    }, []);


    const handleButton = async (data) => {
        if (data.grupo === "bredas" && data.login === "bredasmmp" && data.senha === "bredasmmp") {
            await services.asyncStorage.setEnvironment("stage")
        }else{
            await services.asyncStorage.setEnvironment("production")
        }
        Keyboard.dismiss()
        setLoading(true)
        try {
            await logar(data)
            if (isSelected) {
                await services.asyncStorage.setLogin(data.login)
                await services.asyncStorage.setSenha(data.senha)
                await services.asyncStorage.setGrupo(data.grupo)
            }
        } catch (error) {
            error.map((item) => {
                Notify(item.errorMessage, "error")
            })
            setLoading(false)
        }
    }

    return (
        <View style={{
            flex: 1,
        }}>
            <ImageBackground
                source={require('../../assets/background.png')}
                resizeMode="cover"
                style={{
                    flex: 1,
                    paddingHorizontal: 20,
                    justifyContent: 'center'
                }}>
                <Spinner
                    visible={loading}
                    textContent={'Carregando...'}
                    textStyle={{ color: '#FFF' }}
                />


                <KeyboardAvoidingView
                    behavior='margin'
                    keyboardVerticalOffset={84}
                >
                    <TouchableWithoutFeedback
                        onPress={Keyboard.dismiss}
                    >
                        <View>
                            <View
                                style={{
                                    //  marginTop: "auto",
                                    alignItems: 'center',
                                    marginBottom: 20
                                }}
                            >
                                <LogovitalePrime
                                    height={80}
                                    width={250}
                                />
                            </View>

                            <Input
                                onChangeText={(text) => setDominio({
                                    ...dominio,
                                    login: text.trim()
                                })}
                                placeholder="Login"
                                value={dominio.login}
                                autoCapitalize="none"
                            />

                            <Input
                                onChangeText={(text) => setDominio({
                                    ...dominio,
                                    senha: text.trim()
                                })}
                                placeholder="Senha"
                                onBlur={Keyboard.dismiss}
                                secureTextEntry={true}
                                value={dominio.senha}
                                autoCapitalize="none"
                            />

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <CheckBox
                                    onCheckColor='#FFF'
                                    tintColor='#FFF'
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={{
                                        borderColor: "#FFF"
                                    }}
                                // tintColors={isSelected ? "#FFF" : "red"}

                                />

                                <Text style={{ color: "#FFF", marginLeft: 10 }}>
                                    Lembrar-me
                                </Text>
                            </View>

                            <Button
                                label="Entrar"
                                onPress={() => handleButton(dominio)}
                                width={"100%"}
                            />

                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Text
                                    style={{
                                        color: "#FFF",
                                        marginRight: 5
                                    }}>
                                    Esqueceu a senha?
                                </Text>
                                <TouchableOpacity
                                    onPress={() => RootNavigation.navigate("Recuperar")}
                                >
                                    <Text
                                        style={{
                                            color: "#FFF",
                                            fontWeight: 'bold'
                                        }}>
                                        Clique aqui
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View >
    );
};

export default Login;
