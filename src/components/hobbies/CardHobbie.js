const CardHobbie = ({hobbie, icon}) => {
    return (
        <div className="col-md-3 col-sm-6 work-counter-widget text-center">
            <div className="counter">
                <div className="icon">
                    <i className={icon}></i>
                </div>
                <p>{hobbie}</p>
            </div>
        </div>
    );
}

export default CardHobbie;