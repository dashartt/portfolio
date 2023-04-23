import { Flex } from '@chakra-ui/react';

import bgImage from '../../../public/img/dark-sky.gif';
import WelcomeSign from './WelcomeSign';

export default function Home() {
  document.title = 'Home | Portfolio';
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      bgImage={bgImage}
      bgSize="cover"
    >
      <WelcomeSign />
    </Flex>
  );
}
