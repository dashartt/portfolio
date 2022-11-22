import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      li: {
        'list-style-type': 'none',
      },
    },
  },
});

export default theme;
