import { useState } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { RiCloseFill } from 'react-icons/ri';
import useClickOutside from '../hooks/useClickOutsite';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  let ref = useClickOutside(() => {
    setShowMenu(false);
  });

  const toggleMenu = () => {
    setShowMenu((initial) => !initial);
  };

  switch (showMenu) {
    case true:
      document.body.style.overflowY = 'hidden';
      break;
    case false:
      document.body.style.overflowY = 'scroll';
      break;
    default:
      document.body.style.overflowY = 'scroll';
  }

  return (
    <header className="py-6 lg:mt-5 z-30">
      <section className="px-5 flex justify-between items-center md:px16 lg:px-24 2xl:w-[1400px] 2xl:mx-auto">
        <a href="/">
          John <br />
          Adekoya.
        </a>

        <nav
          ref={ref}
          className={`${showMenu ? 'translate-x-0' : 'translate-x-[-100%]'}
          transform  absolute flex flex-col  top-0 bg-input text-white w-[50%] left-0 p-5 pt-14  transition sm:pl-10 lg:translate-x-0 lg:relative lg:flex-row lg:bg-transparent lg:w-auto lg:items-center lg:text-center lg:p-0 lg:pt-0 lg:h-0 h-[100vh]`}
        >
          <a href="#home">Home</a>
          <a href="#home">About</a>
          <a href="#home">My Work</a>
          <a href="#home">Contact</a>
          <a className="lg:mr-0 px-0" href="#home">
            <button className="bg-purple px-5 py-2 rounded whitespace-nowrap">
              Hire Me
            </button>
          </a>
        </nav>
        <section className="lg:hidden" onClick={toggleMenu}>
          {showMenu ? (
            <RiCloseFill className="text-2xl cursor-pointer" />
          ) : (
            <RiMenu3Line className="text-2xl cursor-pointer" />
          )}
        </section>
      </section>
    </header>
  );
};

export default NavBar;
