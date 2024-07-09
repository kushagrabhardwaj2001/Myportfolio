import React from 'react';
import { Box, SimpleGrid , Center,Text} from '@chakra-ui/react';

// Data for the contributions, 0 means no contribution, 1-4 indicate the intensity of contributions
const contributions = [
  [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
  [1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
];

const colors = ['#FFFFFF    ', '#9AE6B4', '#68D391', '#48BB78', '#38A169'];

const ContributionGraph = ()     => {
  return (
    
    <Center height="100vh" mt={'-16%'}>
        
    <Box w={'35vw'} >
    <Box display={'flex'} >

<Text color={'white'} fontSize={'22px'} m={'11px'}>
  July
</Text>
<Text color={'white'} fontSize={'22px'} m={'11px'}>
  Aug
</Text>
<Text color={'white'} fontSize={'22px'} m={'11px'}>
  Sep
</Text>
<Text color={'white'} fontSize={'22px'} m={'11px'}>
  Nov
</Text>
<Text color={'white'} fontSize={'22px'} m={'11px'}>
  Des
</Text>
<Text color={'white'} fontSize={'22px'} m={'11px'}>
  Jan
</Text>
<Text color={'white'} fontSize={'22px'} m={'11px'}>
  Feb
</Text>
<Text color={'white'} fontSize={'22px'} m={'11px'}>
  Mar
</Text>
<Text color={'white'} fontSize={'22px'} m={'11px'}>
  May
</Text>
<Text color={'white'} fontSize={'22px'} m={'9px'}>
  Jun
</Text>
</Box>
      <SimpleGrid columns={25} spacing={1}>
        {contributions.flat().map((day, index) => (
          <Box
            key={index}
            w="10px"
            h="10px"
            bg={colors[day]}
            m={0.5}
          />
        ))}
      </SimpleGrid>
      <Text color={'white'} fontSize={'15px'} m={'11px'} textAlign={'right'}>
  78 Contribution in this year
</Text>
    </Box>
    </Center>
  );
};

export default ContributionGraph;
