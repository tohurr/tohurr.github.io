import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, } from "@chakra-ui/react";
import Card from "./Card";
import './Styles.css';

//not using images under projects atm
const projects = [
  {
    title: "Little Lemon Restaurant (under construction)",
    description:
      'Come book your table at the Little Lemon restaurant website.',
    url: "https://tohurr.github.io/little-lemon/",
  },
  {
    title: "Blood Bank",
    description:
      "Blood Bank provides blood products to hospitals and relies on volunteer donors to meet the need for life-saving gifts of blood.",
   //  getImageSrc: () => require("../images/photo3.jpg"),
    url: "https://tohurr.github.io/blood-blank-system/"
  },
  {
    title: "Lucky Shrub",
    description:
      "Lucky Shrub is a garden design firm that specializes in garden creation, maintenance, and landscaping. Built using HTML and CSS.",
   //  getImageSrc: () => require("../images/photo2.jpg"),
    url: "https://tohurr.github.io/luckyshrub/",
  },
 {
   title: "React Calculator",
   description:
     "A calculator built using React that can perform arithmetic operations on numbers. It can calculate the functions such as addition, subtraction, multiplication, and division.",
  //  getImageSrc: () => require("../images/photo1.jpg"),
   url: "https://tohurr.github.io/react-calculator-app2/",
 },
 {
   title: "Mobile Prototype",
   description:
     "An interactive, high-fidelity visual design prototype created in Figma to reserve a table on the restaurant's website.",
  //  getImageSrc: () => require("../images/photo4.jpg"),
   url: "https://www.figma.com/file/PSVsK7q4ZCWInAWUK3OMa2/Prototype---UX%2FUI?node-id=0%3A1&t=Kt8F7x1YDDW3nWqV-1",
 },

];

const ProjectsSection = () => {
 return (
   <FullScreenSection
     backgroundColor="#E0EAFC"
     isDarkBackground
    //  p={8}
     alignItems="flex-start"
     spacing={8}
     id="projects-section"
     className="projects-section"
   >
     <Heading as="h1" color="#1A1D20" className="border">
       Featured Projects
     </Heading>
     <Box
      //  display="grid"
      //  gridTemplateColumns="repeat(3,minmax(0,1fr))"
      //  gridGap={8}
      className="box"
     >
       {projects.map((project) => (
         <Card
           key={project.title}
           title={project.title}
           description={project.description}
           url={project.url}
          //  imageSrc={project.getImageSrc()}
         />
       ))}
     </Box>
   </FullScreenSection>
 );
};

export default ProjectsSection;