import styles from './index.module.css';
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import Card from 'components/Card';
import videos from '../../data/db.json';

const Inicio = () => {
  return (
    <>
      <Banner img="home" color="#154580" />
      <Titulo>
        <h1>Un lugar para guardar sus videos favoritos </h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} id={video.id} key={video.id} />;
        })}
      </section>
    </>
  );
};

export default Inicio;
