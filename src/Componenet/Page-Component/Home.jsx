import SliderBanner from '../Shared-Componenet/SliderBanner';
import UseAuth from '../AuthComponent/UseAuth';

const Home = () => {
    const {hello}=UseAuth()
    return (
        <div>
            <SliderBanner/>
            <h1>{hello}</h1>
            
        </div>
    );
};

export default Home;