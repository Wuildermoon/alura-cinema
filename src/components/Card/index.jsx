import useFavoritosContext from 'hook/useFavoritosContext';
import styles from './Card.module.css';
import iconFavorito from './iconFavorito.png';
import iconNoFavorito from './iconNoFavorito.png';

const Card = ({ id, capa, titulo }) => {
  const { favorito, agregarFavorito } = useFavoritosContext();
  const isFavorito = favorito.some(fav => fav.id === id);
  const icon = isFavorito ? iconFavorito : iconNoFavorito;

  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
      <img
        src={icon}
        alt="Icono favorito"
        onClick={() => agregarFavorito({ id, capa, titulo })}
      />
    </div>
  );
};

export default Card;
