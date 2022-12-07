import { Badge, Box, Heading, HStack, Image, Link, Text } from '@chakra-ui/react';

import { ProjectDTO } from '../../types';

type Props = {
  data: ProjectDTO;
};

export default function ProjectCard({ data }: Props) {
  return (
    <Box bg="white" maxW="300px" padding="10px" margin="0 auto">
      <HStack justifyContent="space-between">
        <Link bg="black" color="whitesmoke" padding="0 10px" href={data?.linkRepo}>
          Repo
        </Link>
        {/* <Link bg="black" color="whitesmoke" padding="0 10px" href={data?.linkGoTo}>
          Go to
        </Link> */}
      </HStack>
      <Image
        margin="10px 0"
        src={data?.thumbnail}
        alt="projeto#1"
        fallbackSrc="https://via.placeholder.com/150"
      />
      <Heading fontSize="1.2em" as="h2">
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
