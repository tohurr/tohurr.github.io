import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading, Divider } from "@chakra-ui/react"; 
import Card from "./Card"; 
 
//not using images under projects atm
const projects = [ 
 { 
   title: "React Calculator", 
   description: 
     "A simple calculator built using React. It can perform the four basic mathematical operations: addition, subtraction, multiplication, and division.", 
   getImageSrc: () => require("../images/photo1.jpg"),
   url: "https://tohurr.github.io/react-calculator-app2/",
 }, 
 { 
   title: "Lucky Shrub", 
   description: 
     "Lucky Shrub is a medium-sized garden design firm that specializes in garden design and creation, maintenance, and landscaping.", 
   getImageSrc: () => require("../images/photo2.jpg"), 
   url: "https://tohurr.github.io/luckyshrub/",
 }, 
 { 
   title: "Blood Bank", 
   description: 
     "Blood Bank provides blood products to hospitals – and relies on volunteer donors to meet the need for life-saving gifts of blood. We provide high-quality laboratory services to local hospitals.", 
   getImageSrc: () => require("../images/photo3.jpg"),
   url: "https://tohurr.github.io/blood-blank-system/" 
 }, 
 { 
   title: "Figma Prototype", 
   description: 
     'An interactive, high-fidelity visual design prototype created in Figma for the "reserve a table" feature of the mobile version of the Little Lemon restaurant website.', 
   getImageSrc: () => require("../images/photo4.jpg"),
   url: "https://www.figma.com/file/PSVsK7q4ZCWInAWUK3OMa2/Prototype---UX%2FUI?node-id=0%3A1&t=RWBSxG5O2Oxouv4F-3", 
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
   > 
      <Divider borderColor="#0C243C" />
     <Heading as="h1" id="projects-section" color="#0C243C"> 
       Featured Projects 
     </Heading> 
     <Box 
       display="grid" 
       gridTemplateColumns="repeat(3,minmax(0,1fr))" 
       gridGap={8}
     > 
       {projects.map((project) => ( 
         <Card 
           key={project.title} 
           title={project.title} 
           description={project.description} 
           url={project.url}
           imageSrc={project.getImageSrc()} 
         /> 
       ))} 
     </Box> 
   </FullScreenSection> 
 ); 
}; 
 
export default ProjectsSection;