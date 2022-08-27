import ResumeDetail from "./ResumeDetail";

const Resume = () => {
    const education = [
        {
          institution: "Universidad de Costa Rica UCR",
          years: "2006 - 2009",
          title: ["Bachiller Informática Empresarial. Computer Programming/Programmer, General"]
        },
        {
            institution: "Universidad Técnica Nacional",
            years: "2010 - 2012",
            title: ["Graphic Design"]
        },
        {
            institution: "Universidad Estatal a Distancia de Costa Rica",
            years: "2018 - Incomplete",
            title: ["Project Management"]
        }
    ];
    const experience = [
        {
            position: "Full-stack Developer - Growth Acceleration Partners",
            years: "Apr 2019 - Present",
            content: []
        },
        {
            position: "Full-stack Developer - Hangar",
            years: "Jan 2016 - Mar 2019",
            content: ["I had to create some systems with Laravel.", "Consume Rest API from Podio Platform."]
        },
        {
            position: "Web Programmer - Double Digit",
            years: "Nov 2013 - Jan 2016",
            content: ["I was in charge of developing WordPress sites creating custom themes and using some plugins as ACF"]
        },
    ];

    return (
        <div id="resume" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="education wow fadeInRight">
                            <ul className="timeline">
                                <li>
                                    <i className="icon-graduation"></i>
                                    <h2 className="timelin-title">Education</h2>
                                </li>
                                {
                                    education.map((data, index) => (
                                        <ResumeDetail key={index} institution={data.institution} years={data.years} lines={data.title} />
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="experience wow fadeInRight">
                            <ul className="timeline">
                                <li>
                                    <i className="icon-briefcase"></i>
                                    <h2 className="timelin-title">Experience</h2>
                                </li>
                                {
                                    experience.map((data, index) => (
                                        <ResumeDetail key={index} institution={data.position} years={data.years} lines={data.content}/>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;