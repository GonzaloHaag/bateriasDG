import React from "react";
import logoDg from "../assets/logoDG.webp";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

export const NavbarDesktop = () => {
  return (
    <nav className="hidden md:flex items-center justify-between">
      <a href="/">
        <img
          src={logoDg}
          alt="logo baterias Dario Giagnoni"
          width={80}
          height={80}
        />
      </a>
      <div className='flex items-center gap-2 lg:gap-5'>
      <ul className="flex gap-3 lg:gap-5 m-0 p-0">
        <a href="#" className="no-underline text-negro-dg font-semibold text-sm lg:text-base lg:mr-5">
          Inicio
        </a>
        <a href="#beneficios" className="no-underline text-negro-dg font-semibold text-sm lg:text-base lg:mr-5">
          Beneficios
        </a>
        <a href="#revendedores" className="no-underline text-negro-dg font-semibold text-sm lg:text-base lg:mr-5">
          Revendedores
        </a>
        <a href="#testimonios" className="no-underline text-negro-dg font-semibold text-sm lg:text-base lg:mr-5">
          Testimonios
        </a>
        <a href="#servicios" className="no-underline text-negro-dg font-semibold text-sm lg:text-base lg:mr-5">
          Servicios
        </a>
        <a href="#contacto" className="no-underline text-negro-dg font-semibold text-sm lg:text-base lg:mr-5">
          Contacto
        </a>
      </ul>
      <div className="flex items-center gap-1">
        {/**Buttons */}
        <a href='https://www.facebook.com/bateriasdariogiagnoni/' target="_blank" rel="noreferrer">
        <MdFacebook size={25}/>
        </a>
        <a href='https://www.instagram.com/bateriasdariogiagnoni/' target="_blank" rel="noreferrer">
        <FaInstagram size={25}/>
        </a>
      </div>
      </div>
    </nav>
  );
};
