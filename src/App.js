import "./scss/index.scss";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Hobbies />
      <Contact />
      <Footer />
      <a href="#" className="back-to-top"><i className="icon-arrow-up"></i></a>
    </div>
  );
}

export default App;
