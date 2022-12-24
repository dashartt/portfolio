import { Badge, Box, Heading, HStack, Image, Link, Text } from '@chakra-ui/react';

import { ProjectDTO } from '../../types';

type Props = {
  data: ProjectDTO;
};

export default function ProjectCard({ data }: Props) {
  return (
    <Box
      bg="white"
      minW="300px"
      minH="120px"
      maxW="300px"
      h="fit-content"
      padding="10px"
      margin="0 auto"
    >
      <HStack justifyContent="space-between" mb="4">
        <Link
          target="_blank"
          bg="black"
          color="whitesmoke"
          padding="0 10px"
          href={data?.linkRepo}
        >
          Go to Repo
        </Link>

        {data.linkGoTo && (
          <Link
            target="_blank"
            bg="black"
            color="whitesmoke"
            padding="0 10px"
            href={data?.linkGoTo}
          >
            To view
          </Link>
        )}
      </HStack>
      {/* <Image
        margin="10px 0"
        w="full"
        h="56"
        objectFit="cover"
        objectPosition="top center"
        src={data.thumbnail}
        alt="projeto#1"
        fallbackSrc="https://via.placeholder.com/150"
      /> */}
      <Heading fontSize="1.2em" as="h2" mb="2">
        {data?.name}
      </Heading>
      {data?.tags?.map((tag) => (
        <Badge m="0.2em" colorScheme="blue" key={Math.random() * 100}>
          {tag}
        </Badge>
      ))}
    </Box>
  );
}
