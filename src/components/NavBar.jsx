import { useState } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { RiCloseFill } from 'react-icons/ri';
import useClickOutside from '../hooks/useClickOutsite';
import scroll from '../hooks/UseScroll';
import useShowElement from '../hooks/useShowElement';

const NavBar = ({ about, skills, projects, hireMe }) => {
  // state
  const [showMenu, setShowMenu] = useState(false);

  // custom hook
  const setNavToFixed = useShowElement(100);

  // custom hook to hide mobile menu if user click outside the menu parent element
  let ref = useClickOutside(() => {
    setShowMenu(false);
  });

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  // remove page scrolling when mobile menu is displayed
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
    header: `${
      setNavToFixed
        ? 'sticky transition ease-linear duration-700 z-10 bg-purple py-5 top-0 w-[1440px] max-w-[100%] mx-auto'
        : 'py-6 ease lg:mt-5'
    } `,
    container: 'px-5 flex justify-between items-center md:px16 lg:px-24',
    nav: `${showMenu ? 'translate-x-0' : 'translate-x-[-100%]'}
      transform  absolute flex flex-col  top-0 bg-input text-white w-[50%] left-0 p-5 pt-14  transition sm:pl-10 lg:translate-x-0 lg:relative lg:flex-row lg:bg-transparent lg:w-auto lg:items-center lg:text-center lg:p-0 lg:pt-0 lg:h-0 h-[100vh] z-[30]`,
    btn: 'lg:mr-0 bg-purple px-5 py-2 rounded whitespace-nowrap mt-10 lg:mt-0',
    icon__wrapper: 'lg:hidden',
    icon: 'text-2xl cursor-pointer',
  };

  return (
    <header id="header" className={style.header}>
      <section className={style.container}>
        <a href="/">
          John <br />
          Adekoya.
        </a>

        <nav ref={ref} className={style.nav}>
          <a href="/">Home</a>

          <section
            className="m "
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
