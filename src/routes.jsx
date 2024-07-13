import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from 'pages/Inicio';
import Favoritos from 'pages/Favoritos';
import Cabecera from 'components/Cabecera';
import Pie from 'components/Pie';
import Container from 'components/Container';

// const { BrowserRouter, Routes, Route } = require("react-router-dom");
// const { default: Inicio } = require("pages/Inicio");
// const Favoritos = require("pages/Favoritos");

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Cabecera />
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </Container>
      <Pie />
    </BrowserRouter>
  );
};

export default AppRoutes;
