import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Home = () => {

    const name = useContext(AuthContext)
    return (
        <div>
            Name: {name && 'name'}
        </div>
    );
};

export default Home;