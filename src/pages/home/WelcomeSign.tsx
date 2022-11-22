import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import signature from '../../assets/signature-w.png';

export default function WelcomeSign() {
  return (
    <Box border="10px solid white" padding="5% 10%">
      <Image src={signature} />
      <Heading as="h1" fontSize="1.5em" textAlign="center" color="white">
        portfolio
      </Heading>
      <VStack marginTop="2em">
        <Text
          color="black"
          backgroundColor="white"
          padding="10px 20px"
          width="100px"
          textAlign="center"
        >
          <Link to="/projects">Projects</Link>
        </Text>
        <Text
          color="black"
          backgroundColor="white"
          padding="10px 20px"
          width="100px"
          textAlign="center"
        >
          <Link to="/about-me">About</Link>
        </Text>
      </VStack>
    </Box>
  );
}
