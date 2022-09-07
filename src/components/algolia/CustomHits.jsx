import React from "react";
import { useInfiniteHits } from 'react-instantsearch-hooks-web';
import { SimpleGrid, Skeleton, Button, Box, Center, Text, VStack } from "@chakra-ui/react";
import CustomHit from "./CustomHit";

function CustomHits(props) {
    const { hits,
        currentPageHits,
        results,
        isFirstPage,
        isLastPage,
        showPrevious,
        showMore,
        sendEvent
    } = useInfiniteHits(props);
    return (
        <VStack spacing={3}>
            <SimpleGrid columns={[1, 2, 4, 4, 6]} gap={6}>
                {hits.map(hit => {
                    return (
                        <CustomHit fallback={Skeleton} key={hit.objectID} hit={hit} sendEvent={sendEvent('click', hit, 'Item Clicked')} />
                    )
                })}
            </SimpleGrid>
            <Text>Showing {hits.length} of {results.nbHits} results</Text>
            <Center>{!isLastPage && <Button colorScheme="red" size="lg" onClick={showMore}>See more results</Button>}</Center>
        </VStack>
    );
}

export default CustomHits;  