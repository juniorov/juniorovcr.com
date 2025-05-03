
const SocialMediaLinks = ({ extraClass }) => {

    return (
        <ul className={ "social-icon " + extraClass }>
            <li>
                <a className="linkedin" href="https://www.linkedin.com/in/juniorov/" target="_blank" rel="noreferrer">
                    <i className="icon-social-linkedin"></i>
                </a>
            </li>
            <li>
                <a className="github" href="https://github.com/juniorov" target="_blank" rel="noreferrer">
                    <i className="icon-social-github"></i>
                </a>
            </li>
        </ul>
    );
}

export default SocialMediaLinks;