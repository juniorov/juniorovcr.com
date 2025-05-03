import ServicesItem from "./ServicesItem";


const Services = () => {
    const services = [
        {
            icon: "icon-grid",
            title: "Front-end Development",
            text: "Create responsive websites, applications, web apps, etc. With modern technologies as HTML5, CSS3, React JS, Javascript",
        },
        {
            icon: "icon-layers",
            title: "Back-end Development",
            text: "I can help you with the development of your business APIs, E-commerce, Websites, Online Payments, WordPress, and Woocommerce."
        },
        {
            icon: "icon-docs",
            title: "Databases",
            text: "I can develop relational databases, Cloud databases, NoSQL databases, Object-oriented databases, etc"
        },
        {
            icon: "icon-support",
            title: "Consultancy",
            text: "I can help with the maintenance of your website or application, optimizing images, code, etc"
        }
    ]
    return (
        <section id="services" className="services section-padding">
            <h2 className="section-title wow flipInX">What I do</h2>
            <div className="container">
                <div className="row">
                    {
                        services.map((data, index) => (
                            <ServicesItem key={index} {...data} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Services;