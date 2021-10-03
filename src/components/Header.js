import { useState, useEffect } from 'react';
import { UilAlignRight } from '@iconscout/react-unicons';
import Navlinks from './navlinks';
import NavItem from './navitem';
const Header = () => {
  const [showmenu, setShowMenu] = useState(false);

  const menuToggle = () => {
    showmenu ? setShowMenu(false) : setShowMenu(true);
  };
  useEffect(() => {
    if (window.innerWidth > 767) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }, []);
  return (
    <header>
      <div className="header_container">
        <h4 className="logo">
          John <br />
          Adekoya.
        </h4>
        <nav className={showmenu ? 'displayMenu' : 'hideMenu'}>
          <ul>
            {Navlinks.map((navlink) => (
              <NavItem
                classN={navlink.classN}
                href={navlink.href}
                text={navlink.text}
              />
            ))}
          </ul>
        </nav>
        <div id="menu-toggle" onClick={menuToggle}>
          <UilAlignRight size="30" pointerEvents="none" />
        </div>
      </div>
    </header>
  );
};

export default Header;
