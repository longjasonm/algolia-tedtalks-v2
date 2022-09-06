import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  HStack,
  Center,
  SimpleGrid,
  Flex
} from '@chakra-ui/react';
import SiteHeader from './components/SiteHeader';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-hooks-web';
import CustomHits from './components/algolia/CustomHits';
import CustomRefinementList from './components/algolia/CustomRefinementList';
import CustomClearRefinementButton from './components/algolia/CustomClearRefinementButton';
import CustomDurationMenu from './components/algolia/CustomDurationMenu';
// import CustomCurrentRefinements from './components/algolia/CustomCurrentRefinements';

const searchClient = algoliasearch('JINA8T7GLB', 'cccd3ff2b3aaa504c5028daee311d2ea');

function App() {
  return (
    <ChakraProvider theme={theme}>
      <InstantSearch searchClient={searchClient} indexName="TEDTalks_talks_v2">
        <Box mx="auto" background="gray.100">
          <Grid spacing={6} justify="center">
            <SiteHeader searchClient={searchClient} />
            <Box w="100%" p={3} >
              <Center mb={[1, 2]}>Filter your results by:</Center>
              <Flex spacing={3} justify="center" flexDirection={["column", "row"]}>
                <CustomRefinementList attribute={'keywords'} title="Keywords" searchable={true} />
                <CustomRefinementList attribute={'author'} title="Speakers" searchable={true} />
                <CustomDurationMenu attribute={'duration'} title="Duration" />
                <CustomClearRefinementButton />
              </Flex>
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
