import React, { useState } from "react";
import logoDg from "../assets/logoDG.webp";
import { MdOutlineMenuOpen, MdClose, MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const navLinks = [
  {
    id:crypto.randomUUID(),
    href:'#',
    text:'Inicio'
  },
  {
    id:crypto.randomUUID(),
    href:'#beneficios',
    text:'Beneficios'
  },
  {
    id:crypto.randomUUID(),
    href:'#revendedores',
    text:'Revendedores'
  },
  {
    id:crypto.randomUUID(),
    href:'#testimonios',
    text:'Testimonios'
  },
  {
    id:crypto.randomUUID(),
    href:'#servicios',
    text:'Servicios'
  },
  {
    id:crypto.randomUUID(),
    href:'#contacto',
    text:'Contacto'
  },

]

export const NavbarMobile = () => {
  const [handleMenuMobile, setHandleMenuMobile] = useState(false);
  const [linkActive, setLinkActive] = useState("Inicio");
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
          <ul className="flex flex-col text-center items-center px-0 gap-4">
            {
              navLinks.map((navLink) => (
                <a href={navLink.href} key={navLink.id} className={`no-underline font-semibold ${linkActive === navLink.text ? 'text-azul-dg' : 'text-negro-dg'}`} onClick={() => {
                  setHandleMenuMobile(false);
                  setLinkActive(navLink.text);
                }}>
                  {navLink.text}
                </a>
              ))
            }
          </ul>
          <div className="flex items-center gap-2 mt-5">
            {/**Buttons */}
            <a
              href="https://www.facebook.com/bateriasdariogiagnoni/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-negro-dg transition-colors duration-200 text-azul-dg"
            >
              <MdFacebook size={25} />
            </a>
            <a
              href="https://www.instagram.com/bateriasdariogiagnoni/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-negro-dg transition-colors duration-200 text-azul-dg"
            >
              <FaInstagram size={25} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
