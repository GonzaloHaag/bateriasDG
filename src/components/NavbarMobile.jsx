import React, { useState } from "react";
import logoDg from "../assets/logoDG.webp";
import { MdOutlineMenuOpen, MdClose, MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

export const NavbarMobile = () => {
  const [handleMenuMobile, setHandleMenuMobile] = useState(false);
  return (
    <nav className="flex items-center justify-between md:hidden">
      <div
        className={`fixed min-h-screen inset-0 bg-black/80 md:hidden ${
          handleMenuMobile ? "block" : "hidden"
        }`}
      ></div>{" "}
      {/**Overlay cuando se abre menu */}
      <a href="#">
        <img
          src={logoDg}
          alt="logo Baterias Dario Giagnoni"
          width={65}
          className="h-auto"
        />
      </a>
      <div>
        <MdOutlineMenuOpen
          size={25}
          onClick={() => setHandleMenuMobile(true)}
        />
        <div
          className={`fixed inset-0 z-10 min-h-screen bg-white w-3/4 sm:w-2/3 flex flex-col items-center pt-12 transition-all duration-200 ${
            handleMenuMobile
              ? "translate-x-0 visible opacity-100"
              : "-translate-x-full invisible opacity-0"
          }`}
        >
          <MdClose
            size={25}
            onClick={() => setHandleMenuMobile(false)}
            className="fixed right-3 top-[14px]"
          />
          <ul className="flex flex-col text-center items-center px-0 gap-3">
            <a
              onClick={() => setHandleMenuMobile(false)}
              href="#"
              className="no-underline text-negro-dg font-semibold"
            >
              Inicio
            </a>
            <a
              onClick={() => setHandleMenuMobile(false)}
              href="#beneficios"
              className="no-underline text-negro-dg font-semibold"
            >
              Beneficios
            </a>
            <a
              onClick={() => setHandleMenuMobile(false)}
              href="#revendedores"
              className="no-underline text-negro-dg font-semibold"
            >
              Revendedores
            </a>
            <a
              onClick={() => setHandleMenuMobile(false)}
              href="#testimonios"
              className="no-underline text-negro-dg font-semibold"
            >
              Testimonios
            </a>
            <a
              onClick={() => setHandleMenuMobile(false)}
              href="#servicios"
              className="no-underline text-negro-dg font-semibold"
            >
              Servicios
            </a>
            <a
              onClick={() => setHandleMenuMobile(false)}
              href="#contacto"
              className="no-underline text-negro-dg font-semibold"
            >
              Contacto
            </a>
          </ul>
          <div className="flex items-center gap-2">
            {/**Buttons */}
            <a
              href="https://www.facebook.com/bateriasdariogiagnoni/"
              target="_blank"
              rel="noreferrer"
            >
              <MdFacebook size={25} />
            </a>
            <a
              href="https://www.instagram.com/bateriasdariogiagnoni/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={25} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
