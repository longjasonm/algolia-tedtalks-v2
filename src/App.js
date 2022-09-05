import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Grid,
  theme,
  HStack,
  Heading,
  Center,
  Spacer
} from '@chakra-ui/react';
import { Logo } from './components/Logo';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-hooks-web';
import CustomHits from './components/algolia/CustomHits';
import Autocomplete from './components/algolia/Autocomplete.tsx';
import CustomRefinementList from './components/algolia/CustomRefinementList';
import CustomClearRefinementButton from './components/algolia/CustomClearRefinementButton';
import CustomDurationMenu from './components/algolia/CustomDurationMenu';
// import CustomCurrentRefinements from './components/algolia/CustomCurrentRefinements';

const searchClient = algoliasearch('JINA8T7GLB', 'cccd3ff2b3aaa504c5028daee311d2ea');

function App() {
  return (
    <ChakraProvider theme={theme}>
      <InstantSearch searchClient={searchClient} indexName="TEDTalks_talks_v2">
        <Box mx="auto" px={6}>
          <Grid spacing={6} justify="center">
            <Flex w="100%" align="center" p={3} borderBottom="1px" borderColor="gray.200">
              <HStack>
                <Center w="200px" py={3} px={6}>
                  <Logo />
                </Center>
                <Box>
                  <Heading as="h1" size="xl" fontWeight="100">Ideas worth spreading</Heading>
                </Box>
              </HStack>
              <Spacer flex={1} />
              <Box flex={2}>
                <Autocomplete
                  searchClient={searchClient}
                  placeholder="Search for talks..."
                  detachedMediaQuery="none"
                  openOnFocus />
              </Box>
            </Flex>
            <Box w="100%" p={3}>
              <HStack spacing={3} align="left">
                <CustomRefinementList attribute={'keywords'} title="Keywords" searchable={true} />
                <CustomRefinementList attribute={'author'} title="Speakers" searchable={true} />
                <CustomDurationMenu attribute={'duration'} title="Duration" />
                <CustomClearRefinementButton />
              </HStack>
            </Box>
            <Box w="100%" p={3}>
              <CustomHits />
            </Box>
          </Grid>
        </Box>
      </InstantSearch>
    </ChakraProvider >
  );
}

export default App;
