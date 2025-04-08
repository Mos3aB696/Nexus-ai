import styles from "./styles/ImageBox.module.css";

function ImageBox({ word, image, delay = "0" }) {
  return (
    <div style={{ margin: "auto" }} data-aos="fade-up" data-aos-delay={delay}>
      <a href="#" className={styles.link}>
        <div className={styles.imageContainer}>
          <img src={image} alt={`${word} Image`} className={styles.image} />
        </div>
        <div className={styles.title}>{word}</div>
      </a>
    </div>
  );
}

export default ImageBox;
