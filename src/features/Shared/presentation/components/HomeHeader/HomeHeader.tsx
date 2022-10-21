import styles from "./HomeHeader.module.scss";

export const HomeHeader = () => {
  return (
    <header className={styles.header}>
      <section className={styles.header__message}>
        <h1>Todos los eventos tecnológicos en un mismo lugar.</h1>
      </section>

      <section className={styles.header__image}>
        <img src="/images/hero_image.svg" alt="a girl with notebook sitting" />
      </section>
    </header>
  );
};
