const PortfolioCard = ({image, keys, link}) => {
    return (
        <div className={"col-sm-6 col-md-4 mix "+keys}>
            <div className="portfolio-item">
                <div className="shot-item">
                    <img src={image} alt=""/>
                    <div className="overlay">
                        <div className="icons">
                            <a className="lightbox preview" href={image}>
                                <i className="icon-eye"></i>
                            </a>
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