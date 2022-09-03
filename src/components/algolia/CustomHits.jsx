import React from "react";
import { useInfiniteHits } from 'react-instantsearch-hooks-web';
import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import CustomHit from "./CustomHit";

function CustomHits(props) {
    const { hits, results, sendEvent } = useInfiniteHits(props);
    return (<SimpleGrid minChildWidth="300px" gap={6}>
        {hits.map(hit => {
            return (
                <CustomHit fallback={Skeleton} key={hit.objectID} hit={hit} sendEvent={sendEvent} />
            )
        })}
    </SimpleGrid>);
}

export default CustomHits;  