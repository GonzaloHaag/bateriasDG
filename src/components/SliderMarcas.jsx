import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../assets/logo-moura.jpg';
import slider2 from '../assets/logo-bateriasMorbi.jpg';
import slider3 from '../assets/logo-giagnoniHermanos.jpg';
import slider4 from '../assets/logo-sermat.jpg';
import slider5 from '../assets/logo-adcdelco.jpg';

// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Container } from 'react-bootstrap';

export const SliderMarcas = () => {
  return (
    <Container className='py-10'>
         <div className='flex flex-col items-center md:items-start md:flex-row md:gap-3'>
            <h3 className='gobold-relleno text-3xl sm:text-4xl md:text-6xl m-0 p-0'>NUESTRAS</h3>
            <h4 className='gobold-sin-relleno text-3xl sm:text-4xl md:text-6xl m-0 p-0'>MARCAS</h4>
          </div>
       <Swiper
       spaceBetween={30}
       slidesPerView={2}
       breakpoints={{
       
        768: {
          slidesPerView: 3,
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
       navigation={true}
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
    </Swiper>
    </Container>
  )
}
