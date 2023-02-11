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
    url: "https://tohurr.github.io/reserve-table/",
  },

 {
   title: "React Calculator",
   description:
     "A simple calculator built using React. It can perform the four basic mathematical operations: addition, subtraction, multiplication, and division.", 
  //  getImageSrc: () => require("../images/photo1.jpg"),
   url: "https://tohurr.github.io/react-calculator-app2/",
 },
 {
   title: "Lucky Shrub",
   description:
     "Lucky Shrub is a medium-sized garden design firm that specializes in garden design and creation, maintenance, and landscaping.", 
  //  getImageSrc: () => require("../images/photo2.jpg"),
   url: "https://tohurr.github.io/luckyshrub/",
 }, 
 { 
   title: "Blood Bank", 
   description: 
     "Blood Bank provides blood products to hospitals – and relies on volunteer donors to meet the need for life-saving gifts of blood.", 
  //  getImageSrc: () => require("../images/photo3.jpg"),
   url: "https://tohurr.github.io/blood-blank-system/" 
 }, 
 {
   title: "Reserve a Table Prototype",
   description:
     'An interactive, high-fidelity visual design prototype created in Figma for the "reserve a table" feature of the mobile version of the Little Lemon restaurant website.', 
  //  getImageSrc: () => require("../images/photo4.jpg"),
   url: "https://www.figma.com/proto/PSVsK7q4ZCWInAWUK3OMa2/Prototype---UX%2FUI?node-id=335%3A180&scaling=scale-down&page-id=0%3A1&starting-point-node-id=335%3A180", 
 },

];

const ProjectsSection = () => { 
 return (
   <FullScreenSection 
     backgroundColor="#F8F8FF"
     isDarkBackground 
     p={8} 
     alignItems="flex-start" 
     spacing={8} 
     id="projects-section"
   > 
     <Heading as="h1" color="#0C243C" className="border"> 
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