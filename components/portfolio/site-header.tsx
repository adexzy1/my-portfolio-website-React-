"use client";

import { useState } from "react";
import { NavLinks } from "./nav-links";
import { SocialLinks } from "./social-links";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo uppercase">John Adekoya.</div>
          <div className="nav-links">
            <NavLinks />
          </div>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
          <div className="social-icons desktop-only">
            <SocialLinks />
          </div>
        </nav>
      </div>
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            <NavLinks onClick={handleLinkClick} />
            <div className="mobile-menu-social">
              <SocialLinks />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
