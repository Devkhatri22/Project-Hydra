import "./styles/index.css";
import { Navbar, Footer } from "./components";
import {
  Aboutus,
  Design,
  Form,
  Hero,
  Introduction,
  Technologies,
  Waybuild,
} from "./sections";

function App() {
  return (
    <main
      data-theme="light"
      className="bg-blue-951 overflow-x-clip font-montserrat scroll-smooth"
    >
      <Navbar />
      <Hero />
      <Aboutus />
      <Introduction />
      <Waybuild />
      <Technologies />
      <Design />
      <Form />
      <Footer />
    </main>
  );
}

export default App;
