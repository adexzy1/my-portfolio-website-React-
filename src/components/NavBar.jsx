import { useState } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { RiCloseFill } from 'react-icons/ri';
import useClickOutside from '../hooks/useClickOutsite';
import scroll from '../hooks/UseScroll';

const NavBar = ({ about, skills, projects, hireMe }) => {
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

  const style = {
    header: 'py-6 lg:mt-5 z-30',
    container:
      'px-5 flex justify-between items-center md:px16 lg:px-24 2xl:w-[1400px] 2xl:mx-auto',
    nav: `${showMenu ? 'translate-x-0' : 'translate-x-[-100%]'}
      transform  absolute flex flex-col  top-0 bg-input text-white w-[50%] left-0 p-5 pt-14  transition sm:pl-10 lg:translate-x-0 lg:relative lg:flex-row lg:bg-transparent lg:w-auto lg:items-center lg:text-center lg:p-0 lg:pt-0 lg:h-0 h-[100vh]`,
    btn: 'lg:mr-0 bg-purple px-5 py-2 rounded whitespace-nowrap mt-10 lg:mt-0',
    icon__wrapper: 'lg:hidden',
    icon: 'text-2xl cursor-pointer',
  };

  return (
    <header className={style.header}>
      <section className={style.container}>
        <a href="/">
          John <br />
          Adekoya.
        </a>

        <nav ref={ref} className={style.nav}>
          <a href="/">Home</a>

          <section
            onClick={() => {
              setShowMenu(false);
              scroll(about);
            }}
          >
            About
          </section>

          <section
            onClick={() => {
              setShowMenu(false);
              scroll(skills);
            }}
          >
            Skills
          </section>

          <section
            onClick={() => {
              setShowMenu(false);
              scroll(projects);
            }}
          >
            My Work
          </section>

          <button
            onClick={() => {
              setShowMenu(false);
              scroll(hireMe);
            }}
            className={style.btn}
          >
            Hire Me
          </button>
        </nav>

        <section className={style.icon__wrapper} onClick={toggleMenu}>
          {showMenu ? (
            <RiCloseFill className={style.icon} />
          ) : (
            <RiMenu3Line className={style.icon} />
          )}
        </section>
      </section>
    </header>
  );
};

export default NavBar;
