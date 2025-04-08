import styles from "./styles/HomePage.module.css";
import ImageBox from "@/ui/ImageBox";

function HomePage() {
  return (
    <div className={`container ${styles.homePage}`} id="demos">
      <h6 data-aos="fade-up" data-aos-delay="0">
        Home pages
      </h6>
      <h2 className={styles.title} data-aos="fade-up" data-aos-delay="200">
        Home pages
      </h2>
      <ImageBox word={"Home"} image={"/home/homeImage.webp"} />
    </div>
  );
}

export default HomePage;
