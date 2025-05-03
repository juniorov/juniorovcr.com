const ServicesItem = ({icon, title, text}) => {
    return (
        <div className="col-md-6 col-lg-3 col-xs-12">
            <div className="services-item">
                <div className="icon">
                    <i className={icon}></i>
                </div>
                <div className="services-content">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default ServicesItem;