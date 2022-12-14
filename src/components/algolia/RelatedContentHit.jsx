import React from "react";
import { Box, GridItem, Image, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import PrettyTitle from "./PrettyTitle";

const RelatedContentHit = ({ hit }) => {
    return (
        <GridItem>
            <LinkBox>
                <LinkOverlay href={hit.url} title={hit.description}>
                    <Image src={hit.image} alt={hit.title} borderRadius="md" />
                    <Text fontWeight={500}>
                        <PrettyTitle title={hit.ldJsonData.name} />
                    </Text>
                </LinkOverlay>
            </LinkBox>
        </GridItem>
    )
}

export default RelatedContentHit;