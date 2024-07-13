import { FavoritosContext } from 'context/Favoritos';
import { useContext } from 'react';

const useFavoritosContext = () => {
  const { favorito, setFavorito } = useContext(FavoritosContext);

  function agregarFavorito(nuevoFavorito) {
    const favoritoRepetido = favorito.some(
      (item) => item.id === nuevoFavorito.id,
    );
    let nuevaLista = [...favorito];
    if (!favoritoRepetido) {
      nuevaLista.push(nuevoFavorito);
      return setFavorito(nuevaLista);
    }

    nuevaLista = favorito.filter((item) => item.id !== nuevoFavorito.id);
    return setFavorito(nuevaLista);
  }
  return { favorito, agregarFavorito };
};

export default useFavoritosContext;
