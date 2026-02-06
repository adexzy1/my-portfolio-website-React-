const workItems = [
  {
    url: "https://fundsng.com",
    image: "/images/work/fundsng.png",
    alt: "Fundsng webapp interface",
    tag: "Web App",
    title: "Fundsng Platform",
    description:
      "A crowdfunding and target-savings platform that enables users to launch campaigns, raise funds securely, and track contributions with transparent tools and community support.",
  },
  {
    url: "https://timex.stransact.com",
    image: "/images/work/timex.png",
    alt: "timex mobile app interface",
    tag: "Web App",
    title: "Time, Expense & Project Management App",
    description:
      "Time and expense management platform that streamlines tracking, reporting, and project workflows across teams",
  },
  {
    url: "https://gridcoreinc.com",
    image: "/images/work/gridcore.png",
    alt: "Gridcore webapp interface",
    tag: "Web App",
    title: "Gridcore Platform",
    description:
      "intelligent energy platform combining smart metering, embedded finance, and edge orchestration to optimize and scale decentralized power systems across communities.",
  },
  {
    url: "https://zaroncosmetics.com",
    image: "/images/work/zaron.png",
    alt: "Zaron Cosmetics website interface",
    tag: "E-Commerce",
    title: "Zaron Cosmetics",
    description:
      "Beauty e-commerce platform showcasing premium cosmetics and skincare products tailored for diverse skin tones across Africa.",
  },
  {
    url: "https://ipaysuite.app",
    image: "/images/work/ipaysuite.png",
    alt: "Payroll Platform interface",
    tag: "Web App",
    title: "Payroll Platform",
    description:
      "Payroll and vendor management platform that streamlines employee payments, tax compliance, and business payroll workflows with secure automation..",
  },
];

export function WorkSection() {
  return (
    <section id="work" className="section work-section">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Featured Work</h2>
          {/* <a href="#" className="view-all">
            View All
          </a> */}
        </div>
        <div className="grid">
          {workItems.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="card animate-on-scroll">
                <img src={item.image} alt={item.alt} className="card-image" />
                <div className="card-content">
                  <span className="card-tag">{item.tag}</span>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.description}</p>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
