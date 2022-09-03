import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  HStack,
  Heading,
  Center,
  Divider,
  Input
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './components/Logo';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch-hooks-web';
import CustomSearchBox from './components/algolia/CustomSearchbox';
import CustomHits from './components/algolia/CustomHits';

const searchClient = algoliasearch('JINA8T7GLB', 'cccd3ff2b3aaa504c5028daee311d2ea');

function App() {
  return (
    <ChakraProvider theme={theme}>
      <InstantSearch searchClient={searchClient} indexName="TEDTalks_talks_v2">
        <Box mx="auto" px={6}>
          <VStack spacing={6} align="center" justify="center">
            <Flex w="100%" align="center" p={3} borderBottom="1px" borderColor="gray.200">
              <Center w="200px" py={3} px={6}>
                <Logo />
              </Center>
              <Box flex={1}>
                <Heading as="h1" size="xl" fontWeight="100">Ideas worth spreading</Heading>
              </Box>
              <Box flex={1}>
                <CustomSearchBox />
              </Box>
            </Flex>
            <Box w="100%" p={3}>
              {/* Horizontal Facets */}
            </Box>
            <Box w="100%" p={3}>
              <CustomHits />
            </Box>
          </VStack>
        </Box>
      </InstantSearch>
    </ChakraProvider>
  );
}

export default App;
