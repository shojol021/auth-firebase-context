import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <h3 className='text-2xl text-center italic'>Loading...</h3>
    }

    if(user){
        return children
    }

    return (
        <Navigate to='/login' replace={true}></Navigate>
    );
};

export default PrivateRoute;