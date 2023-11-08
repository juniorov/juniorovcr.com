import CardHobbie from "./CardHobbie";

const Hobbies = () => {
    const hobbies = [
        { name: "Soccer", icon: "far fa-futbol" },
        { name: "Hiking", icon: "fas fa-hiking" },
        { name: "Bike", icon: "fas fa-biking" },
        { name: "Movies", icon: "fas fa-film" },
    ];
    return (
        <section className="counter-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="container">
                        <div className="col-xs-12">
                            <h1 className="text-center text-white">Hobbies</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        hobbies.map((data, index) => (
                            <CardHobbie {...data} key={index}  />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Hobbies;