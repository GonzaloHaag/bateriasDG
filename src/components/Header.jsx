import React from 'react';
import { NavbarMobile,NavbarDesktop } from './index';

export const Header = () => {
  return (
    <header className='min-h-[65px] sticky w-full bg-white z-10 flex items-center top-0 shadow-md'>
        <div className='px-2 container w-full min-[576px]:max-w-[540px]: mx-auto min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]'>
             <NavbarMobile />
             <NavbarDesktop />
        </div>
    </header>
  )
}
