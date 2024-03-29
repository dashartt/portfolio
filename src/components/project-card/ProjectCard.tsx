import { Badge, Box, Heading, HStack, Image, Link } from '@chakra-ui/react';
import { useId } from 'react';

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
      <HStack justifyContent="flex-end" mb="4">
        <Link
          target="_blank"
          bg="black"
          color="whitesmoke"
          padding="0 10px"
          href={data?.linkRepo}
        >
          repo
        </Link>

        {data.linkGoTo && (
          <Link
            target="_blank"
            bg="black"
            color="whitesmoke"
            padding="0 10px"
            href={data?.linkGoTo}
          >
            view
          </Link>
        )}
      </HStack>
      {data.thumbnail && (
        <Image
          margin="10px 0"
          w="full"
          h="56"
          objectFit="cover"
          objectPosition="top center"
          src={`/img/thumbnail-projects/${data.name}.png`}
          alt={`Thumbnail do projeto ${data.name}`}
        />
      )}
      <Heading fontSize="1.2em" as="h2" mb="2">
        {data?.name}
      </Heading>
      {data?.tags?.map((tag) => (
        <Badge m="0.2em" colorScheme="blue" key={useId()}>
          {tag}
        </Badge>
      ))}
    </Box>
  );
}
