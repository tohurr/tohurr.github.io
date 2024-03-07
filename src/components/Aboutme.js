import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, Image, Text } from "@chakra-ui/react";
import './Styles.css';
import photo from '../assets/profile2.jpeg'
// import resume from '../assets/cs-resume.pdf'

const Aboutme = () => {
    return (
        <FullScreenSection
            backgroundColor="white"
            // p={16}
            spacing={8}
            alignItems="flex-start"
            id="aboutme-section"
            className="aboutme-section"
        >
        <Heading as="h1" color="#1A1D20" className="border">
            About Me
        </Heading>
        <div className="aboutgrid">
            <div className="abouttext">
                <p >
                Hi there! My name is Tohur Rahman.
                I am a recent graduate with a <a target="_blank" rel="noopener noreferrer" className="link" href="https://www.parchment.com/u/award/558bf9d435306db8d96ca8ac48fe8abd">Bachelor of Science</a> in Computer Science.
                Ever since I learned web programming, I became fascinated by how I could design websites with code.
                I am very meticulous about creating quality and attractive products.
                After college, I enrolled in the <a href="https://coursera.org/share/e2cc9f205b466083c97983eca6175b19" target="_blank" rel="noopener noreferrer" className="link">Meta Front-End Developer </a>
                course to build on my knowledge of front-end development.
                </p>
                <p>
                Additionally, I consistently strive to learn more about web development, create new projects, and pick up new programming languages.
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
        {/* <a className="resume" href={resume} target="_blank" rel="noopener noreferrer">Resume</a> */}
        {/* <p className="email-me">Email: <a href="mailto: tohur.biz@gmail.com" target="_blank" rel="noopener noreferrer">tohur.biz@gmail.com</a></p> */}
        </FullScreenSection>
    )

}

export default Aboutme;
