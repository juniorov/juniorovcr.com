import ServicesItem from "./ServicesItem";


const Services = () => {
    const services = [
        {
            title: "Front-end Development",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.",
        },
        {
            title: "Back-end Development",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi."
        },
        {
            title: "Business Branding",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi."
        },
        {
            title: "Consultancy",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi."
        }
    ]
    return (
        <section id="services" className="services section-padding">
            <h2 className="section-title wow flipInX">What I do</h2>
            <div className="container">
                <div className="row">
                    {
                        services.map((data, index) => (
                            <ServicesItem key={index} title={data.title} text={data.text} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Services;