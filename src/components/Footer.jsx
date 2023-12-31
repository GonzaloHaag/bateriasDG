import React,{useRef} from 'react'
import { FaWhatsapp,FaPhoneAlt,FaMapMarkerAlt,FaRegHeart,FaFacebookF,FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import swal from 'sweetalert'
import emailjs from '@emailjs/browser';


const footerIcons = [
   {
    id:crypto.randomUUID(),
    icon : <FaWhatsapp size={30}/> ,
    href:'https://api.whatsapp.com/send?phone=543424670267',
    text:'+543424670267 ( Santa Fe )'
   },
   {
      id:crypto.randomUUID(),
      icon: <FaWhatsapp size={30}/>,
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
    icon : <FaPhoneAlt size={30} />,
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
    text:'G. de Lamadrid 2544, S3000 Santa Fe de la Vera Cruz, Santa Fe',
   },
   
 
]

export const Footer = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m31fpsq', 'template_kzxseju', form.current, 'vp2jsomoHUw1WBeC7')
      .then((result) => {
          console.log(result.text);
           //Confirmacion de envio
           swal({
            title: "Gracias por contactarnos!",
            text: "Nos comunicaremos con usted en breve.",
            icon: "success",
          });
        // Resetear los campos del formulario
         form.current.reset();
      }, (error) => {
          console.log(error.text);
          swal({
            title: "Ocurrió un error",
            text: "Intente nuevamente en un momento.",
            icon: "error",
          })
      });
  };
  return (
    <section className='min-h-screen w-full py-10 lg:py-0 flex flex-col justify-center bg-azul-dg scroll-mt-[65px]' id='contacto'>
       <div className='text-white grid grid-grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-2 px-2 container w-full min-[576px]:max-w-[540px]: mx-auto min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]'>
        <div className='flex flex-col gap-5 items-center md:items-start'>
            {/**Left */}
        <div className='flex flex-col items-center md:items-start md:gap-3'>
            <h3 className='gobold-relleno text-3xl sm:text-4xl xl:text-6xl m-0 p-0'>SOPORTE <span className='gobold-sin-relleno'>Y ATENCIÓN</span></h3>
            <h4 className='gobold-sin-relleno text-3xl sm:text-4xl xl:text-6xl m-0 p-0'>AL CLIENTE</h4>
        </div>
        <p className='text-center md:text-start xl:text-xl text-balance'>COMPROMISO CON LA <strong>SATISFACCIÓN DEL CLIENTE</strong></p>
        <div className='flex flex-col gap-4'>
            {/**Icons container */}
          {
            footerIcons.map((icon) => (
                <a href={icon.href} key={icon.id} rel='noreferrer' target='_blank' className='flex items-center gap-3 no-underline text-white'>
                    <div>{icon.icon}</div>
                    <p className='m-0 p-0 text-base'>{icon.text}</p>
                </a>
            ))
          }
          {/**Seguinos container */}
          <div className='flex items-center gap-4 justify-center mt-5'>
            <div><FaRegHeart size={30} /></div>
            <p className='text-base font-semibold'>SEGUINOS</p>
            <a
            href="https://www.facebook.com/bateriasdariogiagnoni/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF size={40} className='fill-azul-dg bg-white rounded-full p-2 hover:fill-white hover:bg-azul-dg transition-colors duration-200' />
          </a>
          <a
            href="https://www.instagram.com/bateriasdariogiagnoni/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={40} className='fill-azul-dg bg-white rounded-full p-2 hover:fill-white hover:bg-azul-dg transition-colors duration-200' />
          </a>
          </div>
        </div>
        </div>
        <div className='flex flex-col lg:justify-center mt-5 md:mt-0'>
            {/**Right */}
            <h3 className='gobold-sin-relleno text-3xl sm:text-4xl md:text-6xl m-0 p-0 text-center'>CONTACTANOS</h3>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-2 mt-3 md:mt-5' autoComplete="off">
                <div className='flex items-center gap-2'>
                    <input name='user_name' className='w-2/4 px-2 py-2 bg-inherit border-2 border-black focus:outline-white font-medium text-white rounded-md' type='text' placeholder='Nombre' required />
                    <input name='user_surname' className='w-2/4 px-2 py-2 bg-inherit border-2 border-black focus:outline-white font-medium text-white rounded-md' type='text' placeholder='Apellido' />
                </div> 
                <div className='flex items-center gap-2'>
                    <input name='asunto' className='w-2/4 px-2 py-2 bg-inherit border-2 border-black focus:outline-white font-medium text-white rounded-md' type='text' placeholder='Asunto' required />
                    <input name='user_phone' className='w-2/4 px-2 py-2 bg-inherit border-2 border-black focus:outline-white font-medium text-white rounded-md' type='number' placeholder='Teléfono' required />
                </div>         
                <textarea name='message' placeholder='Mensaje' className='min-h-[220px] w-full px-2 py-2 bg-inherit border-2 border-black focus:outline-white font-medium text-white rounded-md' required>
                </textarea>
                <div className='flex justify-end'>
                <input type='submit' value='Enviar' className='bg-negro-dg py-2 w-full lg:w-max lg:px-12 lg:text-end rounded-md cursor-pointer hover:bg-gray-700 transition-colors duration-200' />     
               </div>
            </form>
        </div>
       </div>
    </section>
  )
}
