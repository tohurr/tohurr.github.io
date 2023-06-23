import React from "react";
import {Box, Flex,} from "@chakra-ui/react";

const Footer = () => {
 return (
   <Box backgroundColor="#1A1D20">
     <footer>
       <Flex
         margin="0 auto"
         px={12}
         color="#656D78"
         justifyContent="center"
         alignItems="center"
         maxWidth="1024px"
         height={16}
       >
         <p>© 2023 Tohur. All Rights Reserved.</p>
       </Flex>
     </footer>
   </Box>
 );
};

export default Footer;