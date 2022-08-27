import 'bootstrap/dist/js/bootstrap.bundle.js';
import "./scss/index.scss";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";

function App() {
    const [isHide, setIsHide] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {

            if(window.scrollY > 200) {
                setIsHide(false);
            } else {
                setIsHide(true);
            }
        })
    }, [window.scrollY]);

    const handleBackTop = (e) => {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        return false;
    }

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
      <a href="#" className={isHide ? 'back-to-top d-none' : 'back-to-top d-block' } onClick={handleBackTop}><i className="icon-arrow-up"></i></a>
    </div>
  );
}

export default App;
