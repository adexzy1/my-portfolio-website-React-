import { PortfolioAnimations } from "@/components/portfolio/portfolio-animations";
import { SiteHeader } from "@/components/portfolio/site-header";
import { HeroSection } from "@/components/portfolio/hero-section";
import { MarqueeBanner } from "@/components/portfolio/marquee-banner";
import { WorkSection } from "@/components/portfolio/work-section";
import { NewsletterSection } from "@/components/portfolio/newsletter-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { SiteFooter } from "@/components/portfolio/site-footer";
// import { BlogSection } from "@/components/portfolio/blog-section";

export default function Page() {
  return (
    <>
      <PortfolioAnimations />
      <SiteHeader />
      <main>
        <HeroSection />
        <MarqueeBanner />
        <WorkSection />
        {/* <BlogSection /> */}
        <NewsletterSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
