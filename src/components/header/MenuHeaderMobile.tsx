'use client'
import Link from "next/link"

interface MenuHeaderMobileProps {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  menuOpen: boolean
}

export const MenuHeaderMobile = ({ setMenuOpen, menuOpen }: MenuHeaderMobileProps) => {
  return (
    <div
      className={`fixed inset-0 bg-black text-white flex flex-col items-center justify-center transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}
    >
      <Link
        href={'/'}
        className='text-2xl font-bold mb-6 hover:text-gray-500'
        onClick={() => setMenuOpen(false)}
      >
        Home
      </Link>
      <Link
        href={'/experience'}
        className='text-2xl font-bold mb-6 hover:text-gray-500'
        onClick={() => setMenuOpen(false)}
      >
        Experience
      </Link>
      <Link
        href={'/technologies'}
        className='text-2xl font-bold mb-6 hover:text-gray-500'
        onClick={() => setMenuOpen(false)}
      >
        Technologies
      </Link>
      <Link
        href={'/myprojects'}
        className='text-2xl font-bold mb-6 hover:text-gray-500'
        onClick={() => setMenuOpen(false)}
      >
        Projects
      </Link>
    </div>
  )
}