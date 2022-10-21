import styles from "./HomeHeader.module.scss";

export const HomeHeader = () => {
  return (
    <header className={styles.header}>
      <section className={styles.header__message}>
        <h1>
          <span className={styles.gradient}>
            Todos los eventos tecnológicos
          </span>{" "}
          <br />
          en un mismo lugar.
        </h1>
      </section>

      <section className={styles.header__image}>
        <img
          src="/images/hero_image.svg"
          alt="A illustration where we see a girl sitting with her notebook. Also, we see a lamp illustrating a good idea"
        />
      </section>
    </header>
  );
};
