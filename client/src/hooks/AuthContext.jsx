import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    AuthProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const accountExists = localStorage.getItem('hasAccount') === 'true';
        setIsAuthenticated(accountExists);
    }, []);

    const signUp = () => {
        localStorage.setItem('hasAccount', 'true');
        setIsAuthenticated(true);
    };

    const login = () => {
        setIsAuthenticated(true);
    };

    return <AuthContext.Provider value={{ isAuthenticated, signUp, login }}>{children}</AuthContext.Provider>;
};
