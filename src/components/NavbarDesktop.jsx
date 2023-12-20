import React, { useEffect, useState } from "react";
import logoDg from "../assets/logoDG.webp";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const navLinks = [
  {
    id: crypto.randomUUID(),
    href: "#",
    text: "Inicio",
  },
  {
    id: crypto.randomUUID(),
    href: "#beneficios",
    text: "Beneficios",
  },
  {
    id: crypto.randomUUID(),
    href: "#revendedores",
    text: "Revendedores",
  },
  {
    id: crypto.randomUUID(),
    href: "#testimonios",
    text: "Testimonios",
  },
  {
    id: crypto.randomUUID(),
    href: "#servicios",
    text: "Servicios",
  },
  {
    id: crypto.randomUUID(),
    href: "#contacto",
    text: "Contacto",
  },
];

export const NavbarDesktop = () => {
  const [linkActive, setLinkActive] = useState("Inicio");
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
      <div className="flex items-center gap-2 lg:gap-5">
        <ul className="flex gap-3 lg:gap-5 m-0 p-0">
          {navLinks.map((navLink) => (
            <a
              href={navLink.href}
              key={navLink.id}
              className={`no-underline font-semibold text-sm lg:text-base lg:mr-5 transition-all duration-200 hover:text-azul-dg ${linkActive === navLink.text ? 'text-azul-dg' : 'text-negro-dg'}`}
              onClick={() => setLinkActive(navLink.text)}
            >
              {navLink.text}
            </a>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          {/**Buttons */}
          <a
            href="https://www.facebook.com/bateriasdariogiagnoni/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-negro-dg transition-colors duration-200"
          >
            <MdFacebook size={25} />
          </a>
          <a
            href="https://www.instagram.com/bateriasdariogiagnoni/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-negro-dg transition-colors duration-200"
          >
            <FaInstagram size={25} />
          </a>
        </div>
      </div>
    </nav>
  );
};
