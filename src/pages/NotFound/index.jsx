import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.error}>404</h1>
      <p className={styles.text_error}>Página no encontrada</p>
    </section>
  );
};

export default NotFound;
