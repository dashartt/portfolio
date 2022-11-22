import { Badge, Box, HStack, IconButton, Image, Link, Text } from '@chakra-ui/react';
import { BiLink, BiNavigation } from 'react-icons/bi';

export default function ProjectCard() {
  return (
    <Box bg="white" maxW="200px" padding="10px" margin="0 auto">
      <HStack justifyContent="space-between">
        <Link href="#">Repo</Link>
        <Link href="#">Go to</Link>
      </HStack>
      <Image src="" alt="projeto#1" fallbackSrc="https://via.placeholder.com/150" />
      <Text>Title project#1</Text>
      <Badge colorScheme="orange">React</Badge>
      <Badge colorScheme="blue">Express</Badge>
    </Box>
  );
}
