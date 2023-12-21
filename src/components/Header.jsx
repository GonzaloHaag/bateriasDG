import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavbarMobile,NavbarDesktop } from './index';

export const Header = () => {
  return (
    <header className='min-h-[65px] sticky w-full bg-white z-10 flex items-center top-0'>
        <Container>
             <NavbarMobile />
             <NavbarDesktop />
        </Container>
    </header>
  )
}
