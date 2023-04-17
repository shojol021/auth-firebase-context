import React, { createContext } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    console.log(children)

    const user = 'Adnan Hossain';
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;