import React from "react"; 
import { Avatar, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
 
const greeting = "Hello, I am Tohur!"; 
const bio1 = "A Frontend Developer"; 
// const bio2 = "specialized in React"; 
 
const LandingSection = () => ( 
 <FullScreenSection 
   justifyContent="center" 
   alignItems="center" 
   isDarkBackground 
   backgroundColor="#C0D7FB" 
   //"#2A4365" 
 > 
   <VStack spacing={16}> 
     <VStack spacing={4} alignItems="center"> 
       <Avatar 
        //  src="" 
         size="2xl" 
         name="Tohur Rahman" 
       /> 
       <Heading as="h4" size="md" noOfLines={1} color="#0C243C"> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={6}> 
       <Heading as="h1" size="3xl" noOfLines={1} color="#0C243C"> 
         {bio1} 
       </Heading> 
       {/* <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio2} 
       </Heading>  */}
     </VStack> 
   </VStack> 
 </FullScreenSection> 
); 
 
export default LandingSection;