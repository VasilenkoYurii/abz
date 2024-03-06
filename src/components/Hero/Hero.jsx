import BackgroundImage from '../../assets/1x1.png';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_background}>
        <img
          src={BackgroundImage}
          alt="wheat field and blue sky as Ukraine freedom"
        />
      </div>
      <h1 className={styles.hero__title}>
        Test assignment for front-end developer
      </h1>
      <p className={styles.hero__text}>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <a className={styles.hero__link} href="#register">
        Sign up
      </a>
    </section>
  );
};
