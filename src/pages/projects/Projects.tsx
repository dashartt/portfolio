import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

import projects from '../../assets/projects/projects.json';
import Header from '../../components/header/Header';
import ProjectCard from '../../components/project-card/ProjectCard';

export default function Projects() {
  return (
    <Box minH="100vh" bgImage="url(src/assets/dark-sky.gif)" bgSize="cover" padding="2em">
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

      <SimpleGrid margin="1.5m" columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap="2em">
        {projects?.map((project) => (
          <ProjectCard key={Math.random() * 100} data={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
