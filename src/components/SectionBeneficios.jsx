import React from 'react';
import { Container } from 'react-bootstrap';
import imgBeneficios from '../assets/DG-DISEÑO-WEB-10.webp';
import imgVariedad from '../assets/DG-DISEÑO-WEB-11.webp';
import imgCompatibilidad from '../assets/DG-DISEÑO-WEB-12.webp';
import imgAsesoramiento from '../assets/DG-DISEÑO-WEB-13.webp';

const iconsBeneficios = [
    {
        id:crypto.randomUUID(),
        image : imgBeneficios,
        title:'ALTO',
        strong:'RENDIMIENTO',
        text:'Potencia y durabilidad garantizadas.'
    },
    {
        id:crypto.randomUUID(),
        image : imgVariedad,
        title:'AMPLIA',
        strong:'VARIEDAD',
        text:'Encuentra la batería perfecta para tu vehículo.'
    },
    {
        id:crypto.randomUUID(),
        image : imgCompatibilidad,
        title:'COMPATIBILIDAD',
        strong:'GARANTIZADA',
        text:'Adaptada a todas las marcas y modelos de vehículos.'
    },
    {
        id:crypto.randomUUID(),
        image : imgAsesoramiento,
        title:'ASESORAMIENTO',
        strong:'ESPECIALIZADO',
        text:'Nuestro equipo te guiará en tu elección. Garantía de satisfacción del 100%.'
    },

]

export const SectionBeneficios = () => {
  return (
    <section className='min-h-screen bg-azul-dg w-full flex flex-col justify-center scroll-mt-[72px] md:scroll-mt-[100px] lg:scroll-mt-0' id='beneficios'>
        <Container className='text-white py-10 md:py-0'>
          <div className='flex flex-col items-center md:items-start md:gap-3'>
            <h3 className='gobold-relleno text-3xl sm:text-4xl md:text-6xl m-0 p-0'>BENEFICIOS <span className='gobold-sin-relleno'>DE</span></h3>
            <h4 className='gobold-sin-relleno text-3xl sm:text-4xl md:text-6xl m-0 p-0'>NUESTRAS BATERÍAS</h4>
          </div>
          <div className='grid grid-cols-1 gap-4 mt-10 lg:mt-10 sm:grid-cols-2 lg:grid-cols-4'>
            {
                iconsBeneficios.map((icon) => (
                    <div key={icon.id} className='flex flex-col items-center text-center'>
                      <img src={icon.image} alt={icon.title} className='w-[220px] h-auto' />
                      <p className='flex flex-col text-center m-0 p-0 leading-5 bg-negro-dg w-52 md:w-full py-2 rounded-md'>{icon.title}<strong>{icon.strong}</strong></p>
                      <p className='text-base w-52 md:w-4/5'>{icon.text}</p>
                    </div>
                ))
            }
          </div>
        </Container>
    </section>
  )
}
