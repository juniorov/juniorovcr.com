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
            image: "laravel.png", keys: "backend frameworks", link:"https://laravel.com/"
        },
        {
            image: "wordpress.png", keys: "frontend frameworks", link:"https://wordpress.com/"
        },
        {
            image: "php.png", keys: "backend", link:"https://php.net/"
        },
        {
            image: "html.png", keys: "frontend", link:"https://www.w3schools.com/html/"
        },
        {
            image: "mysql.png", keys: "backend", link:"https://mysql.com/"
        },
        {
            image: "javascript.png", keys: "backend frontend", link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        {
            image: "codeigniter.png", keys: "backend frameworks", link:"https://codeigniter.com/"
        },
        {
            image: "css.png", keys: "frontend", link:"https://developer.mozilla.org/en-US/docs/Web/CSS"
        },
        {
            image: "git.png", keys: "backend", link:"https://git-scm.com/"
        },
    ];
    const handleControl = (e) => {

        if(e.target.localName === 'button') {
            resetFilter();
            const btns = document.querySelectorAll('.controls .filter');
            const cards = document.querySelectorAll('.mix');
            const btnFilter = e.target;
            const filter = btnFilter.dataset.filter;

            for (let btn of btns) {
                btn.classList.remove('active');
            }
            btnFilter.classList.add('active');

            for (let card of cards) {
                if(!card.classList.contains(filter))
                    card.classList.add('d-none');
            }
        }
    };
    const resetFilter = () => {
        const cards = document.querySelectorAll('.mix');

        for(let card of cards){
            card.classList.remove('d-none', 'd-block');
        }
    }

    return (
        <section id="portfolios" className="section-padding">
            <div className="container">
                <h2 className="section-title wow flipInX">My Remarkable Works</h2>
                <div className="row">
                    <div className="col-md-12">
                        <div className="controls text-center" onClick={handleControl}>
                            {
                                filters.map((filter, index) => (
                                    <button key={index} className={ index === 0 ? "filter btn btn-common active" : "filter btn btn-common"} data-filter={filter.key}>{filter.label}</button>
                                ))
                            }
                        </div>
                    </div>
                    <div id="portfolio" className="row wrap-portfolio">
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