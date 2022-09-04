import { useRelatedProducts } from '@algolia/recommend-react';
import recommend from '@algolia/recommend';
import RelatedContentHit from './RelatedContentHit';
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const recommendClient = recommend('JINA8T7GLB', 'cccd3ff2b3aaa504c5028daee311d2ea');
const indexName = 'TEDTalks_talks_v2';


const RelatedContent = ({ currentObjectID }) => {
    // ...
    const { recommendations } = useRelatedProducts({
        recommendClient,
        indexName,
        objectIDs: [currentObjectID],
        maxRecommendations: 3,
    });

    return (
        <Box my={6}>
            <Heading size="md">Related Content</Heading>
            <SimpleGrid minChildWidth="100px" gap={6} mt={3}>
                {recommendations.map((hit) => (
                    <RelatedContentHit key={hit.objectID} hit={hit} />
                ))}
            </SimpleGrid>
        </Box>
    )
}

export default RelatedContent;
