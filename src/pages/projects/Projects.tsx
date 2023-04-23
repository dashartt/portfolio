import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import { useId } from 'react';

import bgImage from '../../../public/img/dark-sky.gif';
import projects from '../../../public/projects.json';
import Header from '../../components/header/Header';
import ProjectCard from '../../components/project-card/ProjectCard';

export default function Projects() {
  document.title = 'Projects | Portfolio';

  return (
    <Box minH="100vh" bgImage={bgImage} bgSize="cover" padding="2em">
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
          <ProjectCard key={useId()} data={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
