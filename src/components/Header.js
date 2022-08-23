import Logo from "../images/logo.png";
import SocialMediaLinks from "./SocialMediaLinks";

const Header = () => {
    return (
        <header id="header-wrap">
            <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            <span className="icon-menu"></span>
                            <span className="icon-menu"></span>
                            <span className="icon-menu"></span>
                        </button>
                        <a href="/" className="navbar-brand">
                            <img src={ Logo } width="60" alt="Logo Juniorov" />
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="main-navbar">
                        <ul className="onepage-nev navbar-nav mr-auto w-100 justify-content-end clearfix">
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
                <ul className="onepage-nev mobile-menu">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">about</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#resume">resume</a>
                    </li>
                    <li>
                        <a href="#portfolio">Work</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
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
                                <div className="header-button wow fadeInUp"><a href="#contact" className="btn btn-common">Get a
                                    Free Quote</a>
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