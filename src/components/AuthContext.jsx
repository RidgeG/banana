import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({ isAuth: false, user: "" });
    const navigate = useNavigate();

    const login = (email) => {
        setAuthState({ isAuth: true, user: email });
        console.log("Gebruiker is ingelogd:", email);
        navigate("/profile");
    };

    const logout = () => {
        setAuthState({ isAuth: false, user: "" });
        console.log("Gebruiker is uitgelogd!");
        navigate("/");
    };

    return (
        <AuthContext.Provider
            value={{ isAuth: authState.isAuth, user: authState.user, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

