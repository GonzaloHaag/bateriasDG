import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavbarMobile,NavbarDesktop } from './index';

export const Header = () => {
    const [headerFijo,setHeaderFijo] = useState(false);
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
  return (
    <header className='min-h-[65px] sticky w-full bg-white z-10 flex items-center top-0'>
        <Container>
             <NavbarMobile />
             <NavbarDesktop />
        </Container>
    </header>
  )
}
