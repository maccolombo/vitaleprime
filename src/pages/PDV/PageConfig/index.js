import React from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
//import GIcon from "react-native-vector-icons/MaterialIcons"

const PageConfig = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.contentView}>
                <View style={styles.contentForm}>
                    <Text style={styles.textConfig}> Configuração </Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="IP"
                        placeholderTextColor="#272424"
                        keyboardType="numeric"
                    />

                    <TextInput
                        style={styles.inputTextP}
                        placeholder="Porta"
                        placeholderTextColor="#272424"
                        keyboardType="numeric"

                    />


                    <TouchableOpacity
                        style={styles.btnConfig}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.textBtnConfig}> Configurar </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnBack}
                        onPress={() => navigation.goBack()}
                    >
                        {/* <GIcon
                            name="arrow-back-ios"
                            size={30}
                            color="#132C48"
                        /> */}
                    </TouchableOpacity>


                </View>
            </View>
        </View>
    );
}
export default PageConfig;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F3F3"
    },
    contentView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentForm: {
        height: 343,
        width: 357,
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            height: 3,
            width: 5,

        },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 5,

    },
    textConfig: {
        fontFamily: 'Lato-Bold',
        fontSize: 25,
        color: "#132C48",
        marginTop: 36
    },
    inputText: {
        height: 41,
        width: 313,
        fontFamily: 'Lato-Regular',
        fontSize: 12,
        borderWidth: 1,
        backgroundColor: "#FFF",
        borderRadius: 5,
        borderColor: "#707070",
        marginTop: 38,
        paddingLeft: 16,
        padding: 13,
        color: "#272424"

    },
    inputTextP: {
        height: 41,
        width: 313,
        fontFamily: 'Lato-Regular',
        fontSize: 12,
        borderWidth: 1,
        backgroundColor: "#FFF",
        borderRadius: 5,
        borderColor: "#707070",
        marginTop: 15,
        paddingLeft: 16,
        padding: 13,
        color: "#272424"

    },
    btnConfig: {
        height: 55,
        width: 149,
        borderRadius: 5,
        backgroundColor: "#132C48",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 36
    },
    textBtnConfig: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: "#FFF"
    },
    btnBack: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        marginRight: 16,
        marginBottom: 16,

    }

});