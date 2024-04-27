import UseAuth from './UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const ProtecRoute = ({children}) => {
    const {user,loading}=UseAuth()
    const location=useLocation()
    const sharedPath=location.pathname

    if(loading){
        return <span className="loading loading-spinner text-center mt-10 loading-lg"></span>
    }

    if(!user){
        return <Navigate to='/login' state={sharedPath || '/'}></Navigate>
    }
    return children

       

    
};

export default ProtecRoute;