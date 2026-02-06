"use client";

import { useEffect, useState } from "react";

const fullText = "John A.A";

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 80 : 150;
    const pauseDuration = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText.length < fullText.length) {
        setTypedText(fullText.substring(0, typedText.length + 1));
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(fullText.substring(0, typedText.length - 1));
      } else if (!isDeleting && typedText.length === fullText.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && typedText.length === 0) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting]);

  return (
    <section id="about" className="hero animate-on-scroll">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-vertical-name">
            {typedText}
            <span className="typing-cursor">|</span>
          </div>
          <div className="hero-content-wrapper">
            <div className="hero-image-container animate-on-scroll">
              <div className="hero-image-bg"></div>
              <img
                src="/images/me-02.png"
                alt="Profile"
                className="hero-image"
              />
            </div>
            <div className="hero-content">
              <span className="hero-role">Software Developer</span>
              <div className="hero-location">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Lagos, Nigeria
              </div>
              <p className="hero-bio">
                I&apos;m a full-stack engineer with experience building
                scalable systems, clean APIs, and modern React interfaces. I
                care deeply about architecture, developer experience, and
                shipping reliable products â€” especially in platforms that
                handle real business operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
