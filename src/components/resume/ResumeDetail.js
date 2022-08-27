const ResumeDetail = ({institution, years, lines}) => {

    return (
        <li>
            <div className="content-text">
                <h3 className="line-title">{institution}</h3>
                <span>{years}</span>
                {
                    lines.map((line, index) => (
                        <p key={index} className="line-text">{line}</p>
                    ))
                }

            </div>
        </li>
    );
}

export default ResumeDetail;