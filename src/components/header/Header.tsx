import { Box, HStack, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import signature from '../../../assets/signature-w.png';

export default function Header() {
  return (
    <Box position="sticky" top={0} backgroundColor="black" width="full">
      <HStack
        margin="auto"
        justifyContent="space-between"
        width={{ sm: '60vw', lg: '30vw' }}
        padding={2}
      >
        <Image width="5em" src={signature} alt="logo do portfolio" borderRightWidth={1} />

        <Text fontSize="2xl" color="white">
          <Link to="/">Home</Link>
        </Text>
        <Text fontSize="2xl" color="white">
          <Link to="/projects">Projects</Link>
        </Text>
        {/* <Text borderBottom="1px solid white" color="white">
        <Link to="/about-me">About</Link>
      </Text> */}
      </HStack>
    </Box>
  );
}
