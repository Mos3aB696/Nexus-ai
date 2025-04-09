import Button from "@/ui/Button";
import styles from "./styles/Footer.module.css";
function Footer() {
  return (
    <>
      <section className={`${styles.footer} container`}>
        <h2 data-aos="fade-up" data-aos-delay="0">
          Purchase Nexus.ai on webflow today!
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">
          Take your agency to the next level with our hand tailored webflow
          template, specially made for SaaS websites.
        </p>
        <Button
          href="https://webflow.com/templates/designers/flownix"
          delay="400"
        >
          Purchase Template
        </Button>
      </section>
      <footer className={styles.footerBottom}>
        Design & Developed By <span className={styles.footerBold}>Flownix</span>{" "}
        - <span className={styles.footerBold}>License</span> | Powered By
        <span className={styles.footerBold}> Webflow</span>
      </footer>{" "}
    </>
  );
}

export default Footer;
