import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, Image, Text } from "@chakra-ui/react";
import './Styles.css';
// import photo from '../assets/profile.jpeg'

const Aboutme = () => {
    return (
        <FullScreenSection
            backgroundColor="#121212"
            // p={16}
            spacing={8}
            alignItems="flex-start"
            id="aboutme-section"
            className="aboutme-section"
        >
        <Heading as="h1" color="#E0E0E0" className="border">
            About Me
        </Heading>
        <div className="aboutgrid">
            <div className="abouttext">
                <p>
                What is Lorem Ipsum?
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
            {/* <div>
                <Image src={photo} alt='Tohur' borderRadius="full" objectFit='cover' boxSize='300px' className="image" />
            </div> */}
        </div>
        {/* <p className="email-me">Email: <a href="mailto: tohur.biz@gmail.com" target="_blank" rel="noopener noreferrer">tohur.biz@gmail.com</a></p> */}
        </FullScreenSection>
    )

}

export default Aboutme;
