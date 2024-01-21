import React from "react";
// import {Box, Flex,} from "@chakra-ui/react";

const Footer = () => {
 return (
  //  <Box backgroundColor="#1A1D20">
     <footer>
       {/* <Flex
         margin="0 auto"
         px={12}
         color="white"
         justifyContent="center"
         alignItems="center"
         maxWidth="1024px"
         height={16}
       > */}
       <ul>
            <h1>Socials</h1>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/tohurr">GitHub</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tohur-rahman/">LinkedIn</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://discord.gg/9zjYkHFJ">Discord</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="mailto: tohur.biz@gmail.com">tohur.biz@gmail.com</a></li>
        </ul>
         <p>© 2024 Tohur. All Rights Reserved.</p>
       {/* </Flex> */}
     </footer>
  //  </Box>
 );
};

export default Footer;