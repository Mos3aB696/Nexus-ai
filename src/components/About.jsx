import Button from "@/ui/Button";
import styles from "./styles/About.module.css";

function About() {
  return (
    <section className={styles.section}>
      <div className={`${styles.containerPreview} container`}>
        {/* Main Title Section */}
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutTopWrapper}>
            <h2
              className={styles.aboutTitle}
              data-aos="fade-up"
              data-aos-delay="0"
            >
              Included in <span className={styles.orange}>Nexus.ai</span>
            </h2>
            <p
              className={styles.aboutDescription}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Nexus webflow template includes 10+ pages in total, with more than
              30+ sections and 1 home page, and amazing features
            </p>
            <Button
              href="https://webflow.com/templates/designers/flownix"
              delay="400"
            >
              Purchase Template
            </Button>
          </div>
        </div>

        {/* Boxes Section */}
        <div className={styles.boxContainer}>
          <Box
            logo="/icons/01.svg"
            title="1 Stunning landing page"
            description="Nexus.ai has 1 stunning home page. designed to build your personal portfolio shine in the market."
          />
          <Box
            logo="/icons/02.svg"
            title="10+ Useful inner pages"
            description="Nexus.ai  has 10+ Inner pages thatis needed for your business. you can fully customize these."
            delay="200"
          />
          <Box
            logo="/icons/03.svg"
            title="30+ Details sections"
            description="Nexus.ai  has 40+ Stunning sections which will help you to build a portfolio website as per your need"
            delay="400"
          />
        </div>
      </div>
    </section>
  );
}

function Box({ logo, title, description, delay = "0" }) {
  return (
    <div className={styles.box} data-aos="fade-up" data-aos-delay={delay}>
      <div className={styles.boxLogo}>
        <img src={logo} alt={`${title} Logo`} />
      </div>
      <h3 className={styles.boxTitle}>{title}</h3>
      <p className={styles.boxDescription}>{description}</p>
    </div>
  );
}

export default About;
