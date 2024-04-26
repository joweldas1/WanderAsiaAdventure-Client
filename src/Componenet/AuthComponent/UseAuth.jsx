import React, { useContext } from 'react';
import { useAuth } from './AuthProvider';

const UseAuth = () => {
    const all = useContext(useAuth)
    return all
};

export default UseAuth;