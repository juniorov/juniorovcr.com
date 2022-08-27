import Input from "./Input";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputs = document.querySelectorAll('input, textarea');

        Array.from(inputs).map(input => {
            let parent = input.parentElement;
            if(input.value === "" || input.length < 0) {
                parent.classList.add('has-error');
                parent.querySelector('.with-errors').innerHTML = input.getAttribute('data-error');
            } else {
                parent.querySelector('.with-errors').innerHTML = "";
            }
        })
    }

    return (
        <section id="contact" className="section-padding">
            <div className="contact-form">
                <div className="container">
                    <div className="row contact-form-area wow fadeInUp">
                        <div className="col-md-6 col-lg-6 col-sm-12">
                            <div className="contact-block">
                                <h2>Contact Form</h2>
                                <form id="contactForm" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <Input parentClass="col-md-6" type="text" placeholder="Name" id="name" errorMessage="Please enter your name" />
                                        <Input parentClass="col-md-6" type="email" placeholder="Email" id="email" errorMessage="Please enter your email" />
                                        <Input parentClass="col-md-12" type="text" placeholder="Subject" id="subject" errorMessage="Please enter your subject" />

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea className="form-control" id="message"
                                                          placeholder="Your Message" rows="5"
                                                          data-error="Write your message"></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="submit-button">
                                                <button className="btn btn-common mx-auto d-block" id="submit" type="submit">Send
                                                    Message
                                                </button>
                                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12">
                            <div className="footer-right-area wow fadeIn">
                                <h2>Contact Address</h2>
                                <div className="footer-right-contact">
                                    <div className="single-contact">
                                        <div className="contact-icon">
                                            <i className="fa fa-map-marker"></i>
                                        </div>
                                        <p>San Ramón, Alajuela</p>
                                    </div>
                                    <div className="single-contact">
                                        <div className="contact-icon">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <p><a href="mailto:info@juniorov.com">info@juniorovcr.com</a></p>
                                        <p><a href="mailto:juniorov.dev@gmail.com">juniorov.dev@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <iframe title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1163.9717257991167!2d-84.47037216734276!3d10.0873265597658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa044fb28d25c09%3A0x39379b1d50ea17c0!2sParque%20Central%20de%20San%20Ram%C3%B3n!5e0!3m2!1sen!2scr!4v1650669858163!5m2!1sen!2scr"  allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;