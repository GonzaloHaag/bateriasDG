import React, { useRef } from "react";
import { Container, Row, Col, TabContainer } from "react-bootstrap";
import { CiDiscount1 } from "react-icons/ci";
import { RiMegaphoneLine } from "react-icons/ri";
import { PiChatCenteredText } from "react-icons/pi";
import { FaClipboardList } from "react-icons/fa";
import swal from 'sweetalert'

import emailjs from "@emailjs/browser";

export const SectionDistribuidor = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m31fpsq",
        "template_xqjyekn",
        form.current,
        "vp2jsomoHUw1WBeC7"
      )
      .then(
        (result) => {
          console.log(result.text);
          //Confirmacion de envio
          swal({
            title: "Gracias por contactarnos!",
            text: "Nos comunicaremos con usted en breve.",
            icon: "success",
          })
        // Resetear los campos del formulario
        resetFormFields();
         
        },
        (error) => {
          console.log(error.text);
          swal({
            title: "Ocurrió un error",
            text: "Intente nuevamente en un momento.",
            icon: "error",
          })
        }
      );
  };
  const resetFormFields = () => {
    // Acceder a los elementos del formulario
    const formElements = form.current.elements;
  
    // Iterar sobre los elementos y establecer sus valores en blanco
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
  
      // Verificar si el elemento es un campo de entrada o textarea
      if (element.type === "text" || element.type === "number" || element.type === "email" || element.tagName.toLowerCase() === "textarea") {
        element.value = "";
      }
    }
  };
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-5 scroll-mt-[65px]" id="revendedores">
      <div className="bg-[url('../src/assets/DG-DISEÑO-WEB-03.webp')] flex justify-center text-white py-10 lg:py-20 bg-cover bg-center">
        <Container className="flex flex-col items-center justify-center lg:justify-between">
          <div className="flex flex-col text-center sm:gap-1 md:gap-2">
            <h3 className="gobold-sin-relleno text-3xl sm:text-4xl md:text-6xl m-0 p-0">
              CONVERTITE EN
            </h3>
            <h4 className="gobold-relleno text-3xl sm:text-4xl md:text-6xl m-0 p-0">
              DISTRIBUIDOR
            </h4>
          
          </div>
          <div className="flex flex-col gap-5 items-start justify-end px-2">
          <p className="mt-3 lg:mt-0 text-sm sm:text-base lg:text-xl m-auto">
              <strong>VENTAJAS</strong> DE SER REVENDEDOR:
            </p>
            {/**Icons container */}
            <div className="flex items-center gap-2 m-0 p-0">
              <CiDiscount1 size={60} />
              <p className="m-0 p-0">
                Gran variedad de{" "}
                <strong>ofertas, descuentos y beneficios.</strong>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <RiMegaphoneLine size={60} />
              <p className="m-0 p-0">
                Apoyo de <strong>marketing</strong> y materiales promocionales.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <PiChatCenteredText size={50} />
              <p className="m-0 p-0">
                <strong>Asesoramiento</strong> Técnico Especializado.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaClipboardList size={60} />
              <p className="m-0 p-0">
                Amplio <strong>Inventario y Variedad</strong> de Productos.
              </p>
            </div>
          </div>
          <a
            href="/"
            className="no-underline text-white text-xl mt-5 bg-rojo-dg px-5 py-2 rounded-md"
          >
            Contactános
          </a>
        </Container>
      </div>
      <div className="bg-white py-10 flex lg:pt-44 lg:px-10">
        <Container>
          <div className="flex text-center">
            <p className="m-auto text-balance lg:text-xl">
              SOLICITANOS MÁS INFORMACIÓN SOBRE{" "}
              <strong>CÓMO SER UN REVENDEDOR.</strong>
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail} autoComplete="off" className="flex flex-col gap-2 mt-5">
            <div className="flex items-center gap-2">
              <input type="text" name="user_name" required placeholder="NOMBRE" className='w-2/4 py-2 lg:py-5 indent-3 border-1 border-black rounded-md' /> 
              <input type="text" name="user_surname" placeholder="APELLIDO" className='w-2/4 py-2 lg:py-4 indent-3 border-1 border-black rounded-md' />
            </div>
            <div className="flex items-center gap-2">
              <input type="number" name="user_phone" required placeholder="TELÉFONO" className='w-2/4 py-2 lg:py-4 indent-3 border-1 border-black rounded-md' />
              <input type="email" name="user_email" required placeholder="EMAIL" className='w-2/4 py-2 lg:py-4 indent-3 border-1 border-black rounded-md' />
            </div>

            <textarea name="message" placeholder="MENSAJE" required className="w-full border-1 border-black min-h-[180px] py-2 lg:py-4 indent-3" />
            <div className="w-full flex items-center justify-center lg:justify-end">
            <input type="submit" value="Enviar" className="bg-azul-dg text-white py-2 rounded-md font-medium text-lg w-full lg:w-max lg:px-8" />
            </div>
          
          </form>
        </Container>
      </div>
    </section>
  );
};
