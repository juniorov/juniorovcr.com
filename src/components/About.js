import About1 from "../images/about/about-1.jpg";
import CVPdf from "../docs/CV-JuniorOV.pdf";

const About = () => {
    const profile = [
        {
            label: "Name",
            text: "Junior Obando",
        },
        {
            label: "Experience",
            text: "Since 2012"
        },
        {
            label: "Country",
            text: "Costa Rica"
        },
        {
            label: "Location",
            text: "San Ramón, Alajuela"
        },
        {
            label: "Email",
            text: "juniorov.dev@gmail.com"
        }
    ];
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="img-thumb wow fadeInLeft">
                            <img className="img-fluid" src={About1} alt="About" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="profile-wrapper wow fadeInRight">
                            <h3>Hi Guys!</h3>
                            <p>I have been working as a developer for many years, I was involved in all the development
                                processes, requirements
                                analysis, modeling the database, etc.

                                I have a positive attitude and I am an organized person. I really like to learn and work
                                on challenging projects.</p>
                            <div className="about-profile">
                                <ul className="admin-profile">
                                    {
                                        profile.map((data, index) => (
                                            <li key={index}>
                                                <span className="pro-title"> {data.label} </span> <span className="pro-detail">{data.text}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <a href={CVPdf} className="btn btn-common d-block mx-auto" download="JuniorOV-CV.pdf">
                                <i className="icon-paper-clip"></i> Download Resume
                            </a>
                            <a href="#contact" className="btn btn-danger d-block mx-auto"><i className="icon-speech"></i> Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;