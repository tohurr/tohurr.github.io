import React, { useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import {
//   faGithub,
//   faLinkedin,
//   faStackOverflow,
// } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Text } from "@chakra-ui/react";
import './Styles.css'


// const socials = [
//  {
//    icon: faLinkedin,
//    url: "https://www.linkedin.com/in/tohur-rahman/",
//  },
//  {
//   icon: faGithub,
//   url: "https://github.com/tohurr",
//  },
// ];

/**
* This component illustrates the use of both the useRef hook and useEffect hook.
* The useRef hook is used to create a reference to a DOM element, in order to tweak the header styles and run a transition animation.
* The useEffect hook is used to perform a subscription when the component is mounted and to unsubscribe when the component is unmounted.
* Additionally, it showcases a neat implementation to smoothly navigate to different sections of the page when clicking on the header elements.
*/
const Header = () => {
  const headerRef = useRef(null);

  //  useEffect(() => {
  //    let prevScrollPos = window.scrollY;

  //    const handleScroll = () => {
  //      const currentScrollPos = window.scrollY;
  //      const headerElement = headerRef.current;
  //      if (!headerElement) {
  //        return;
  //      }
  //      if (prevScrollPos > currentScrollPos) {
  //        headerElement.style.transform = "translateY(0)";
  //      } else {
  //        headerElement.style.transform = "translateY(-200px)";
  //      }
  //      prevScrollPos = currentScrollPos;
  //    }
  //    window.addEventListener('scroll', handleScroll)

  //    return () => {
  //      window.removeEventListener('scroll', handleScroll)
  //    }
  //  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#0D0D0D"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          className="navbox"
        >
          {/* <nav>
           <HStack spacing={8} >
             {socials.map(({ icon, url }) => (
               <a
                 key={url}
                 href={url}
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <FontAwesomeIcon icon={icon} size="2x" key={url} className="nav"/>
               </a>
             ))}
           </HStack>
         </nav> */}
          <nav>
            <HStack spacing={8} >
              <a
                //  target="_blank"
                rel="noopener noreferrer"
                href="https://tohurr.github.io/"
                className="nav-logo"
              >
                <img src="/logo2.png" alt="image" />
              </a>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8} className="navhome">
              <a href="#home" onClick={handleClick("landing")} style={{ fontWeight: "bold" }} className="nav">
                Home
              </a>
              <a href="#about-me" onClick={handleClick("aboutme")} style={{ fontWeight: "bold" }} className="nav">
                About
              </a>
              <a href="#projects" onClick={handleClick("projects")} style={{ fontWeight: "bold" }} className="nav">
                Projects
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;