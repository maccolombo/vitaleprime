import React, { createContext, useContext, useState } from "react";
import services from "~/services";

const AuthContext = createContext({ signed: true });


export const AuthProvider = ({ children }) => {
    const [signed, setSigned] = useState(false);
    const [token, setToken] = useState(null);
    const [webRef, setWebRef] = useState(null);

    async function logar(data) {
        try {
            //  const token = await services.authentication.login(data)
            setSigned(true)
            //  setToken(JSON.stringify(token.data))
        } catch (error) {
            throw error
        }
    }

    async function logout() {
        // await services.asyncStorage.clear();
        setSigned(false);
    }

    return (
        <AuthContext.Provider
            value={{
                signed: signed,
                token: token,
                logar,
                logout,
                webRef,
                setWebRef
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};