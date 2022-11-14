import api from "../api";

const baseUrl = `https://production.bredasapi.com.br/overall`

const authenticationApi = api.create({ baseUrl })

const login = async (data) => {
    return await authenticationApi.post(`/auth/usuario`, data)
};

const isGroup = async (group) => {
    return await authenticationApi.get(`dominio/${group}`)
}

const recuperarGrupo = async (data) => {
    const body = {
        email: data
    }
    return await authenticationApi.post(`dominio/recuperaporemail`, body)
}

export default { login, recuperarGrupo, isGroup }
