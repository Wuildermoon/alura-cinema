const { createContext, useState } = require('react');

export const FavoritosContext = createContext();

FavoritosContext.displayName = 'Favoritos';

const FavoritoProvider = ({ children }) => {
  const [favorito, setFavorito] = useState([]);

  return (
    <FavoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritoProvider;
