import Logo from "../images/logo.png";
import SocialMediaLinks from "./SocialMediaLinks";

const Header = () => {

    return (
        <header id="header-wrap">
            <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
                <div className="container">
                    <a className="navbar-brand" href="/"><img src={ Logo } width="60" alt="Logo Juniorov" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                            <li className="nav-item active">
                                <a className="nav-link" href="#hero-area">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">
                                    Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#resume">
                                    Resume
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolios">
                                    Work
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div id="hero-area" className="hero-area-bg">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 text-center">
                            <div className="contents">
                                <h5 className="script-font wow fadeInUp">Hi This is</h5>
                                <h2 className="head-title wow fadeInUp">Junior Obando</h2>
                                <p className="script-font wow fadeInUp">Software Engineer</p>
                                <SocialMediaLinks  extraClass="wow fadeInUp" />
                                <div className="header-button wow fadeInUp"><a href="#contact" className="btn btn-common">Get in Touch</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;