import React from 'react'
import { Container } from 'react-bootstrap';
import { FaWhatsapp,FaPhoneAlt,FaMapMarkerAlt,FaRegHeart } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


const footerIcons = [
   {
    id:crypto.randomUUID(),
    icon : <FaWhatsapp size={30} /> ,
    href:'https://api.whatsapp.com/send?phone=543424670267',
    text:'+543424670267 ( Santa Fe )'
   },
   {
      id:crypto.randomUUID(),
      icon: <FaWhatsapp size={30} />,
      href:'https://api.whatsapp.com/send?phone=543624694977',
      text:'+543624694977 ( Resistencia )'

   },

   {
    id:crypto.randomUUID(),
    icon : <MdOutlineMail size={30} /> ,
    href:'/',
    text:'dgbaterias@gmail.com'
   },
   {
    id:crypto.randomUUID(),
    icon : <FaPhoneAlt size={30} /> ,
    href:'/',
    text:'03624463647 ( Resistencia, Chaco )'
   },
   {
    id:crypto.randomUUID(),
    icon : <FaPhoneAlt size={30} /> ,
    href:'/',
    text:'03424670267 ( Santa Fe )'
   },
   {
    id:crypto.randomUUID(),
    icon : <FaMapMarkerAlt size={30} /> ,
    href:'https://www.google.com/maps/place/Bater%C3%ADas+Dario+Giagnoni+%7C+Distribuidora+Nacional+de+baterias+%7C+Chaco+%7C+Ex+Baterias+Morbi/@-27.4391448,-59.0002489,17z/data=!3m1!4b1!4m6!3m5!1s0x94450c6ff03ce109:0x798f5ec251be887d!8m2!3d-27.4391448!4d-59.0002489!16s%2Fg%2F1tdv_zqg?entry=ttu',
    text:'Av. 25 de Mayo 1515, H3500 Resistencia, Chaco'
   },
   {
    id:crypto.randomUUID(),
    icon : <FaMapMarkerAlt size={30} /> ,
    href:'https://www.google.com/maps/place/Baterias+Dario+Giagnoni+%7C+Distribuidora+Nacional+de+Bater%C3%ADas+%7C+Santa+Fe/@-31.6413179,-60.7269685,17z/data=!3m1!4b1!4m6!3m5!1s0x95b5a849f83b8b07:0xbaf1ffff70065e5a!8m2!3d-31.6413179!4d-60.7269685!16s%2Fg%2F1v2f1pwc?entry=ttu',
    text:'G. de Lamadrid 2544, S3000 Santa Fe de la Vera Cruz, Santa Fe'
   },
]

export const Footer = () => {
  return (
    <section className='min-h-screen w-full py-10 lg:py-0 flex flex-col justify-center bg-azul-dg scroll-mt-[70px] md:scroll-mt-0' id='contacto'>
       <Container className='text-white grid grid-grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-2'>
        <div className='flex flex-col gap-3 items-center md:items-start'>
            {/**Left */}
        <div className='flex flex-col items-center md:items-start md:gap-3'>
            <h3 className='gobold-relleno text-3xl sm:text-4xl xl:text-6xl m-0 p-0'>SOPORTE <span className='gobold-sin-relleno'>Y ATENCIÓN</span></h3>
            <h4 className='gobold-sin-relleno text-3xl sm:text-4xl xl:text-6xl m-0 p-0'>AL CLIENTE</h4>
        </div>
        <p className='text-center md:text-start xl:text-xl'>COMPROMISO CON LA <strong>SATISFACCIÓN DEL CLIENTE</strong></p>
        <div className='flex flex-col gap-4'>
            {/**Icons */}
          {
            footerIcons.map((icon) => (
                <a href={icon.href} key={icon.id} target='_blank' className='underline underline-offset-4 text-white flex items-center gap-2'>
                    {icon.icon}
                    <p className='m-0 p-0 text-balance'>{icon.text}</p>
                </a>
            ))
          }
        </div>
        </div>
        <div className='flex flex-col lg:justify-center'>
            {/**Right */}
            <h3 className='gobold-sin-relleno text-3xl sm:text-4xl md:text-6xl m-0 p-0 text-center'>CONTACTANOS</h3>
            <form className='flex flex-col gap-2 mt-3'>
                <div className='flex items-center gap-2'>
                    <input className='w-2/4 indent-2 py-2 bg-inherit border-1 border-black font-medium text-white' type='text' placeholder='Nombre' required />
                    <input className='w-2/4 indent-2 py-2 bg-inherit border-1 border-black font-medium text-white' type='text' placeholder='Apellido' />
                </div> 
                <div className='flex items-center gap-2'>
                    <input className='w-2/4 indent-2 py-2 bg-inherit border-1 border-black font-medium text-white' type='text' placeholder='Asunto' required />
                    <input className='w-2/4 indent-2 py-2 bg-inherit border-1 border-black font-medium text-white' type='number' placeholder='Teléfono' required />
                </div>         
                <textarea placeholder='Mensaje' className='min-h-[220px] w-full indent-2 py-2 bg-inherit border-1 border-black font-medium text-white' required>
                </textarea>      
            </form>
        </div>
       </Container>
    </section>
  )
}
