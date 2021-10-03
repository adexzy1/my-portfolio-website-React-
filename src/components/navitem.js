const NavItem = ({ classN, text, href }) => {
  return (
    <li className={classN}>
      <a href={href}>{text}</a>
    </li>
  );
};

export default NavItem;
