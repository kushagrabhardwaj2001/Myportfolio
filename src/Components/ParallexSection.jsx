import React from 'react';
import { Box } from '@chakra-ui/react';
import './ParallexSection.css'; // Import the custom CSS

const ParallexSection = ({ backgroundImage, children, height = '100vh' }) => {
  return (
    <Box
      className="parallax"
      bgImage={`url(${backgroundImage})`}
      bgPos="center"
      bgSize="cover"
      height={height}
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      textAlign="center"
    >
      {children}
    </Box>
  );
};

export default ParallexSection;
