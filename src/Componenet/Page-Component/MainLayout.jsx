import Navbar from '../Shared-Componenet/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <Outlet/>
            
        </div>
    );
};

export default MainLayout;