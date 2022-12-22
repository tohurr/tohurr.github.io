import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading, Divider } from "@chakra-ui/react"; 
import Card from "./Card"; 
 
const projects = [ 
 { 
   title: "React Calculator", 
   description: 
     "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️", 
   getImageSrc: () => require("../images/photo1.jpg"),
   url: "https://tohurr.github.io/react-calculator-app2/",
 }, 
 { 
   title: "Lucky Shrub", 
   description: 
     "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️", 
   getImageSrc: () => require("../images/photo2.jpg"), 
   url: "https://tohurr.github.io/luckyshrub/",
 }, 
 { 
   title: "Blood Bank(beta)", 
   description: 
     "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income", 
   getImageSrc: () => require("../images/photo3.jpg"), 
 }, 
 { 
   title: "Figma Prototype", 
   description: 
     "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps", 
   getImageSrc: () => require("../images/photo4.jpg"),
   url: "https://www.figma.com/file/PSVsK7q4ZCWInAWUK3OMa2/Prototype---UX%2FUI?node-id=0%3A1&t=RWBSxG5O2Oxouv4F-3", 
 }, 
]; 
 
const ProjectsSection = () => { 
 return ( 
   <FullScreenSection 
     backgroundColor="#C0D7FB"
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
       gridTemplateColumns="repeat(2,minmax(0,1fr))" 
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