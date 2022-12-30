import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Heading, VStack, Avatar, Box, Image, HStack, Text } from "@chakra-ui/react";
import './Styles.css'; 
import photo from '../images/profile2.jpg'
import resume from '../images/cs-resume.pdf'

const Aboutme = () => {
    return (
        <FullScreenSection
            backgroundColor="#F8F8FF"
            p={16}
            spacing={8}
            alignItems="flex-start"
            id="aboutme-section"
        >
        
        <Heading as="h1" color="#0C243C" className="border"> 
            About me
        </Heading>
        <div className="aboutgrid">
            <div className="abouttext">
                <p >
                Hello there! My name is Tohur. 
                I am a recent college graduate with a <a target="_blank" rel="noopener noreferrer" className="link" href="https://www.parchment.com/u/award/558bf9d435306db8d96ca8ac48fe8abd">bachelor's degree</a> in computer science. 
                Ever since I learned web programming, I became fascinated by how I could design websites and web applications with code.
                I am very meticulous about creating quality and attractive products for users.
                </p>
                <p>
                After college, I enrolled in the <a href="https://www.coursera.org/professional-certificates/meta-front-end-developer" target="_blank" rel="noopener noreferrer" className="link">Meta front-end developer course </a> 
                to build on my knowledge in front-end development. 
                </p>
                <p>Here are a few technologies I'm working with:
                <ul className="languages">
                    <li>React</li>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML and CSS</li>
                    <li>Python</li>
                </ul>
                </p>
            </div>
            <div>
                <Image src={photo} alt='Tohur' borderRadius="xl" className="image" />
            </div>
        </div>
        <a className="resume" href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </FullScreenSection>
    )

}

export default Aboutme;
