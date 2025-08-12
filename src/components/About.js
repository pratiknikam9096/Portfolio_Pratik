import React from 'react'

const About = () => {
    return (
        <section id="about">
            <div className="container about-main">
                <div className="about__container">
                    <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" className="about-img" alt="Professional developer workspace" />
                </div>
                <div className="about-content">
                    <h2>About Me</h2>
                    <div className="about-intro">
                        <p className="greeting">Hello! I'm <span className="highlight-name">Pratik Nikam</span> 👋</p>
                        <p className="role-description">A passionate <span className="highlight">Full Stack Developer</span> and <span className="highlight">Competitive Programming Enthusiast</span> based in India, dedicated to crafting exceptional digital experiences.</p>
                    </div>
                    
                    <div className="about-details">
                        <div className="detail-card">
                            <div className="card-icon">🏆</div>
                            <div className="card-content">
                                <h4>Competitive Excellence</h4>
                                <p>Achieved <strong>3⭐ rating on GeeksforGeeks</strong> and <strong>1700+ contest rating</strong>. I thrive on solving complex algorithmic challenges and continuously push my problem-solving boundaries.</p>
                            </div>
                        </div>
                        
                        <div className="detail-card">
                            <div className="card-icon">💻</div>
                            <div className="card-content">
                                <h4>Full Stack Mastery</h4>
                                <p>Proficient in modern web technologies including <strong>React, Node.js, MongoDB, and Express</strong>. I create scalable, user-centric applications that bridge the gap between design and functionality.</p>
                            </div>
                        </div>
                        
                        <div className="detail-card">
                            <div className="card-icon">🚀</div>
                            <div className="card-content">
                                <h4>Innovation & Growth</h4>
                                <p>Fascinated by <strong>AI/ML technologies</strong> and emerging trends. I believe in continuous learning and staying ahead of the curve in this ever-evolving tech landscape.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="about-philosophy">
                        <blockquote>
                            "Code is poetry written in logic. Every line tells a story, every function solves a problem, and every project brings ideas to life."
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
