import { Heading, HStack, Image, Text, VStack, Stack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './Styles.css';

//not using images
const Card = ({ title, description, imageSrc, url }) => {
  return (

    <VStack
      color="#333333"
      backgroundColor="#FAFAFA"
      cursor="pointer"
      borderRadius="xl"
      boxShadow='md'
      className="cards"
    >
      <a
        key={url}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <Image borderRadius="xl" src={imageSrc} alt={title} boxSize='sm' objectFit='cover'/>  */}
        <VStack spacing={4} p={3} alignItems="flex-start">
          <HStack justifyContent="space-between" alignItems="center" >
            <Heading as="h3" size="md">
              {title} <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </Heading>
          </HStack>
          <Text color="#333333" fontSize="lg" >
            {description}
          </Text>
          {/* <HStack spacing={2} alignItems="center" >
            <p>See more</p> <FontAwesomeIcon icon={faArrowRight} size="1x" />
         </HStack>  */}
        </VStack>
      </a>
    </VStack>
  );
};
export default Card;