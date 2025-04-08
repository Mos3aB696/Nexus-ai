import ImageBox from "@/ui/ImageBox";
import styles from "./styles/InnerPage.module.css";
import Button from "@/ui/Button";

function InnerPage() {
  return (
    <div className={`container ${styles.innerPage}`} id="innerPage">
      <div className={styles.innerPageHeader}>
        <header>
          <h6 data-aos="fade-up" data-aos-delay="0">
            Inner Pages
          </h6>
          <h2 className={styles.title} data-aos="fade-up" data-aos-delay="200">
            Inner Pages
          </h2>
        </header>
        <Button href="https://webflow.com/templates/designers/flownix">
          Purchase Template
        </Button>
      </div>
      <div className={styles.imageGrid}>
        <ImageBox word={"Feature"} image={"/inner/01.webp"} />
        <ImageBox word={"About"} image={"/inner/02.webp"} />
        <ImageBox word={"Pricing"} image={"/inner/03.webp"} />
        <ImageBox word={"Pricing Single"} image={"/inner/04.webp"} />
        <ImageBox word={"Blog"} image={"/inner/05.webp"} />
        <ImageBox word={"Blog Single"} image={"/inner/06.webp"} />
        <ImageBox word={"Contact"} image={"/inner/07.webp"} />
        <ImageBox word={"404"} image={"/inner/08.webp"} />
      </div>
    </div>
  );
}

export default InnerPage;
