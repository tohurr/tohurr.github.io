import React from "react";
import { Avatar, Heading, VStack, Divider, HStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Styles.css';

const greeting = "Hello, my name is Tohur.";
const bio1 = "Welcome to my website.";
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
    backgroundColor="#0F172A"
    id="landing-section"
    className="landing-section"
  >
    <VStack spacing={16}>
      {/* <VStack spacing={4} alignItems="center">  */}
      {/* <Avatar
        //  src=""
         size="2xl"
         name="Tohur Rahman"
       />  */}

      <Heading as="h1" size="3xl" noOfLines={0} color="#E0E0E0">
        {greeting}
        {/* Hello, my name is Tohur Rahman. */}
      </Heading>
      {/* </VStack>  */}
      <Heading as="h2" size="xl" noOfLines={0} color="#464FEB">
        {bio1}
      </Heading>
      <HStack spacing={8} >
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