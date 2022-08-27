const PortfolioCard = ({image, keys, link}) => {
    return (
        <div className={"col-sm-6 col-md-4 mix all "+keys}>
            <div className="portfolio-item">
                <div className="shot-item">
                    <img src={require(`../images/gallery/${image}`)} alt=""/>
                    <div className="overlay">
                        <div className="icons">
                            <a className="link" href={link}>
                                <i className="icon-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;