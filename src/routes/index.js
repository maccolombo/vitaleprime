import React from "react";
import AuthRoutes from "./noAuth";
import AppRoutes from "./auth";
import { useAuth } from "~/contexts/auth";

const Routes = () => {
    const { signed } = useAuth();
    
    return signed ? (
        <AppRoutes />
    ) : (
        <AuthRoutes />
    );
};

export default Routes;