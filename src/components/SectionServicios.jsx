import React from "react";
import { Container } from "react-bootstrap";
import servicio1 from "../assets/servicio-1.webp";
import servicio2 from "../assets/servicio-2.webp";
import servicio3 from "../assets/servicio-3.webp";

export const SectionServicios = () => {
  return (
    <section className="min-h-screen bg-white py-10 flex flex-col justify-center scroll-mt-[65px]" id="servicios">
      <Container className="text-negro-dg">
        <div className="flex flex-col items-center md:items-start md:flex-row md:gap-3">
          <h3 className="gobold-sin-relleno text-3xl sm:text-4xl md:text-6xl m-0 p-0">
            NUESTROS
          </h3>
          <h4 className="gobold-relleno text-3xl sm:text-4xl md:text-6xl m-0 p-0">
            SERVICIOS
          </h4>
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="relative flex flex-col text-center gap-2">
            {/**Card */}
            <img
              src={servicio1}
              alt="Servicio auxilio de baterías"
              width='100%'
            />
            <p className="m-0 p-0 bg-negro-dg text-white min-h-[60px] flex flex-col text-center justify-center text-balance">
              <strong>AUXILIO </strong> DE BATERÍAS 24/7
            </p>
            <p className="p-0 text-balance max-w-[85%] mx-auto my-0">
              ¡Asistencia Rápida y Confiable! ¿Quedaste parado con una batería
              descargada? Nuestro equipo de expertos está listo para brindarte
              asistencia en carretera.
            </p>
          </div>
          <div className="relative flex flex-col text-center gap-2">
            {/**Card */}
            <img
              src={servicio2}
              alt="Servicio auxilio de baterías"
              width='100%'
            />
            <p className="m-0 p-0 bg-negro-dg text-white min-h-[60px] flex flex-col text-center justify-center text-balance">
              <strong>RECICLAJE RESPONSABLE </strong> DE BATERÍAS
            </p>
            <p className="p-0 text-balance max-w-[85%] mx-auto my-0">
              ¡Cuidando el Medio Ambiente! En nuestra distribuidora, creemos en
              la importancia de preservar el medio ambiente. Por eso, ofrecemos
              un servicio de reciclaje responsable de baterías usadas.
            </p>
          </div>
          <div className="relative flex flex-col text-center gap-2">
            {/**Card */}
            <img
              src={servicio3}
              alt="Servicio auxilio de baterías"
              width='100%'
            />
            <p className="m-0 p-0 bg-negro-dg text-white min-h-[60px] flex flex-col text-center justify-center text-balance">
              <strong>MANTENIMIENTO </strong> PROFESIONAL DE BATERÍAS
            </p>
            <p className="p-0 text-balance max-w-[85%] mx-auto my-0">
              ¡Optimizando su Vida Útil! Nuestro equipo de técnicos altamente
              capacitados ofrece un servicio de mantenimiento preventivo y
              correctivo para baterías de todo tipo de vehículos.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
