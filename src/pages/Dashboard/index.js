import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Dashboard = ({ route, navigation }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#008888",
            justifyContent: 'center',
            paddingHorizontal: 20
        }}>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 50
            }}>

                <TouchableOpacity
                    onPress={() => navigation.navigate("VendaSimples", route.params)}
                    style={{
                        height: 100,
                        width: 100,
                        backgroundColor: "rgba(255,255,255,0.3)",
                        alignItems: 'center',
                        justifyContent: 'center'
                        // marginLeft: 10
                    }}>
                    <Text style={{

                    }}>
                        PRODUTOS
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "rgba(255,255,255,0.3)",
                    // marginLeft: 10
                }}>

                </TouchableOpacity>

            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>

                <TouchableOpacity style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "rgba(255,255,255,0.3)",
                    // marginLeft: 10
                }}>

                </TouchableOpacity>

                <TouchableOpacity style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "rgba(255,255,255,0.3)",
                    // marginLeft: 10
                }}>

                </TouchableOpacity>

            </View>

        </View>
    );
}

export default Dashboard;