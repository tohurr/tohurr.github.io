import React from "react";
import { Box, Flex, } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#0D0D0D">
      <footer>
        <div className="footer_logo">
          <a href="https://tohurr.github.io/" rel="noopener noreferrer">
            <img src="/logo.png" alt="image" />
          </a>
        </div>
        <Flex
          //  margin="0 auto"
          //  px={12}
          //  color="white"
          justifyContent="center"
          alignItems="center"
        //  maxWidth="1024px"
        //  height={16}
        >
          <ul>
            <h1>Get In Touch</h1>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tohur-rahman/">LinkedIn</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/tohurr">GitHub</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://discord.gg/DWhhXT3yaz">Discord</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://linktr.ee/tohur_">My Linktree</a></li>
            <p>© 2024 Tohur. All Rights Reserved.</p>
          </ul>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;