import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
    const filters = [
        {
            key: "all",
            label: "All"
        },
        {
            key: "frontend",
            label: "Front-end"
        },
        {
            key: "backend",
            label: "Back-end"
        },
        {
            key: "frameworks",
            label: "Frameworks - CMS"
        },
    ]
    const cards = [
        {
            image: "../images/gallery/laravel.png", keys: "backend frameworks", link:"https://laravel.com/"
        },
        {
            image: "../images/gallery/wordpress.png", keys: "frontend frameworks", link:"https://wordpress.com/"
        },
        {
            image: "../images/gallery/php.png", keys: "backend", link:"https://php.net/"
        },
        {
            image: "../images/gallery/html.png", keys: "frontend", link:"https://www.w3schools.com/html/"
        },
        {
            image: "../images/gallery/mysql.png", keys: "backend", link:"https://mysql.com/"
        },
        {
            image: "../images/gallery/javascript.png", keys: "backend frontend", link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        {
            image: "../images/gallery/codeigniter.png", keys: "backend frameworks", link:"https://codeigniter.com/"
        },
        {
            image: "../images/gallery/css.png", keys: "frontend", link:"https://developer.mozilla.org/en-US/docs/Web/CSS"
        },
        {
            image: "../images/gallery/git.png", keys: "backend", link:"https://git-scm.com/"
        },
    ];
    return (
        <section id="portfolios" className="section-padding">
            <div className="container">
                <h2 className="section-title wow flipInX">My Remarkable Works</h2>
                <div className="row">
                    <div className="col-md-12">
                        <div className="controls text-center">
                            {
                                filters.map((filter, index) => (
                                    <a key={index} className={ index === 0 ? "filter btn btn-common active" : "filter btn btn-common"} data-filter={filter.key}>{filter.label}</a>
                                ))
                            }
                        </div>
                    </div>
                    <div id="portfolio" className="row">
                        {cards.map((card, index) => (
                            <PortfolioCard key={index} image={card.image} link={card.link} keys={card.keys} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;