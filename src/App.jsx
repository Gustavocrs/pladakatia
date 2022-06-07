import { GlobalStyle } from "./components/GlobalStyle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Principal from "./pages/principal";
import Sobre from "./pages/sobre";
import Contatos from "./pages/contatos";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Principal />
      <Sobre />
      {/* <Contatos /> */}
      <Footer />
    </>
  );
}

export default App;
