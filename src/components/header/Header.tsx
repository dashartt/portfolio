import { HStack, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import signature from '../../assets/signature-w.png';

export default function Header() {
  return (
    <HStack
      width={{ base: '60vw', lg: '30vw' }}
      margin="auto"
      justifyContent="space-between"
    >
      <Image width="5em" src={signature} alt="logo do portfolio" />

      <Text borderBottom="1px solid white" color="white">
        <Link to="/">Home</Link>
      </Text>
      <Text borderBottom="1px solid white" color="white">
        <Link to="/projects">Projects</Link>
      </Text>
      {/* <Text borderBottom="1px solid white" color="white">
        <Link to="/about-me">About</Link>
      </Text> */}
    </HStack>
  );
}
