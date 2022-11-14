import AsyncStorage from "@react-native-async-storage/async-storage";

const setAuthToken = async (token) => {
    return await AsyncStorage.setItem("@authToken", token);
};

const getAuthToken = async () => {
    return await AsyncStorage.getItem("@authToken");
};

const setGrupo = async (grupo) => {
    return await AsyncStorage.setItem("@grupo", grupo);
};

const getGrupo = async () => {
    return await AsyncStorage.getItem("@grupo");
};

const setLogin = async (login) => {
    return await AsyncStorage.setItem("@login", login);
};

const getLogin = async () => {
    return await AsyncStorage.getItem("@login");
};

const setSenha = async (senha) => {
    return await AsyncStorage.setItem("@senha", senha);
};

const getSenha = async () => {
    return await AsyncStorage.getItem("@senha");
};

const clear = async () => {
    return await AsyncStorage.clear()
}

const setEnvironment = async (environment) => {
    return await AsyncStorage.setItem("@environment", environment)
}
const getEnvironment = async () => {
    return await AsyncStorage.getItem("@environment")
}

export default {
    setAuthToken,
    getAuthToken,
    setGrupo,
    getGrupo,
    setLogin,
    getLogin,
    setSenha,
    getSenha,
    setEnvironment,
    getEnvironment,
    clear
};
