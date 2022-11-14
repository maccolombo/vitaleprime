import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '~/pages/Main';
import vitalePrime from '~/pages/vitalePrime'
import LoginPDV from '~/pages/PDV/LoginPDV';
import Clientes from '~/pages/PDV/Clientes';
import DashboardPDV from '~/pages/PDV/Dashboard';
import Colors from '~/styles/Colors';
import CriarPedido from '~/pages/PDV/CriarPedido';
import PageConfig from '~/pages/PDV/PageConfig';
import Pedidos from '~/pages/PDV/Pedidos';
import Produtos from '~/pages/PDV/Produtos';
import { Alert, Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '~/contexts/auth';
import LogovitalePrime from '../../assets/Logo_vitalePrime.svg'
import MenuLateralIcon from "../../assets/Menu.svg"
const Stack = createStackNavigator();

const AppRoutes = () => {
    const { webRef } = useAuth();
    return (
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerTintColor: "#b41267",
                headerBackground: () => (
                    <Image
                        style={{
                            height: '100%'
                        }}
                        source={require('../../assets/background.png')}
                    />
                ),

                /*  headerLeft: () =>
                     <TouchableOpacity
                         onPress={() => logout()}
                         style={{
                             paddingHorizontal: 20,
                             backgroundColor: Colors.blue
                         }}>
                         <Text style={{
                             color: Colors.light_text,
                             fontSize: 18
                         }}>
                             ---
                         </Text>
                     </TouchableOpacity> ,
                  headerRight: () =>
                     <TouchableOpacity
                         onPress={() => logout()}
                         style={{
                             paddingHorizontal: 20,
                             backgroundColor: Colors.blue
                         }}>
                         <Text style={{
                             color: Colors.light_text,
                             fontSize: 18
                         }}>Sair</Text>
                     </TouchableOpacity> */
            }}
        >

            <Stack.Screen
                name="Main"
                component={Main}
                options={{
                    headerTitle: "",
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="vitalePrime"
                component={vitalePrime}
                options={{
                    headerShown: false,
                    headerTitle: () => null,
                    // headerLeft: () =>
                    //     <TouchableOpacity
                    //         onPress={() => {
                    //             const run = `
                    //                window.toggleSidebar();
                    //             `;
                    //             webRef.injectJavaScript(run);
                    //         }}
                    //         style={{
                    //             paddingHorizontal: 20,
                    //         }}>
                    //         <MenuLateralIcon
                    //             height={36}
                    //         //width={30}
                    //         />
                    //     </TouchableOpacity>
                }}
            />

            {/* PDV ROUTES   */}
            <Stack.Screen
                name="DashboardPDV"
                component={DashboardPDV}
                options={{
                    headerTitle: "Menu"
                }} />

            <Stack.Screen name="Clientes" component={Clientes} />
            <Stack.Screen name="LoginPDV" component={LoginPDV} options={{
                headerTitle: "Logar no PDV"
            }} />
            <Stack.Screen name="CriarPedido" component={CriarPedido} />
            <Stack.Screen name="PageConfig" component={PageConfig} options={{
                headerTitle: "Configuracões"
            }} />
            <Stack.Screen name="Pedidos" component={Pedidos} />
            <Stack.Screen name="Produtos" component={Produtos} />



        </Stack.Navigator>
    );
};

export default AppRoutes;
