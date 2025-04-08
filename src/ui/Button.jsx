import styles from "./styles/Button.module.css";

function Button({ href, children, delay = "0" }) {
  return (
    <button className={styles.button} data-aos="fade-up" data-aos-delay={delay}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        {children}
        <span className={styles.circle}></span>
      </a>
    </button>
  );
}

export default Button;
