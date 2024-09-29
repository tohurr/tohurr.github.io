import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, Image, Text } from "@chakra-ui/react";
import './Styles.css';
// import photo from '../assets/profile.jpeg'

const Aboutme = () => {
    return (
        <FullScreenSection
            backgroundColor="#FAFAFA"
            // p={16}
            spacing={8}
            alignItems="flex-start"
            id="aboutme-section"
            className="aboutme-section"
        >
            <Heading as="h1" color="#050505" className="border">
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
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    {/* <div>Here are a few technologies I'm working with:
                        <ul className="languages">
                            <li>React.js</li>
                            <li>Next.js</li>
                            <li>JavaScript (ES6+)</li>
                            <li>HTML & CSS</li>
                            <li>Python</li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </FullScreenSection>
    )

}

export default Aboutme;
