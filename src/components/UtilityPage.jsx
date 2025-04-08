import ImageBox from "@/ui/ImageBox";
import styles from "./styles/UtilityPage.module.css";
import Button from "@/ui/Button";

function UtilityPage() {
  return (
    <div className={`container ${styles.utilityPage}`} id="utilities">
      <div className={styles.utilityPageHeader}>
        <header>
          <h6 data-aos="fade-up" data-aos-delay="0">
            Utility pages
          </h6>
          <h2 className={styles.title} data-aos="fade-up" data-aos-delay="0">
            Utility pages
          </h2>
        </header>
        <Button href="https://webflow.com/templates/designers/flownix">
          Purchase Template
        </Button>
      </div>
      <div className={styles.imageGrid}>
        <ImageBox word={"License"} image={"/utility/01.webp"} />
        <ImageBox word={"Style Guide"} image={"/utility/02.webp"} />
        <ImageBox word={"Password"} image={"/utility/03.webp"} />
        <ImageBox word={"Chanelog"} image={"/utility/04.webp"} />
      </div>
    </div>
  );
}

export default UtilityPage;
