import { Box, HStack, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import signature from '../../../public/img/signature-w.png';

export default function Header() {
  return (
    <Box width="full">
      <HStack
        margin="auto"
        justifyContent="space-between"
        width={{ sm: '60vw', lg: '30vw' }}
        padding={2}
      >
        <Image width="5em" src={signature} alt="logo do portfolio" borderRightWidth={1} />

        <HStack gap={4}>
          <Text fontSize="2xl" color="white">
            <Link to="/">Home</Link>
          </Text>
          <Text fontSize="2xl" color="white">
            <Link to="/projects">Projects</Link>
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
}
