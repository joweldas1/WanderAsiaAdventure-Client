import UseAuth from './UseAuth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const ProtecRoute = ({children}) => {
    const {user,loading}=UseAuth()
    const navigate=useNavigate()
    const location=useLocation()
    console.log();
    const sharedPath=location.pathname

    if(loading){
        return <div className='w-full text-center'>  <span className="loading  loading-spinner text-center mt-10 loading-lg"></span> </div>}

    if(!user){
        return  <Navigate to='/login' state={sharedPath}></Navigate>
    }
    return children

       

    
};

export default ProtecRoute;