import React from 'react';
import { Box, Text, VStack, Button,Image } from '@chakra-ui/react';
import ParallexSection from './ParallexSection';
import img1 from "./Images/bg.png";
import img2 from "./Images/bg2.png";
import RotatingText from './RotatingText';
import img3 from "./Images/Kush-removebg-preview.png"
import img4 from "./Images/Html.png";
import img5 from "./Images/Css.png";
import img6 from "./Images/JS.png";
import img7 from "./Images/Chakra.png";
import img8 from "./Images/DotNet.png";

const Parallex = () => {
  return (
    <Box>
      
      <ParallexSection backgroundImage={img1}>
      <Box display={'flex'}>
        <VStack spacing={6} alignItems="start" pl={8} display="flex">
          <Text fontSize="45px" color="red" fontFamily="inherit" fontWeight="700">HELLO!</Text>
          <Box display="flex" alignItems="center">
            <Text fontSize="45px" color="white" fontFamily="inherit" fontWeight="600">I Am</Text>
            <Box ml={2}>
              <RotatingText fontWeight="700" words={["Kushagra Bhardwaj", "Web Developer"]} period={1000} />
            </Box>
          </Box>
         
          <Box width="60%" textAlign="justify">
            <Text fontSize="16px" color="white" fontFamily="Poppins, sans-serif">
              I'm a Web Developer with extensive experience for over 5 years. My expertise is to create and design websites, graphic design, and many more...
            </Text>
          </Box>
          <Box width="60%" textAlign="center">
            <Button borderRadius="22px" margin="25px" bgColor="#F95353" w="7vw" fontFamily="Poppins, sans-serif" color="white">
              View Work
            </Button>
            <Button borderRadius="22px" bgColor="#F95353" w="7vw" fontFamily="Poppins, sans-serif" color="white">
              Hire Me
            </Button>
          </Box>
        
        </VStack>
        <Box border="1px solid #F95353" w="21vw" h="40vh" borderRadius="50%" overflow="hidden">
  <Image src={img3} alt="Description of image" borderRadius="50%" w="100%" h="115%" objectFit="contain" ml={'14px'}/>
</Box>


        </Box>
      </ParallexSection>

      <Box height="44vh" bg="black" opacity="0.9"  alignItems="center" justifyContent="center">
        {/* <Box border="1px solid black" h="38vh" w="32vw" display="flex" alignItems="center" justifyContent="center">
          wd
        </Box>
        <Box border="1px solid black" h="38vh" w="32vw" display="flex" alignItems="center" justifyContent="center">
          <Text color="#222">
            I Am Modern <Text color="#F95353" as="span">Web Developer</Text>
          </Text>
        </Box> */}
        <Text fontSize={'49px'} color={'red'} fontStyle={'bold'} fontWeight={'550'} fontFamily={'Arial'} textAlign={'center'}>
          Skills
        </Text>
        <Box display="flex" justifyContent="center" alignItems="center" width="100%">
  <Box m={'52px'}>
    <Image src={img4} h="5rem" />
    <Text color={'gray'} textAlign={'center'} fontSize={'22px'}> HTML5</Text>
  </Box>
  <Box m={'52px'}>
    <Image src={img5} h="5rem" />
    <Text color={'gray'} textAlign={'center'} fontSize={'22px'}> CSS</Text>
  </Box>
  <Box m={'52px'}>
    <Image src={img6} h="5rem" />
    <Text color={'gray'} textAlign={'center'} fontSize={'22px'}> JavaScript</Text>
  </Box>
  <Box m={'52px'}>
    <Image src={img7} h="5rem" />
    <Text color={'gray'} textAlign={'center'} fontSize={'22px'}> ChakraUI</Text>
  </Box>
  <Box m={'52px'}>
    <Image src={img8} h="5rem" />
    <Text color={'gray'} textAlign={'center'} fontSize={'22px'}>ASP.NET(MVC)</Text>
  </Box>
</Box>
      </Box>

      <ParallexSection backgroundImage={img2}>
        <Text fontSize="4xl" textAlign="center" color="white">Another Parallax Section</Text>
      </ParallexSection>

      <Box height="100vh" bg="black" opacity="0.3" display="flex" alignItems="center" justifyContent="center">
        <Text fontSize="3xl" textAlign="center" color="white">More Regular Content</Text>
      </Box>
    </Box>
  );
};

export default Parallex;
