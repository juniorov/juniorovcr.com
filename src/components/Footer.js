import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
    return (
        <footer className="footer-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-text text-center">
                            <SocialMediaLinks extraClass="" />
                            <p>Copyright © 2022 All Right Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;