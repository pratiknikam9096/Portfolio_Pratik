import React from 'react'
import portfolioweb from '../assets/portfolio.png'
import auctionate1 from '../assets/TextPro.png'
import falcon from '../assets/falcon.jpeg'

const Projects = () => {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="container projects__container">
                <article className="projects__item featured-project">
                    <div className="projects-img">
                        <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" alt="CollabCraft project" />
                    </div>
                    <h3>CollabCraft</h3>
                    <p className="project-description">Real-time collaborative platform for seamless teamwork and project management</p>
                    <div className="project-links">
                        <a href="https://github.com/pratiknikam9096/CollabCraft" className="btn" target="_blank" rel="noopener noreferrer">Github</a>
                        <a href="https://collabcraft-cbqu.onrender.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className="projects__item hover">
                    <div className="projects-img">
                        <img src={portfolioweb} alt="project image" />
                    </div>
                    <h3>Portfolio Website</h3>
                    <p className="project-description">Personal portfolio showcasing skills and projects with modern design</p>
                    <div className="project-links">
                        <a href="https://github.com/nikampratik9096" className="btn" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </article>
                <article className="projects__item">
                    <div className="projects-img">
                        <img src={auctionate1} alt="project image" />
                    </div>
                    <h3>TextPro Editor</h3>
                    <p className="project-description">Advanced text editor with rich formatting and collaboration features</p>
                    <div className="project-links">
                        <a href="https://github.com/nikampratik9096/TextPro-Editor" className="btn" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </article>
                <article className="projects__item">
                    <div className="projects-img">
                        <img src={falcon} alt="project image" />
                    </div>
                    <h3>Twitter Clone </h3>
                    <p className="project-description">Full-featured social media platform with real-time updates and interactions</p>
                    <div className="project-links">
                        <a href="https://github.com/nikampratik9096/Twitterclone" className="btn" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </article>
            </div>
            <div className="more">
                <a href="https://github.com/nikampratik9096?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn btn-primary center">See More</a>
            </div>
        </section>
    )
}

export default Projects