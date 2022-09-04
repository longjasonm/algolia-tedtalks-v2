import React from "react";
import { Box, GridItem, Image, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import CleanTitle from "./CleanTitle";

const RelatedContentHit = ({ hit }) => {
    return (
        <GridItem>
            <LinkBox>
                <LinkOverlay href={hit.url}>
                    <Image src={hit.image} alt={hit.title} borderRadius="md" />
                    <Text fontWeight={500}>
                        <CleanTitle title={hit.ldJsonData.name} />
                    </Text>
                </LinkOverlay>
            </LinkBox>
        </GridItem>
    )
}

export default RelatedContentHit;