import { Flex } from '@chakra-ui/react';

import WelcomeSign from './WelcomeSign';

export default function Thumbnail() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      bgImage="url(https://media.tenor.com/WPqFfKvgIbUAAAAd/stars-train.gif)"
      bgSize="cover"
    >
      <WelcomeSign />
    </Flex>
  );
}
