import { Heading, HStack, Image, Text, VStack, CardBody } from "@chakra-ui/react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
import React from "react"; 
 
const Card = ({ title, description, imageSrc, url }) => { 
   return ( 
    <a 
      key={url} 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      >
     <VStack 
       color="black" 
       backgroundColor="white" 
       cursor="pointer"
       borderRadius="xl"
      //  boxShadow='lg'
      _hover={{color: "#0000FF",}}
      > 
       {/* <Image borderRadius="xl" src={imageSrc} alt={title} boxSize='sm' objectFit='cover'/>  */}
       <VStack spacing={4} p={4} alignItems="flex-start" >
         <HStack justifyContent="space-between" alignItems="center" > 
           <Heading as="h3" size="md" color="black"> 
             {title} 
           </Heading> 
         </HStack> 
         <Text color="#64748b" fontSize="lg" > 
           {description}
         </Text> 
         <HStack spacing={2} alignItems="center" > 
            <p>See more</p> <FontAwesomeIcon icon={faArrowRight} size="1x" /> 
         </HStack> 
       </VStack> 
     </VStack> 
    </a>
   ); 
}; 
 
export default Card; 