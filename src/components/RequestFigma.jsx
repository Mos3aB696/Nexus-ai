import Button from "@/ui/Button";
import styles from "./styles/RequestFigma.module.css";
function RequestFigma() {
  return (
    <section className={`${styles.sectionFigma}`}>
      <img
        src="/icons/figma.webp"
        alt="figma icons"
        data-aos="zoom-in"
        data-aos-delay="0"
      />
      <h2 data-aos="fade-up" data-aos-delay="0">
        Figma source file included
      </h2>
      <p data-aos="fade-up" data-aos-delay="200">
        Send us an email to support@flownix.co with your purchase receipt, and
        we will send you the editable Figma file.
      </p>
      <Button
        href="mailto:support@flownix.co?subject=Request%20Figma%20File"
        delay="400"
      >
        Request Figma File
      </Button>
    </section>
  );
}

export default RequestFigma;
