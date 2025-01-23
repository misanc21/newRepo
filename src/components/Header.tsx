'use client'
import ContactButton from './ContactButton';
import AnimatedLink from './AnimatedLink';
import Image from 'next/image';
import { useState } from 'react';
import { MenuHeaderMobile } from './header/MenuHeaderMobile';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className='bg-[#f3f3f3] p-5 flex justify-between items-center bg-transparent fixed top-0 left-0 w-full z-50'>
      <div className='hidden md:flex gap-3 justify-center items-center'>
        <AnimatedLink url={"/"} >
          <Image src="/logomisanc21.png" alt="logo" width={30} height={30} />
        </AnimatedLink>
        <AnimatedLink url={"/experience"} text="Experience" />
        <AnimatedLink url={"/technologies"} text="Technologies" />
        <AnimatedLink url={"/myprojects"} text="Projects" />
      </div>
      <div onClick={() => setMenuOpen(!menuOpen)} className='block z-50 md:hidden cursor-pointer'>
        <div className={`w-6 h-0.5 mb-1 transition-all ${menuOpen ? ' bg-white rotate-45 translate-y-1.5' : 'bg-black'}`}></div>
        <div className={`w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 transition-all ${menuOpen ? 'bg-white -rotate-45 -translate-y-1.5' : 'bg-black'}`}></div>
      </div>
      <ContactButton />
      {/*Menu para responsive jsjs */}
      <MenuHeaderMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  )
}