import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react';

import projects from '../../../assets/projects/projects.json';
import Header from '../../components/header/Header';
import ProjectCard from '../../components/project-card/ProjectCard';

export default function Projects() {
  return (
    <Box
      minH="100vh"
      bgImage="url(https://i.pinimg.com/originals/9f/65/fa/9f65fa4741fbf0750544bf7c0fb7ae4d.gif)"
      bgSize="cover"
      padding="2em"
    >
      <Header />

      <Heading
        margin="1.5em"
        width="fit-content"
        color="white"
        borderBottom="1px solid white"
        as="h1"
      >
        Projetos
      </Heading>

      <SimpleGrid
        margin="1.5m"
        columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
        gap="2em"
      >
        {projects?.map((project) => (
          <ProjectCard key={Math.random() * 100} data={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
