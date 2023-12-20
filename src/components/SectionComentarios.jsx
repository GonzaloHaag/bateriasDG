import React from "react";
import { Container } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const testimonios = [
  {
    id: crypto.randomUUID(),
    text: "Compré una batería para mi camioneta aquí y estoy realmente impresionado con su rendimiento. ¡Recomiendo esta distribuidora a todos mis amigos!",
    author: "Martin H.",
  },
  {
    id: crypto.randomUUID(),
    text: "Las baterías de esta distribuidora han superado mis expectativas en términos de calidad y durabilidad. ¡Recomendado!",
    author: "Juan P.",
  },

  {
    id: crypto.randomUUID(),
    text: "Atención impecable y productos de primera.",
    author: "María G.",
  },

  {
    id: crypto.randomUUID(),
    text: "Excelente servicio y batería de alta calidad! Mi camión funciona como nuevo.",
    author: "Horacio M.",
  },
];

export const SectionComentarios = () => {
  return (
    <section className="min-h-screen w-full bg-negro-dg py-10 md:py-0 flex flex-col justify-center scroll-mt-[70px] md:scroll-mt-0" id="testimonios">
      <Container className="text-white">
        <div className="flex flex-col items-center md:items-start md:flex-row md:gap-3">
          <h3 className="gobold-relleno text-3xl sm:text-4xl md:text-6xl m-0 p-0">
            TESTIMONIOS
          </h3>
          <h4 className="gobold-sin-relleno text-3xl sm:text-4xl md:text-6xl m-0 p-0">
            CLIENTES
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">
           {
            testimonios.map((testimonio) => (
                <div key={testimonio.id} className="relative bg-slate-900 flex flex-col items-center text-center justify-between px-5 py-4 min-h-[200px] rounded-lg">
                    <FaQuoteLeft size={30} className="absolute -top-[15px] left-[50%] right-[50%]" />
                    {/**Card */}
                    <p className="text-balance min-h-[200px]">"{testimonio.text}"</p>
                    <span className="font-bold">{testimonio.author}</span>
                    <hr className="absolute w-full bottom-12 h-[2px] bg-white" />
                    <div className="flex items-center gap-1 mt-5">
                        {/**Estrellas */}
                        <FaStar className="fill-azul-dg" size={25} />
                        <FaStar className="fill-azul-dg" size={25} />
                        <FaStar className="fill-azul-dg" size={25} />
                        <FaStar className="fill-azul-dg" size={25} />
                        <FaStar className="fill-azul-dg" size={25} />
                    </div>
                </div>
            ))
           }
        </div>
      </Container>
    </section>
  );
};
