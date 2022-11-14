import React, { useState } from 'react';
import { Alert, Image, ImageBackground, LogBox, Text, TouchableOpacity, View } from 'react-native';
import Button from '~/components/Button';
import Input from '~/components/Input';
import services from '~/services';
import Colors from '~/styles/Colors';
import * as RootNavigation from '~/routes/rootNavigation'
import { useAuth } from '~/contexts/auth';
import LogoBredas from '../../assets/logo_bredas.svg'
import LogoVendaSimples from '../../assets/Logo_VendaSimples.svg'
import LogoPDV from '../../assets/Logo.svg';
import Spinner from "react-native-loading-spinner-overlay";

const Recuperar = () => {
    const [loading, setLoading] = useState(false);
    const { logar } = useAuth();

    const [email, setEmail] = useState('');

    const handleButton = async () => {
        try {
            setLoading(true)
            await services.authentication.recuperarGrupo(email)
            Alert.alert(`Se existe uma conta associada a ${email} você receberá um e-mail com o nome do Grupo(Domínio) e um link de acesso.`)
            setLoading(false)
            RootNavigation.navigate("Grupo")
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <View style={{
            flex: 1,
            //backgroundColor: Colors.blue,

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


                <View
                    style={{
                        //  marginTop: "auto",
                        alignItems: 'center',
                        marginBottom: 20
                    }}
                >
                    <LogoVendaSimples
                        height={80}
                        width={250}
                    />
                </View>

                <Input
                    onChangeText={(text) => setEmail(text)}
                    placeholder="E-mail"
                    autoCapitalize="none"
                />


                <Button
                    label="Enviar e-mail"
                    onPress={handleButton}

                />
            </ImageBackground>
        </View>
    );
};

export default Recuperar;
