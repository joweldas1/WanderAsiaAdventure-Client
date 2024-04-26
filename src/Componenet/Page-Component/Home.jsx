import SliderBanner from '../Shared-Componenet/SliderBanner';
import { useLoaderData } from 'react-router-dom';
import HomePageTourismData from './HomePageTourismData';

const Home = () => {
    const tourism=useLoaderData()



    return (
        <div>
            <SliderBanner/>


            <div className='my-16'>
            <h1 className='text-center text-4xl my-8'>Ready to Discover Asia's Hidden Gems with <br/> WanderAsiaAdventure?</h1>
            <div className='lg:grid grid-cols-2  '>
            {
                tourism.map((tours)=>( <HomePageTourismData tours={tours} key={tours._id} /> ))
            }
            </div>
            </div>
            
        </div>
    );
};

export default Home;


