import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, Image, Text } from "@chakra-ui/react";
import './Styles.css';
import photo from '../assets/profile.jpg'
import resume from '../assets/cs-resume.pdf'

const Aboutme = () => {
    return (
        <FullScreenSection
            backgroundColor="#F8F8FF"
            // p={16}
            spacing={8}
            alignItems="flex-start"
            id="aboutme-section"
            className="aboutme-section"
        >
        <Heading as="h1" color="#0C243C" className="border">
            About me
        </Heading>
        <div className="aboutgrid">
            <div className="abouttext">
                <p >
                Hello there! My name is Tohur.
                I am a recent college graduate with a <a target="_blank" rel="noopener noreferrer" className="link" href="https://www.parchment.com/u/award/558bf9d435306db8d96ca8ac48fe8abd">Bachelor of Science</a> in Computer Science.
                Ever since I learned web programming, I became fascinated by how I could design websites with code.
                I am very meticulous about creating quality and attractive products for users.
                After college, I enrolled in the <a href="https://www.coursera.org/professional-certificates/meta-front-end-developer" target="_blank" rel="noopener noreferrer" className="link">Meta Front-End Developer </a>
                course to build on my knowledge of front-end development.
                </p>
                <p>
                Additionally, I consistently strive to learn more about websites, and web-based applications, create new projects, and pick up new programming languages to further increase my knowledge in the field. I want to continually be creative in my approach to developing and delivering content that would be compelling and effective.
                </p>
                <p>Here are a few technologies I'm working with:
                <ul className="languages">
                    <li>React.js</li>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML and CSS</li>
                    <li>Python</li>
                </ul>
                </p>
            </div>
            <div>
                <Image src={photo} alt='Tohur' borderRadius="md" className="image" />
            </div>
        </div>
        <a className="resume" href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
        {/* <p className="email-me">Email: <a href="mailto: tohur.biz@gmail.com" target="_blank" rel="noopener noreferrer">tohur.biz@gmail.com</a></p> */}
        </FullScreenSection>
    )

}

export default Aboutme;
