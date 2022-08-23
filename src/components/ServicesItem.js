const ServicesItem = ({title, text}) => {
    return (
        <div className="col-md-6 col-lg-3 col-xs-12">
            <div className="services-item">
                <div className="icon">
                    <i className="icon-grid"></i>
                </div>
                <div className="services-content">
                    <h3><a href="#">{title}</a></h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default ServicesItem;