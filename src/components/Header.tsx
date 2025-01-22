import ContactButton from './ContactButton';
export const Header = () => {
  return (
    <header className='bg-[#f3f3f3] p-4 flex justify-end items-center bg-transparent fixed top-0 left-0 w-full z-50'>
      <ContactButton />
    </header>
  )
}