type NavLinksProps = {
  onClick?: () => void;
};

const navItems = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  // { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function NavLinks({ onClick }: NavLinksProps) {
  return (
    <>
      {navItems.map((item) => (
        <a key={item.href} href={item.href} onClick={onClick}>
          {item.label}
        </a>
      ))}
    </>
  );
}
