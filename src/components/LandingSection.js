import React from "react";
import { Avatar, Heading, VStack, Divider } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import './Styles.css';
//#034694

const greeting = "Hello, my name is Tohur.";
const bio1 = "Welcome to my website.";
// const bio2 = "specialized in React";

const LandingSection = () => (
 <FullScreenSection
   justifyContent="center"
   alignItems="center"
   isDarkBackground
   backgroundColor="#E9F1FA"
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

       <Heading as="h1" size="3xl" noOfLines={0} color="#1A1D20">
         {greeting}
         {/* Hello, my name is Tohur Rahman. */}
       </Heading>
     {/* </VStack>  */}
     {/* <VStack spacing={5} >  */}
       <Heading as="h2" size="xl" noOfLines={0} color="darkblue">
         {bio1}
       </Heading>
       {/* <Heading as="h1" size="3xl" noOfLines={1}>
         {bio2}
       </Heading>  */}
     {/* </VStack>  */}
   </VStack>
 </FullScreenSection >
);

export default LandingSection;