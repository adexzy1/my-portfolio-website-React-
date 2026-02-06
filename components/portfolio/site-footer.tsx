import { NavLinks } from "./nav-links";
import { SocialLinks } from "./social-links";

export function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="logo">John Adekoya.</div>
          <div className="footer-content">
            <nav className="footer-nav">
              <NavLinks />
            </nav>
            <div className="social-icons">
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="copyright">
          © 2026 John Adekoya. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
