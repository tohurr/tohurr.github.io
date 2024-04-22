import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, Image, Text } from "@chakra-ui/react";
import './Styles.css';
import photo from '../assets/profile.jpeg'

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
                <p>
                Hi there!
                </p>
                <p>
                I'm Tohur Rahman, a Computer Science graduate driven by a passion for web design.
                With a keen eye for detail and a dedication to quality, I strive to create visually appealing designs that grab people's attention.
                I have also completed the <a href="https://coursera.org/share/e2cc9f205b466083c97983eca6175b19" target="_blank" rel="noopener noreferrer" className="link">Meta Front-End Developer </a>
                course which has deepened my expertise in front-end development, furthering my ability to bring innovative ideas to life. Committed to continuous learning, I stay updated with the latest industry trends, embracing adaptability and a growth mindset.
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
                <Image src={photo} alt='Tohur' borderRadius="full" objectFit='cover' boxSize='300px' className="image" />
            </div>
        </div>
        {/* <p className="email-me">Email: <a href="mailto: tohur.biz@gmail.com" target="_blank" rel="noopener noreferrer">tohur.biz@gmail.com</a></p> */}
        </FullScreenSection>
    )

}

export default Aboutme;
