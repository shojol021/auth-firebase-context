import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('logged out')
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link className='btn btn-ghost normal-case text-xl' to='/'>AuthContext</Link>
                <Link className='btn btn-ghost normal-case text-xl' to='/orders'>Orders</Link>
                <Link className='btn btn-ghost normal-case text-xl' to='/profile'>Profile</Link>
                <Link className='btn btn-ghost normal-case text-xl' to='/login'>Login</Link>
                <Link className='btn btn-ghost normal-case text-xl' to='/register'>Register</Link>
                {user ?
                    <>
                        <p>{user.email}</p>
                        <button onClick={handleSignOut} className='btn btn-info btn-xs ms-2'>SignOut</button>
                    </> :
                    loading? 'Loading...' : <button className='btn btn-primary btn-xs'>Login</button>}
            </div>
        </div>
    );
};

export default Header;