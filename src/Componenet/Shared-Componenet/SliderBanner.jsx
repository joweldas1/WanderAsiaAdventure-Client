import React from 'react';
import slide from '../../../public/slide.json'
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';


register()

const SliderBanner = () => {

    const customShadow={
        shadow:'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px'
    }

    return(
        <>
    <Swiper
          modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl:null,
            prevEl:null,
          }}
          autoplay={{ delay: 3000 , pauseOnMouseEnter:true }}

          loop={true}
          effect="slide"
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '" style="background-color: blue;"></span>';
            }
          }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => ('')}
          onSlideChange={() => ('')}
          speed={1000}

        >
         {
                slide.map((slide,idx)=>  <SwiperSlide  key={idx}>
                    <div style={ {background:` linear-gradient(to right,  rgba(1, 2, 9, 0.8) 10%, rgba(24, 2, 2, 0.6) 60%) , url(${slide.img})`, height:`calc(100vh - 70px)`, ...customShadow}} className=' w-full shadow-md text-center bg-no-repeat bg-contain bg-center rounded-md'>

                        <div className='flex flex-col items-center justify-center h-full'>
                            <h1 className=' text-4xl mx-4 md:text-6xl lg:text-7xl  bg-300%  bg-gradient-to-r from-purple-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient font-semibold'
                            >{slide.title}</h1>
                            <p className='animate__animated animate__backInRight animate__delay-1s text-xl lg:w-1/2 text-center my-6 text-white'>{slide.description}</p>
                            <div className='animate__animated animate__backInUp animate__delay-1s '>
                            <button className='btn  btn-info'>Contact</button>
                            </div>
                            

                               
                        </div>

                    </div>

                </SwiperSlide>)
         }
  
        </Swiper>
       
  
        </>
    )
};

export default SliderBanner;