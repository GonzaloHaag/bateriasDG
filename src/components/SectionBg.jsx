import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

export const SectionBg = () => {
  return (
    <section className="relative min-h-[calc(100vh-65px)] w-full bg-[url('../src/assets/BgImage.webp')] bg-cover bg-center flex items-center">
     <div className='text-white flex flex-col gap-3 sm:gap-5 px-2 container w-full min-[576px]:max-w-[540px]: mx-auto min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]'> {/**Para que todo tome el mismo ancho */}
         <div className='flex flex-col sm:gap-2 border-l-4 border-l-rojo-dg pl-1'>
            <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl m-0'>BATERÍAS DE CALIDAD</h1>
            <h2 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl m-0'>AL ALCANCE DE TU MANO</h2>
         </div>
         <p className='text-xs sm:text-base md:text-xl'>ENCONTRÁ LA <strong>BATERÍA ADECUADA</strong> PARA TU VEHÍCULO</p>
         <div className='flex flex-col sm:flex-row items-center gap-3'>
            <a href='https://api.whatsapp.com/send/?phone=5493424670267&text&type=phone_number&app_absent=0' target='_blank' rel='noreferrer' className='bg-azul-dg no-underline text-white px-5 py-2 rounded-md hover:bg-rojo-dg transition-all duration-200'>Comprar Ahora</a>
            <a href='#revendedores' className='bg-azul-dg no-underline text-white px-5 py-2 rounded-md hover:bg-rojo-dg transition-all duration-200'>Sumarme como revendedor</a>
         </div>
     </div>
     <a href='https://api.whatsapp.com/send/?phone=5493424670267&text&type=phone_number&app_absent=0' target='_blank' rel='noreferrer'>
     <FaWhatsapp size={80} className='fill-white absolute bottom-5 right-10 p-3 border-2 border-white rounded-full hover:fill-azul-dg transition-colors duration-200' />
     </a>
    </section>
  )
}
