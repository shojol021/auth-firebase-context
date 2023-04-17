import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({ children }) => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            {user &&
                children
            }
        </div>
    );
};

export default PrivateRoute;