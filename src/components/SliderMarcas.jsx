import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../assets/logo-moura.webp';
import slider2 from '../assets/logo-bateriasMorbi.webp';
import slider3 from '../assets/logo-giagnoniHermanos.webp';
import slider4 from '../assets/logo-sermat.webp';
import slider5 from '../assets/logo-adcdelco.webp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const SliderMarcas = () => {
  return (
    <div className='py-20 relative px-2 container w-full min-[576px]:max-w-[540px]: mx-auto min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]'>
         <div className='flex flex-col items-center md:items-start md:flex-row md:gap-3'>
            <h3 className='gobold-relleno text-3xl sm:text-4xl md:text-6xl m-0 p-0'>NUESTRAS</h3>
            <h4 className='gobold-sin-relleno text-3xl sm:text-4xl md:text-6xl m-0 p-0'>MARCAS</h4>
          </div>
       <Swiper
       spaceBetween={30}
      //  centeredSlides={true}
       slidesPerView={2}
       loop={true}
       breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
       
        768: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }}
       autoplay={{
         delay: 2500,
         disableOnInteraction: false,
       }}
       pagination={{
         clickable: true,
       }}
       modules={[Autoplay, Pagination, Navigation]}
        className='mt-5'
    >
      <SwiperSlide>
        <img src={slider1} alt='logo-marca' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} alt='logo-marca' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3} alt='logo-marca' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider4} alt='logo-marca' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider5} alt='logo-marca' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider4} alt='logo-marca' />
      </SwiperSlide>
    </Swiper>
    </div>
  )
}
