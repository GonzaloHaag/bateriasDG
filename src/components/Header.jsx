import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavbarMobile,NavbarDesktop } from './index';

export const Header = () => {
    const [headerFijo,setHeaderFijo] = useState(false);
  useEffect(() => {
     const functionScroll = () => {
       if(window.scrollY > 0) {
        console.log('scroll');
        setHeaderFijo(true);
       }
       else{
        console.log('No scroll');
        setHeaderFijo(false)
       }
     }
     window.addEventListener('scroll',functionScroll);
  },[]);
  return (
    <header className={`min-h-[55px] md:min-h-[65px] flex items-center w-full bg-white shadow-md transition-all duration-200 ${headerFijo ? 'fixed top-0 left-0 z-10' : 'relative '}`}>
        <Container>
             <NavbarMobile />
             <NavbarDesktop />
        </Container>
    </header>
  )
}
