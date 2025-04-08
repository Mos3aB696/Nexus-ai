"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./styles/LandingPage.module.css";
import Button from "@/ui/Button";

function LandingPage() {
  const { scrollY } = useScroll();

  // Define transformations for the first and third images
  const firstImageX = useTransform(scrollY, [0, 300], [0, -60]); // Move left
  const thirdImageX = useTransform(scrollY, [0, 300], [0, 60]); // Move right

  return (
    <div className={styles.section} id="home">
      <div className="container">
        <div className={styles.previewWrapper}>
          <div className={styles.previewTopWrapper} data-aos="fade-up">
            <h1
              className={styles.previewTitle}
              data-aos="fade-up"
              data-aos-delay="0"
            >
              AI Chat bot solution template
            </h1>
            <p
              className={styles.previewDescription}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Nexus.ai webflow template includes 10+ pages in total, with more
              than 30+ sections and 1 home page, and amazing features
            </p>

            <Button
              href="https://webflow.com/templates/designers/flownix"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Purchase Template
            </Button>
          </div>
        </div>
        {/* Images Section */}
        <div className={styles.imageContainer}>
          {/* First Image */}
          <motion.img
            src="/homeImages/01.webp"
            alt="First Image"
            style={{ x: firstImageX }}
            className={`${styles.image} ${styles.firstImage}`}
          />
          {/* Middle Image */}
          <img
            src="/homeImages/02.webp"
            alt="Middle Image"
            className={`${styles.image} ${styles.middleImage}`}
          />
          {/* Third Image */}
          <motion.img
            src="/homeImages/03.webp"
            alt="Third Image"
            style={{ x: thirdImageX }}
            className={`${styles.image} ${styles.thirdImage}`}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
