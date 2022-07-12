import { GlobalStyle } from "./components/GlobalStyle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Terapia from './pages/terapia'
import Promocao from './pages/promocao'

import Principal from "./pages/principal";
import Sobre from "./pages/sobre";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Principal />
      <Sobre />
      <Terapia />
      <Promocao />
      {/* <Contatos /> */}
      <Footer />
    </>
  );
}

export default App;
