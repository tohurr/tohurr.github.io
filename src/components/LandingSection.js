import React from "react";
import { Avatar, Heading, VStack, Divider, HStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Styles.css';

// const greeting = "Hello! I'm Tohur.";
// const bio1 = "Welcome to my website!";
// const bio2 = "Version 2 is launching soon—stay tuned!";
const socials = [
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/tohur-rahman/",
  },
  {
    icon: faGithub,
    url: "https://github.com/tohurr",
  },
];

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#FAFAFA"
    id="landing-section"
    className="landing-section"
  >
    <VStack spacing={16} align="center" textAlign="center">
      {/* <VStack spacing={4} alignItems="center">  */}
      {/* <Avatar
        //  src=""
         size="2xl"
         name="Tohur Rahman"
       />  */}
      <Heading as="h1" size="3xl" noOfLines={0} color="#050505">
        Hello! I'm Tohur.
      </Heading>
      <Heading as="h2" size="xl" noOfLines={0} color="#464FEB">
        Welcome to my website!<br />
        A brand-new version is launching soon—stay tuned!
      </Heading>
      <HStack spacing={8} className="landing-icon">
        {socials.map(({ icon, url }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={icon} size="2x" key={url} className="icons" />
          </a>
        ))}
      </HStack>
    </VStack>
  </FullScreenSection >
);

export default LandingSection;