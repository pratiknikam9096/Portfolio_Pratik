import React from 'react'
import portfolioweb from '../assets/portfolio.png'
import alien_invasion from '../assets/alien_invasion.jpg'
import frisbee from '../assets/frisbee.jpeg'
import auctionate1 from '../assets/TextPro.png'
import falcon from '../assets/falcon.jpeg'
import wiki from '../assets/wiki.jpeg'

const Projects = () => {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="container projects__container">
                <article className="projects__item hover">
                    <div className="projects-img">
                        <img src={portfolioweb} alt="project image" />
                    </div>
                    <h3>Portfolio Website</h3>
                    <a href="https://github.com/nikampratik9096" className="btn" target="_blank">Github</a>
                </article>
                <article className="projects__item">
                    <div className="projects-img">
                        <img src={auctionate1} alt="project image" />
                    </div>
                    <h3>TextPro Editor</h3>
                    <a href="https://github.com/nikampratik9096/TextPro-Editor" className="btn" target="_blank">Github</a>
                </article>
                <article className="projects__item">
                    <div className="projects-img">
                        <img src={falcon} alt="project image" />
                    </div>
                    <h3>Twitter Clone </h3>
                    <a href="https://github.com/nikampratik9096/Twitterclone" className="btn" target="_blank">Github</a>
                </article>
                <article className="projects__item">
                    <div className="projects-img">
                        <img src={wiki} alt="project image" />
                    </div>
                    <h3>Tourly-Travel-Planner</h3>
                    <a href="https://github.com/nikampratik9096/Tourly-Travel-Planner" className="btn" target="_blank">Github</a>
                </article>
            </div>
            <div className="more">
                <a href="https://github.com/nikampratik9096?tab=repositories" target="_blank" className="btn btn-primary center">See More</a>
            </div>
        </section>
    )
}

export default Projects