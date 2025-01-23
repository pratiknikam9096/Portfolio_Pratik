import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {CgMail} from 'react-icons/cg'

const Contacts = () => {
    return (
        <section id="contact">
            <div className="contact__container">
                <a href="https://www.linkedin.com/in/nikam-p-86576a239/" target="_blank"><AiFillLinkedin /></a>
                <a href="https://github.com/nikampratik9096" target="_blank"><AiOutlineGithub /></a>
                <a href="mailto:nikampratik2989@gmail.com"><CgMail /></a>
            </div>
        </section>
    )
}

export default Contacts