import { Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function WelcomeSign() {
  return (
    <VStack spacing="3rem">
      <Heading as="h1" fontSize="3.5em" textAlign="center" color="white">
        Welcome to my portfolio
      </Heading>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        // divider={<Divider orientation="vertical" />}
        gap={10}
        justifyContent="space-between"
        border="10px solid white"
        padding="3rem"
      >
        <Image src="/img/signature-w.png" />
        <Heading as="h1" fontSize="2.5em" width="15rem" color="white">
          {`I'm Web Developer Fullstack`}
        </Heading>
      </Stack>
      <HStack>
        <Text
          _hover={{ backgroundColor: 'gray.200' }}
          as={Link}
          to="/projects"
          color="black"
          fontWeight={'bold'}
          backgroundColor="white"
          padding="10px 20px"
          fontSize="1.2rem"
          textAlign="center"
        >
          Projects
        </Text>
      </HStack>
    </VStack>
  );
}
