import React from 'react';

import Lottie from 'lottie-react';
import animatePlane from "../../../public/plane.json"

const LottiAnimation = () => {
   return <Lottie 
   animationData={animatePlane}
   
   
   ></Lottie>
    
};

export default LottiAnimation;